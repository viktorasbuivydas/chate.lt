<template>
  <nuxt-link
    :to="url"
    class="flex flex-row space-x-2 items-center hover:bg-gray-100 rounded-xl p-2"
    :class="[
      active ? 'bg-brand hover:bg-brand-hover text-white' : 'text-gray-800',
    ]"
  >
    <slot />
    <slot name="trailing" />
  </nuxt-link>
</template>
<script setup>
import Material from "@/Material.vue";
const props = defineProps(["active", "url"]);
</script>
