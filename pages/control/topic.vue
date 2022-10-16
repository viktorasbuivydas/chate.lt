<template>
  <Card class="flex flex-col sm:flex-row bg-white space-x-10 space-y-4">
    <div class="sm:w-2/5 sm:space-y-0">
      <div class="border rounded-xl border-card-border p-2 sm:p-4">
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
    </div>
    <div class="sm:w-3/5">test test test</div>
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

const route = useRoute();

const items = computed(() => {
  return menuData.find((item) => item.route_url === route.path);
});
</script>
