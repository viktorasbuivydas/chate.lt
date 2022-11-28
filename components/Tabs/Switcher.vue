<template>
  <div class="flex items-center md:mt-0 mt-4 space-x-2">
    <button
      v-for="tab in tabs"
      :aria-label="tab.name"
      class="p-3 focus:ring-offset-2 text-sm leading-none rounded focus:outline-none hover:bg-gray-200"
      :class="[
        isActive(tab.value)
          ? 'bg-blue-500 text-white hover:bg-blue-700'
          : 'text-blue-700 p-3 bg-gray-100',
      ]"
      @click="switchTab(tab.value)"
    >
      {{ tab.name }}
    </button>
  </div>
</template>
<script setup>
import { onMounted, useStore } from "@nuxtjs/composition-api";

const store = useStore();

const props = defineProps({
  tabs: {
    type: Array,
  },
  setDefaultTab: {
    type: Boolean,
  },
});

const isActive = (item) => {
  return activeTab() === item;
};

const activeTab = () => {
  return store.getters["user/tab"];
};

onMounted(() => {
  if (!props.setDefaultTab) {
    return;
  }
  switchTab(props.tabs[0].value);
});

const switchTab = (tab) => {
  store.dispatch("user/setTab", tab);
};
</script>
