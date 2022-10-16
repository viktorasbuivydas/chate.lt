<template>
  <Card>
    <div class="flex flex-col flex-grow p-2">
      <SidebarMenuLink
        v-if="items"
        v-for="(item, index) in items.children"
        :key="index"
        :url="item.route_url"
      >
        <Material :icon="item.icon" />
        <span>{{ item.name }}</span>
      </SidebarMenuLink>
    </div>
  </Card>
</template>

<script>
export default {
  layout: "home",
};
</script>

<script setup>
import Card from "@/Card.vue";
import SidebarMenuLink from "@/Sidebar/MenuLink.vue";
import Material from "@/Material.vue";
import { ref, computed } from "vue";
import menuData from "+/menu.json";
import { useRoute } from "@nuxtjs/composition-api";

const route = useRoute();
console.log(menuData);
const items = computed(() => {
  return menuData.find((item) => item.route_url === route.value.path);
});

console.log(items.value);
</script>
