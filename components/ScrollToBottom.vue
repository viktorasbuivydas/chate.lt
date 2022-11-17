<template>
  <div>
    <div
      v-if="showScroll"
      class="absolute flex cursor-pointer hover:bg-gray-900 items-center justify-center bottom-0 left-1/2 z-10 bg-gray-700 rounded-full p-1"
    >
      <Material icon="arrow_downward" class="text-white text-md" />
    </div>
  </div>
</template>
<script setup>
import Material from "@/Material.vue";
const props = defineProps({
  showScroll: {
    type: Boolean,
    default: false,
  },
});
</script>
