<template>
  <div class="bg-white w-full shadow rounded-lg mt-3 p-6">
    <div class="md:flex items-center">
      <div class="md:ml-6 md:mt-0 mt-4 w-full">
        <div class="flex items-center justify-between">
          <p class="text-xl font-semibold leading-5 text-gray-800">
            {{ title }}
          </p>
        </div>
        <p class="text-sm pt-3 text-gray-600">{{ content }}</p>
        <div class="mt-4 flex items-center justify-end">
          <p class="text-xs leading-3 text-gray-600 space-x-2">
            <button
              class="focus:ring-2 focus:ring-offset-2 focus:ring-green-700 text-sm leading-none text-green-700 p-3 bg-green-100 rounded focus:outline-none hover:bg-green-200"
            >
              Priimti
            </button>
            <button
              class="focus:ring-2 focus:ring-offset-2 focus:ring-red-700 text-sm leading-none text-red-700 p-3 bg-red-100 rounded focus:outline-none hover:bg-red-200"
            >
              Atmesti
            </button>
          </p>
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
  content: {
    type: String,
    required: true,
  },
});
</script>
