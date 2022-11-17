<template>
  <nuxt-link
    :to="url"
    class="flex flex-row space-x-2 items-center hover:bg-gray-100 rounded-xl p-2"
    :class="[
      active ? 'bg-brand hover:bg-brand-hover text-white' : 'text-gray-800',
    ]"
  >
    <div
      class="flex w-full items-center space-x-2 hover:bg-gray-100 p-2 rounded-md"
    >
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
const props = defineProps(["active", "url", "icon"]);
</script>
