<template>
  <div>
    <form @submit.prevent="sendMessage" class="flex flex-col w-full">
      <div class="flex flex-col space-y-2 w-full mb-4 lg:mb-0 mr-10">
        <div>Žinutė</div>
        <div class="w-full rounded-md">
          <textarea
            rows="5"
            v-model="form.content"
            class="flex w-full pr-10 border rounded-xl focus:outline-none focus:border-blue-300 p-2"
          >
          </textarea>
        </div>
      </div>

      <div class="flex items-end justify-end mt-4">
        <button
          type="submit"
          class="focus:opacity-90 focus:ring-offset-2 focus:ring-2 focus:ring-blue-700 text-xs font-medium leading-3 text-white py-3 px-4 rounded bg-blue-500 focus:outline-none hover:opacity-90"
        >
          Siųsti
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import useAlerts from "uses/useAlerts.js";
import { useContext } from "@nuxtjs/composition-api";

const { pushSuccessAlert, pushErrorAlert } = useAlerts();
const props = defineProps({
  toUsername: {
    type: String,
    required: true,
  },
});

const { $axios } = useContext();

const form = ref({
  username: "",
  content: "",
});

const sendMessage = () => {
  form.value.username = props.toUsername;
  $axios
    .post("/inbox/store", form.value)
    .then(() => {
      form.value.content = "";
      pushSuccessAlert("Žinutė sėkmingai išsiųsta");
    })
    .catch((e) => {
      pushErrorAlert(e.response.data.message);
    });
};
</script>
