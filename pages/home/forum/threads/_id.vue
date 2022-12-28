<template>
  <div>
    <Header />
    <div class="flex justify-between items-center">
      <BreadcrumbsForum :routes="routes" />
      <div class="px-4 py-2 flex items-center">
        <BaseButtonsSimpleLink :to="'/home/forum/create/' + route.params.id">
          Užduoti klausimą
        </BaseButtonsSimpleLink>
      </div>
    </div>
    <div class="sm:space-y-0 w-full mt-2">
      <div class="flex flex-col space-y-2 w-full">
        <div>
          <template v-if="!loading">
            <template v-if="questions && questions.length > 0">
              <div class="bg-white px-4 py-2">
                <SidebarMenuLink
                  v-for="question in questions"
                  :url="'/home/forum/questions/' + question.id"
                >
                  <Material icon="help" />
                  <span>{{ question.name }}</span>
                  <span
                    class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
                  >
                    <span v-if="question.children_count">
                      {{ question.children_count }}
                    </span>
                    <span v-else> 0 </span>
                  </span>
                </SidebarMenuLink>
              </div>
            </template>
            <template v-else>
              <ErrorsAlert />
            </template>
          </template>
          <template v-else>
            <Loader class="p-4" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import Header from "@/Header.vue";
import { useRoute, useStore } from "@nuxtjs/composition-api";
import useForum from "uses/useForum.js";
import BreadcrumbsForum from "@/Breadcrumbs/Forum.vue";
import BaseButtonsSimpleLink from "@/Base/Buttons/SimpleLink.vue";
import ErrorsAlert from "@/Errors/Alert.vue";
import Loader from "@/Loader.vue";

const route = useRoute();
const store = useStore();
const { fetchQuestions, fetchThread } = useForum();
const loading = ref(true);

onMounted(() => {
  fetchThread(route.value.params.id);
  fetchQuestions(route.value.params.id).then(() => {
    loading.value = false;
  });
});

const page = computed(() => {
  return store.getters["forum/page"];
});

const thread = computed(() => {
  return store.getters["forum/thread"];
});

const questions = computed(() => {
  return store.getters["forum/questions"];
});

const routes = computed(() => {
  return [
    {
      name: "Forumas",
      url: "/home/forum/",
    },
    {
      name: thread.value?.parent?.name,
      url: "/home/forum/" + thread.value?.parent_id,
    },
    {
      name: thread.value?.name,
      url: "/home/forum/index",
    },
  ];
});
</script>

<script>
export default {
  layout: "home",
  middleware: "auth",
};
</script>
