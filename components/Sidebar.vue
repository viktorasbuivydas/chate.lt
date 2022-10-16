<template>
  <div class="hidden flex-col md:flex space-y-2">
    <SidebarMenuLink
      v-for="(item, index) in items"
      :key="index"
      :url="item.route_url"
      :active="route.path === item.route_url"
    >
      <Material :icon="item.icon" />
      <span>{{ item.name }}</span>
    </SidebarMenuLink>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { computed, useRoute } from "@nuxtjs/composition-api";

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
});
const route = useRoute();
console.log("current name", route.value.path);

const isMobileSidebarOpened = ref(false);

const activeItem = computed(() => {
  return {
    name: "test",
    icon: "icon",
  };
});
</script>
