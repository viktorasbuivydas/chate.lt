<template>
  <div class="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-900">
    <div
      class="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 flex flex-col justify-center px-2 sm:px-0 py-16"
    >
      <div class="px-2 sm:px-6">
        <h3 class="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">
          {{ $t("login.message") }}
        </h3>
      </div>
      <form @submit.prevent="login">
        <div class="mt-4 w-full px-2 sm:px-6">
          <div class="flex flex-col mt-8">
            <label for="email" class="text-lg font-semibold leading-tight"
              >El. pašto adresas</label
            >
            <input
              id="email"
              required
              aria-required="true"
              v-model="form.email"
              class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
              type="email"
            />
            <ErrorsForm :error="errors.email" />
          </div>
          <div class="flex flex-col mt-8">
            <label for="username" class="text-lg font-semibold leading-tight"
              >Vartotojo vardas</label
            >
            <input
              id="username"
              required
              aria-required="true"
              v-model="form.username"
              class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
              type="text"
            />
            <ErrorsForm :error="errors.username" />
          </div>
          <div class="flex flex-col mt-5">
            <label for="password" class="text-lg font-semibold fleading-tight"
              >Slaptažodis</label
            >
            <input
              id="password"
              required
              aria-required="true"
              v-model="form.password"
              type="password"
              class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
            />
            <ErrorsForm :error="errors.password" />
          </div>

          <div class="flex flex-col mt-5">
            <label for="password" class="text-lg font-semibold fleading-tight"
              >Pakartokite slaptažodį</label
            >
            <input
              id="password"
              required
              aria-required="true"
              v-model="form.password"
              type="password"
              class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
            />
            <ErrorsForm :error="errors.password_confirmation" />
          </div>

          <div class="flex flex-col mt-5">
            <label for="password" class="text-lg font-semibold fleading-tight"
              >Kodas</label
            >
            <input
              id="code"
              required
              disabled="true"
              aria-required="true"
              v-model="form.code"
              type="text"
              class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
            />
            <ErrorsForm :error="errors.code" />
          </div>
        </div>
        <!-- <div class="pt-6 w-full flex justify-between px-2 sm:px-6">
          <div class="flex items-center">
            <input
              id="rememberme"
              name="rememberme"
              v-model="form.remember"
              class="w-3 h-3 mr-2"
              type="checkbox"
            />
            <label for="rememberme" class="text-xs">Prisiminti mane</label>
          </div>
          <a class="text-xs text-blue-600" href="">Pamiršai slaptažodį?</a>
        </div> -->
        <div class="px-2 sm:px-6">
          <button
            type="submit"
            class="focus:outline-none w-full sm:w-auto bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-3 text-sm mt-6"
          >
            <template v-if="loading">
              <Loader />
            </template>
            <template v-else> Registruotis </template>
          </button>
          <p class="mt-6 text-xs">
            Neturi paskyros?
            <nuxt-link
              :to="localePath({ name: 'get-code' })"
              class="text-blue-600"
            >
              Gauti registracijos kodą
            </nuxt-link>
          </p>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "auth",
};
</script>

<script setup>
import { useContext, useRoute, useRouter } from "@nuxtjs/composition-api";
import { ref } from "vue";
import ErrorsForm from "@/Errors/Form.vue";
import Loader from "@/Loader.vue";

const errors = ref({});

const { $axios, $auth } = useContext();
const router = useRouter();
const route = useRoute();
const loading = ref(false);

const form = ref({
  email: "",
  username: "",
  password: "",
  password_confirmation: "",
  code: route.value.params.code,
});

const login = () => {
  loading.value = true;
  $axios
    .post("/register", {
      ...form.value,
    })
    .then(() => {
      // $toast.success("Sėkmingai užsiregistravote", { duration: 3000 });
      $auth
        .loginWith("local", {
          data: form.value,
        })
        .then(() => {
          router.push("/home");
        });
    })
    .catch((error) => {
      console.log(error);
      errors.value = error.response.data.errors;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
