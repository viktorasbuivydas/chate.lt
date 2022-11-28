<template>
  <div class="w-full bg-white p-6 shadow rounded-md">
    <div class="md:flex items-center justify-between">
      <h1
        tabindex="0"
        role="heading"
        aria-label="Product ranking"
        class="text-2xl font-medium leading-normal text-gray-800"
      >
        {{ title }}
      </h1>
      <TabsSwitcher :tabs="tabs" :set-default-tab="true" v-if="tabs" />
    </div>
  </div>
</template>
<script setup>
import TabsSwitcher from "@/Tabs/Switcher.vue";

const props = defineProps({
  tabs: {
    type: Array,
  },
  title: {
    type: String,
  },
});
</script>
