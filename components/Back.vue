<template>
  <div class="w-fit">
    <nuxt-link :to="to" class="px-4 py-2 flex flex-shrink-0 items-center">
      <Material icon="arrow_back" />
      <span>Atgal</span>
    </nuxt-link>
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
