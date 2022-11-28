<template>
  <nuxt-link
    :to="url"
    class="flex flex-row space-x-2 items-center hover:bg-gray-100 rounded-xl p-2"
    :class="[
      isActive() ? 'bg-brand hover:bg-brand-hover text-white' : 'text-gray-800',
    ]"
  >
    <div class="flex w-full items-center space-x-2 p-2 rounded-md">
      <Material :icon="icon" />
      <span>
        <slot></slot>
      </span>
      <slot name="trailing" />
    </div>
  </nuxt-link>
</template>

<script setup>
import Material from "@/Material.vue";
const props = defineProps(["url", "name", "icon", "current"]);
const isActive = () => {
  return props.current === props.name;
};
</script>
