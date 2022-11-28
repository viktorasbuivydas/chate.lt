<template>
  <div class="flex w-full flex-col bg-white p-5 rounded-2xl">
    <div class="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">
      <slot name="headline"></slot>
    </div>
    <div class="flex flex-col flex-grow">
      <slot name="content" />
    </div>
  </div>
</template>
