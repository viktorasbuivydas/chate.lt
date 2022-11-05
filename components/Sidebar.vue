<template>
  <div class="hidden md:flex flex-col space-y-2">
    <SidebarMenuLink
      v-for="(item, index) in items"
      :key="index"
      :url="item.route_url"
      :active="item.route_url === currentRoute"
      class="flex flex-col"
    >
      <div class="flex flex-col justify-center items-center text-xs">
        <Material :icon="item.icon" />
        <span>{{ item.name }}</span>
      </div>
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
const currentRoute = computed(() => {
  return "/" + route.value.path.split("/")[1];
});

const isMobileSidebarOpened = ref(false);

const activeItem = computed(() => {
  return props.items.find((item) => item.route_url === currentRoute.value);
});
</script>
