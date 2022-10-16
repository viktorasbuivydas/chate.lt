<template>
  <nuxt-link
    :to="url"
    class="p-4 rounded-xl font-semibold hover:bg-brand hover:text-white flex space-x-2 items-center"
    :class="[
      active ? 'bg-brand hover:bg-brand-hover text-white' : 'text-grayish',
    ]"
  >
    <slot />
    <slot name="trailing" />
  </nuxt-link>
</template>
<script>
export default {
  props: ["active", "url"],
};
</script>
