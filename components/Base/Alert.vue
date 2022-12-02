<template>
  <div
    role="alert"
    id="alert"
    class="transition duration-150 ease-in-out relative w-full shadow mb-2"
    :class="bgStyle"
  >
    <div
      class="container mx-auto xl:w-full lg:transition duration-150 ease-in-out w-11/12"
    >
      <div class="w-full lg:flex py-3 items-center">
        <div
          class="w-full flex xl:flex-row lg:flex-row flex-col justify-center items-center xl:justify-start lg:justify-start"
        >
          <div class="flex items-center" :class="textStyle">
            <Material :icon="icon" />
          </div>
          <p class="mx-4 text-lg text-center sm:text-left" :class="textStyle">
            {{ message }}
          </p>
        </div>
        <div class="w-2/12 flex justify-end">
          <button
            onclick="closeAlert()"
            aria-label="close"
            class="focus:outline-none focus:text-black hover:text-black cursor-pointer xl:relative lg:relative absolute top-0 right-0 mr-2 mt-2 xl:mt-0 xl:mr-0 lg:mt-0 lg:mr-0 text-green-700"
          >
            <Material icon="close" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Material from "@/Material.vue";
import { computed } from "vue";
const props = defineProps({
  message: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "success",
  },
});

const textStyle = computed(() => {
  return props.type === "success" ? "text-green-700" : "text-red-700";
});

const bgStyle = computed(() => {
  return props.type === "success" ? "bg-green-100" : "bg-red-100";
});

const icon = computed(() => {
  return props.type === "success" ? "check_circle" : "error";
});

const closeAlert = () => {};
</script>
