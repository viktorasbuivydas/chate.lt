<template>
  <form
    @submit.prevent="submit"
    class="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-900"
  >
    <div
      class="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 flex flex-col justify-center px-2 sm:px-0 py-16"
    >
      <div class="px-2 sm:px-6">
        <h3 class="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">
          Gauti registracijos kodą
        </h3>
      </div>
      <div class="mt-8 w-full px-2 sm:px-6">
        <div class="flex flex-col mt-8">
          <label for="email" class="text-lg font-semibold leading-tight"
            >El. pašto adresas</label
          >
          <input
            id="email"
            required
            :disabled="submitted"
            aria-required="true"
            v-model="form.email"
            name="email"
            class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
            type="email"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label for="password" class="text-lg font-semibold fleading-tight"
            >Priežastis</label
          >
          <textarea
            required
            aria-required="true"
            v-model="form.content"
            :disabled="submitted || submitted"
            name="content"
            rows="5"
            class="px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
          ></textarea>
        </div>
      </div>
      <div class="px-2 sm:px-6">
        <BaseButtonsSimple :loading="loading">Siųsti prašymą</BaseButtonsSimple>
        <p class="mt-6 text-xs">
          Jau turite paskyrą?
          <nuxt-link :to="localePath({ name: 'index' })" class="text-blue-600"
            >Prisijungti</nuxt-link
          >
        </p>
      </div>
    </div>
  </form>
</template>

<script>
import Loader from "@/Loader.vue";
import { useContext } from "@nuxtjs/composition-api";
import BaseButtonsSimple from "@/Base/Buttons/Simple.vue";

export default {
  layout: "auth",
  middleware: "guest",
};
</script>

<script setup>
import { ref } from "vue";
const { $axios } = useContext();

const loading = ref(false);
const form = ref({
  email: "",
  content: "",
});
const submitted = ref(false);

const submit = () => {
  if (!form.value.email || !form.value.content) {
    return;
  }

  loading.value = true;

  $axios
    .post("/requests/store", {
      email: form.value.email,
      content: form.value.content,
    })
    .then(() => {
      form.value.email = "";
      form.value.content = "";
      submitted.value = true;
    })
    .finally(() => {
      loading.value = false;
    });
};
</script>
