<template>
  <ContentContainer>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div class="flex">
        <div class="grid grid-cols-2 flex-grow p-2 space-x-10">
          <Menusettings currentPage="password" />
          <form
            @submit.prevent="changePassword"
            class="p-2 flex flex-col space-y-8"
          >
            <div class="flex flex-col">
              <label for="email" class="text-lg font-semibold leading-tight"
                >Slaptažodis</label
              >
              <input
                id="email"
                required
                :disabled="submitted"
                v-model="form.password"
                class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                type="password"
              />
              <ErrorsForm :error="errors['password']" />
            </div>

            <div class="flex flex-col">
              <label for="email" class="text-lg font-semibold leading-tight"
                >Naujas Slaptažodis</label
              >
              <input
                id="email"
                required
                :disabled="submitted"
                v-model="form.new_password"
                class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                type="password"
              />
              <ErrorsForm :error="errors['new_password']" />
            </div>

            <div class="flex flex-col">
              <label for="email" class="text-lg font-semibold leading-tight"
                >Pakartokite Slaptažodį</label
              >
              <input
                id="email"
                required
                :disabled="submitted"
                v-model="form.new_confirm_password"
                class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
                type="password"
              />
              <ErrorsForm :error="errors['new_confirm_password']" />
            </div>
            <BaseButtonsSimple> Keisti </BaseButtonsSimple>
          </form>
        </div>
      </div>
    </template>
  </ContentContainer>
</template>

<script>
export default {
  name: "settings",
  layout: "home",
  middleware: "auth",
};
</script>

<script setup>
import ContentContainer from "@/Content/Container.vue";
import Menusettings from "@/Menu/Settings.vue";
import Header from "@/Header.vue";
import BaseButtonsSimple from "@/Base/Buttons/Simple.vue";
import { ref } from "vue";
import { useContext } from "@nuxtjs/composition-api";
import useAlerts from "uses/useAlerts.js";
import ErrorsForm from "@/Errors/Form.vue";

const { $axios } = useContext();
const { pushErrorAlert, pushSuccessAlert } = useAlerts();
const submitted = ref(false);
const errors = ref([]);

const form = ref({
  password: "",
  new_password: "",
  new_confirm_password: "",
});

const changePassword = () => {
  $axios
    .patch("/user/password", form.value)
    .then(() => {
      form.value.password = "";
      form.value.new_password = "";
      form.value.new_confirm_password = "";
      errors.value = [];
      pushSuccessAlert("Slaptažodis sėkmingai pakeistas");
    })
    .catch((e) => {
      if (e.response.data.hasOwnProperty("errors")) {
        errors.value = e.response.data.errors;
      } else {
        pushErrorAlert(e.response.data.message);
      }
    });
};
</script>
