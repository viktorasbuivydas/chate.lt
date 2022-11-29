<template>
  <div class="w-full flex flex-col space-y-2 bg-white p-2 rounded-2xl">
    <div class="mx-auto">
      <slot name="header"></slot>
    </div>
    <div class="text-2xl font-medium leading-normal text-gray-800 p-2">
      <slot name="headline"></slot>
    </div>
    <div class="flex flex-col flex-grow">
      <slot name="content" />
    </div>
  </div>
</template>
