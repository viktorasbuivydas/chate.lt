<template>
  <div class="relative">
    <transition-group
      name="list-complete"
      tag="div"
      class="fixed left-10 md:left-1/2 bottom-20 w-80 md:-ml-20 md:w-100 z-100 space-y-1"
    >
      <BaseToast
        v-if="hasSuccessToast"
        key="success-toast"
        variant="flex justify-center items-center bg-green-500 text-white rounded-lg px-4 py-2"
        :text="successToast"
        @closeClick="closeSuccessToast"
      />

      <BaseToast
        v-if="hasErrorToast"
        key="success-toast"
        variant="flex justify-center bg-red-500 text-white rounded-lg px-4 py-2"
        :text="errorToast"
        @closeClick="closeErrorToast"
      />
    </transition-group>
  </div>
</template>

<script setup>
import useToasts from "uses/useToasts";
import BaseToast from "@/Base/Toast.vue";

const {
  hasSuccessToast,
  successToast,
  closeSuccessToast,
  hasErrorToast,
  errorToast,
  closeErrorToast,
} = useToasts();
</script>
