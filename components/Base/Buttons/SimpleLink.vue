<template>
  <nuxt-link
    :to="to"
    class="focus:outline-none flex items-center justify-center w-full sm:w-auto bg-blue-500 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-3 text-sm"
  >
    <template v-if="loading">
      <Loader />
    </template>
    <template v-else>
      <slot />
    </template>
  </nuxt-link>
</template>
<script setup>
import Loader from "@/Loader.vue";
const props = defineProps({
  loading: {
    type: Boolean,
    default: false,
  },
  to: {
    type: String,
    required: true,
  },
});
</script>
