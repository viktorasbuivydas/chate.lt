<template>
  <Card class="flex flex-col sm:flex-row bg-white space-y-4">
    <template #content>
      <div class="px-4 py-2 flex items-center">
        <Material icon="arrow_back" />
        <nuxt-link to="/home/forum">Atgal</nuxt-link>
      </div>
      <div class="sm:space-y-0 w-full">
        <div class="flex flex-col space-y-2 w-full">
          <SidebarMenuLink
            :url="'/home/forum/posts/' + question.id"
            v-for="question in questions"
          >
            <Material :icon="question.icon" />
            <span>{{ question.name }}</span>
            <span
              class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
            >
              {{ question }}
            </span>
          </SidebarMenuLink>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import Card from "@/Card.vue";
import { ref, computed, onMounted } from "vue";
import menuData from "+/menu.json";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { useRoute, useStore } from "@nuxtjs/composition-api";
import useForum from "uses/useForum.js";

const route = useRoute();
const store = useStore();
const { fetchThreads } = useForum();
onMounted(() => {
  fetchThreads(route.value.params.id, page.value, true);
});

const page = computed(() => {
  return store.getters["forum/page"];
});

const messages = computed(() => {
  return store.getters["forum/messages"];
});
</script>

<script>
export default {
  layout: "home",
};
</script>
