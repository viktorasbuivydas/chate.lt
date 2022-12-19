<template>
  <div>
    <div>
      <Header />
    </div>
    <Card class="flex flex-col space-y-4">
      <template #headline> Pagrindines forumo temos </template>
      <template #content>
        <div class="sm:space-y-0 w-full">
          <div class="flex flex-col space-y-2 w-full">
            <SidebarMenuLink
              v-if="threads && threads.length > 0"
              v-for="thread in threads"
              :url="'/home/forum/' + thread.id"
            >
              <span>{{ thread.name }}</span>
              <Material :icon="thread.icon" />
              <span
                class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
              >
                {{ thread.children_count }}
              </span>
            </SidebarMenuLink>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup>
import Card from "@/Card.vue";
import { ref, computed, onMounted } from "vue";
import menuData from "+/menu.json";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { useRoute, useStore } from "@nuxtjs/composition-api";
import useForum from "uses/useForum.js";
import Header from "@/Header.vue";

const route = useRoute();
const store = useStore();

const { fetchThreads } = useForum();
onMounted(() => {
  fetchThreads(null, page.value);
});

const page = computed(() => {
  return store.getters["forum/page"];
});

const threads = computed(() => {
  return store.getters["forum/thread"];
});

const items = computed(() => {
  return menuData.find((item) => item.route_url === route.path);
});
</script>

<script>
export default {
  layout: "home",
  middleware: "auth",
};
</script>
