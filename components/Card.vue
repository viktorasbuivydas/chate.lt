<template>
  <div>
    <div class="w-full">
      <slot name="header"></slot>
    </div>

    <div class="w-full flex flex-col space-y-2 bg-white p-2">
      <div class="text-2xl font-medium leading-normal text-gray-800 p-2">
        <slot name="headline"></slot>
      </div>
      <div
        class="grid grid-col-1 gap-x-5"
        :class="{
          'md:grid-cols-1': !showOnline,
          'md:grid-cols-3': showOnline,
        }"
      >
        <div class="md:col-span-2 flex flex-col flex-grow">
          <slot name="content" />
        </div>
        <template v-if="showOnline">
          <div class="hidden md:flex flex-col">
            <Online />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script setup>
import Online from "@/Online.vue";

defineProps({
  showOnline: {
    type: Boolean,
    default: true,
  },
});
</script>
