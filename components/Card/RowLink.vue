<template>
  <nuxt-link
    :to="link"
    class="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
  >
    <Material :icon="props.icon" />
    <div>{{ props.title }}</div>
  </nuxt-link>
</template>

<script setup>
import Material from "@/Material.vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  icon: {
    type: String,
    required: true,
  },

  link: {
    type: String,
    required: true,
  },
});
</script>
