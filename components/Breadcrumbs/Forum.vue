<template>
  <div class="w-fit flex px-4 py-2">
    <div v-for="(route, index) in routes" class="flex items-center space-x-1">
      <template v-if="index < routes.length - 1">
        <nuxt-link :to="route.url" class="hover:text-brand">
          <span>{{ route.name }}</span>
        </nuxt-link>
        <Material icon="navigate_next" />
      </template>
      <template v-else>
        <div class="text-gray-500">
          <span>{{ route.name }}</span>
        </div>
      </template>
    </div>
  </div>
</template>
<script setup>
import Material from "@/Material.vue";
defineProps({
  routes: Array,
});
</script>
