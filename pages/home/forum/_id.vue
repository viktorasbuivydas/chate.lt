<template>
  <Card class="flex flex-col space-y-4">
    <template #header>
      <Header />
    </template>
    <template #content>
      <BreadcrumbsForum :routes="routes" />
      <div class="sm:space-y-0 w-full">
        <div class="flex flex-col space-y-2 w-full">
          <template v-if="!loading">
            <SidebarMenuLink
              v-if="thread?.children"
              v-for="child in thread?.children"
              :url="'/home/forum/threads/' + child.id"
            >
              <Material :icon="child.icon" />
              <span>{{ child.name }}</span>
              <span
                class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
              >
                {{ child.question_count }}
              </span>
            </SidebarMenuLink>
          </template>
          <template v-else>
            <Loader class="p-4" />
          </template>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/Card.vue";
import { computed, ref } from "vue";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { useAsync, useRoute, useStore } from "@nuxtjs/composition-api";
import useForum from "uses/useForum.js";
import Header from "@/Header.vue";
import BreadcrumbsForum from "@/Breadcrumbs/Forum.vue";
import Loader from "@/Loader.vue";

const route = useRoute();
const store = useStore();
const { fetchThreads } = useForum();
const loading = ref(true);

const page = computed(() => {
  return store.getters["forum/page"];
});

const thread = computed(() => {
  return store.getters["forum/thread"];
});

const routes = computed(() => {
  return [
    {
      name: "Forumas",
      url: "/home/forum",
    },
    {
      name: thread.value?.name,
    },
  ];
});

useAsync(() => {
  fetchThreads(route.value.params.id, page.value).finally(() => {
    loading.value = false;
  });
});
</script>

<script>
export default {
  layout: "home",
  middleware: "auth",
};
</script>
