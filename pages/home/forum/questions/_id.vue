<template>
  <Card>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div class="px-4 py-2 flex items-center">
        <Material icon="arrow_back" />
        <nuxt-link to="/home/forum">Atgal</nuxt-link>
      </div>
      <div>
        <div>{{ question.name }}</div>
        <div>{{ question.content }}</div>
      </div>
      <div class="sm:space-y-0 w-full">
        <div class="flex flex-col space-y-2 w-full"></div>
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
import Header from "@/Header.vue";
import { useRoute, useStore } from "@nuxtjs/composition-api";
import useForum from "uses/useForum.js";

const route = useRoute();
const store = useStore();
const { fetchQuestion } = useForum();
onMounted(() => {
  fetchQuestion(route.value.params.id);
});

const page = computed(() => {
  return store.getters["forum/page"];
});

const question = computed(() => {
  return store.getters["forum/question"];
});

// const comments = computed(() => {
//   return store.getters["forum/comments"];
// });
</script>

<script>
export default {
  layout: "home",
};
</script>
