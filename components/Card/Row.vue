<template>
  <div class="flex items-center space-x-2 hover:bg-gray-100 p-2 rounded-md">
    <Material :icon="props.icon" />
    <div>{{ props.title }}</div>
  </div>
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
});
</script>
