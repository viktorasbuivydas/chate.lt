<template>
  <div class="flex flex-col space-y-4">
    <Header />
    <BreadcrumbsForum :routes="routes" />
    <div class="flex flex-col space-y-4 py-2 px-4">
      <div
        v-if="question"
        class="w-full rounded-md py-4 px-5 bg-white border border-gray-200 dark:bg-gray-800"
      >
        <div class="font-semibold text-lg">
          {{ question.name }}
        </div>
        <div>
          {{ question.content }}
        </div>
      </div>

      <div class="sm:space-y-0 w-full">
        <form
          @submit.prevent="storeQuestion"
          class="flex flex-col space-y-2 w-full"
        >
          <div>Jūsų žinutė</div>
          <div>
            <textarea
              v-model="form.content"
              required
              class="flex w-full pr-10 border rounded-xl focus:outline-none focus:border-indigo-300 p-2"
              rows="5"
            >
            </textarea>
            <ErrorsForm :error="errors?.content" />
          </div>
          <div>
            <BaseButtonsSimple>Rašyti</BaseButtonsSimple>
          </div>
        </form>
      </div>
      <div class="sm:space-y-0 w-full">
        <div class="mb-4">Komentarai</div>
        <CardChat
          v-for="(message, index) in comments"
          :key="index"
          :message="message"
          @replyTo="replyTo($event)"
          :type="
            message.username === $auth.user.data.username ? 'user' : 'toUser'
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute, useStore } from "@nuxtjs/composition-api";
import BreadcrumbsForum from "@/Breadcrumbs/Forum.vue";
import Header from "@/Header.vue";
import BaseButtonsSimple from "@/Base/Buttons/Simple.vue";
import useForum from "uses/useForum.js";
import CardChat from "@/Card/Chat.vue";
import ErrorsForm from "@/Errors/Form.vue";

const { fetchQuestion, fetchComments, writeComment } = useForum();
const route = useRoute();
const store = useStore();
const errors = ref([]);

const form = ref({
  content: "",
  to: "",
});

onMounted(() => {
  fetchQuestion(route.value.params.id);
  fetchComments(route.value.params.id);
});

const question = computed(() => {
  return store.getters["forum/question"];
});

const comments = computed(() => {
  return store.getters["forum/comments"];
});

const routes = computed(() => {
  return [
    {
      name: "Forumas",
      url: "/home/forum",
    },
    {
      name: question.value?.thread.name,
      url: "/home/forum/threads/" + question.value?.thread.id,
    },
    {
      name: question.value?.name,
      url: "/home/forum/create",
    },
  ];
});

const replyTo = (event) => {
  console.log(event);
  form.value.to = event;
};

const removeTo = () => {
  content.value.to = "";
};

const storeQuestion = () => {
  writeComment(form.value.content, route.value.params.id)
    .then(() => {
      form.value.content = "";
      fetchComments(route.value.params.id);
    })
    .catch((error) => {
      errors.value = error.response.data.errors;
    });
};
</script>

<script>
export default {
  layout: "home",
  middleware: "auth",
};
</script>
