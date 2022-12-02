<template>
  <nuxt-link
    :to="link"
    class="flex items-center space-x-2 border border-gray-100 bg-white hover:bg-gray-100 p-4 rounded-md"
    :class="{ 'bg-blue-100': active }"
  >
    <Material :icon="props.icon" />
    <div>{{ props.title }}</div>
  </nuxt-link>
</template>

<script setup>
import Material from "@/Material.vue";

const props = defineProps({
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

  active: {
    type: Boolean,
    default: false,
  },
});
</script>
