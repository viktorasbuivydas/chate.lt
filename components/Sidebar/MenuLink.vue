<template>
  <nuxt-link
    :to="url"
    class="flex flex-row space-x-2 items-center hover:bg-gray-100 rounded-xl py-4 px-6"
    :class="[
      active ? 'bg-brand hover:bg-brand-hover text-white' : 'text-gray-800',
    ]"
  >
    <div class="flex flex-col justify-center items-center text-xs">
      <slot name="leading" />
    </div>

    <slot />
    <slot name="trailing" />
  </nuxt-link>
</template>
<script setup>
const props = defineProps(["active", "url"]);
</script>
