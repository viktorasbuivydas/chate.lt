<template>
  <Card>
    <div class="flex flex-col flex-grow p-2">
      <ContentLink
        v-if="items"
        v-for="(item, index) in items.children"
        :key="index"
        :url="item.route_url"
      >
        <Material :icon="item.icon" />
        <span>{{ item.name }}</span>
      </ContentLink>
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
import ContentLink from "@/Content/Link.vue";
import Material from "@/Material.vue";
import { ref, computed } from "vue";
import menuData from "+/menu.json";
import { useRoute } from "@nuxtjs/composition-api";

const route = useRoute();

const items = computed(() => {
  return menuData.find((item) => item.route_url === route.value.path);
});
</script>
