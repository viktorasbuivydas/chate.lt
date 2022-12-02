<template>
  <div class="w-full flex flex-col space-y-2 p-2">
    <div class="mx-auto w-full rounded-2xl">
      <slot name="header"></slot>
    </div>
    <div class="text-2xl font-medium leading-normal text-gray-800 p-2">
      <slot name="headline"></slot>
    </div>
    <div class="flex flex-col flex-grow bg-white">
      <slot name="content" />
    </div>
  </div>
</template>
<script setup></script>
