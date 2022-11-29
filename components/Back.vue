<template>
  <div class="px-4 py-2 flex items-center">
    <Material icon="arrow_back" />
    <nuxt-link :to="to">Atgal</nuxt-link>
  </div>
</template>
<script setup>
import Material from "@/Material.vue";
const props = defineProps({
  to: {
    type: String,
    required: true,
  },
});
</script>
