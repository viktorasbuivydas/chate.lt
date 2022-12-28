<template>
  <div>
    <div v-if="error && error[0]" class="text-red-500">{{ error[0] }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  error: {
    type: Array,
  },
});
</script>
