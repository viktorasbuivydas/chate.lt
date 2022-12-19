<template>
  <div class="flex flex-col space-y-4">
    <Header />
    <BreadcrumbsForum :routes="routes" />
    <div class="sm:space-y-0 w-full">
      <form
        @submit.prevent="storeQuestion"
        class="flex flex-col space-y-2 w-full px-4 py-2"
      >
        <div>Klausimo pavadinimas</div>
        <div>
          <input
            v-model="form.name"
            required
            class="flex w-full pr-10 border rounded-xl focus:outline-none focus:border-indigo-300 p-2"
          />
        </div>
        <div>Žinutė</div>
        <div>
          <textarea
            v-model="form.content"
            required
            class="flex w-full pr-10 border rounded-xl focus:outline-none focus:border-indigo-300 p-2"
            rows="5"
          >
          </textarea>
        </div>
        <div>
          <BaseButtonsSimple>Rašyti</BaseButtonsSimple>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useRouter, useStore } from "@nuxtjs/composition-api";
import BreadcrumbsForum from "@/Breadcrumbs/Forum.vue";
import Header from "@/Header.vue";
import BaseButtonsSimple from "@/Base/Buttons/Simple.vue";
import useForum from "uses/useForum.js";
import useAlerts from "uses/useAlerts.js";

const route = useRoute();
const router = useRouter();
const store = useStore();
const { fetchThread, writeQuestion } = useForum();
const { pushSuccessAlert } = useAlerts();
const form = ref({
  name: "",
  content: "",
});

onMounted(() => {
  fetchThread(route.value.params.id);
});

const page = computed(() => {
  return store.getters["forum/page"];
});

const thread = computed(() => {
  return store.getters["forum/thread"];
});

const routes = computed(() => {
  return [
    {
      name: thread.value?.name,
      url: "/home/forum/threads/" + route.value.params.id,
    },
    {
      name: "Užduoti klausimą",
      url: "/home/forum/create",
    },
  ];
});

const storeQuestion = () => {
  writeQuestion(
    form.value.name,
    form.value.content,
    route.value.params.id
  ).then(() => {
    pushSuccessAlert("Klausimas sėkmingai užduotas!");
    router.push("/home/forum/threads/" + route.value.params.id);
    //redirect to route using route.value
  });
};
</script>

<script>
export default {
  layout: "home",
  middleware: "auth",
};
</script>
