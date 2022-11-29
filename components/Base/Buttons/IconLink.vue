=
<template>
  <nuxt-link
    to="/home/notifications"
    class="cursor-pointer focus:outline-none hover:bg-gray-200 rounded-md p-2 focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6"
  >
    <Material icon="notifications" />
    <div
      class="animate-ping w-2 h-2 bg-blue-700 rounded-full absolute top-1 right-0 m-auto duration-200"
    ></div>
    <div
      class="w-1.5 h-1.5 bg-blue-700 rounded-full absolute top-1 right-0 m-auto shadow-lg"
    ></div>
  </nuxt-link>
</template>
<script setup>
// const props = de`z`
// const props = defineProps({})
</script>
