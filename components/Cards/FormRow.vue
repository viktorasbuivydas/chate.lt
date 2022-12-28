<template>
  <div class="bg-white w-full shadow rounded-lg mt-3 p-6">
    <div class="md:flex items-center">
      <div class="md:ml-6 md:mt-0 mt-4 w-full">
        <div class="flex items-center justify-between">
          <p class="text-xl font-semibold leading-5 text-gray-800">
            {{ title }}
          </p>
        </div>
        <div class="text-sm pt-3 text-gray-600">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>
