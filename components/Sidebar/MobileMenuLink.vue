<template>
  <nuxt-link
    :to="url"
    class="p-4 rounded-xl font-semibold hover:bg-brand hover:text-white flex space-x-2 items-center text-grayish"
  >
    <slot />
  </nuxt-link>
</template>
<script>
export default {
  props: ["url"],
};
</script>
