<template>
  <button
    type="submit"
    :disabled="loading"
    class="focus:outline-none flex items-center justify-center w-full sm:w-auto bg-blue-600 transition duration-150 ease-in-out hover:bg-blue-700 rounded text-white px-8 py-3 text-sm mt-6"
  >
    <template v-if="loading">
      <Loader />
    </template>
    <template v-else>
      <slot />
    </template>
  </button>
</template>
<script setup>
import Loader from "@/Loader.vue";
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
});
</script>
