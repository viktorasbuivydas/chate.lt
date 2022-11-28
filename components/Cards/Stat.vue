<template>
  <!-- Card is full width. Use in 12 col grid for best view. -->
  <!-- Card code block start -->
  <div>
    <div
      class="bg-white dark:bg-gray-800 rounded shadow px-8 py-6 flex items-center"
    >
      <div class="p-4 bg-blue-700 rounded">
        <Material :icon="icon" class="text-white" />
      </div>
      <div class="ml-6">
        <h3
          class="mb-1 leading-5 text-gray-800 dark:text-gray-100 font-bold text-2xl"
        >
          {{ count }}
        </h3>
        <p
          class="text-gray-600 dark:text-gray-400 text-sm tracking-normal font-normal leading-5"
        >
          {{ title }}
        </p>
      </div>
    </div>
  </div>
  <!-- Card code block end -->
</template>

<script setup>
import Material from "@/Material.vue";

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  count: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
