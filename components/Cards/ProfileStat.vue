<template>
  <div class="mr-6 xl:mr-10">
    <h2
      class="focus:outline-none text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center"
    >
      {{ number }}
    </h2>
    <a class="focus:outline-none text-gray-800 dark:text-gray-100">
      <p class="text-xs xl:text-xl leading-5">{{ title }}</p>
    </a>
  </div>
</template>
<script setup>
const props = defineProps({
  number: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>
