<template>
  <div>
    <div class="flex flex-col md:flex-row space-y-6 md:space-y-0">
      <LeftSidebar />

      <div class="flex h-screen flex-col md:flex-row md:flex-grow relative p-2">
        <Nuxt />
      </div>
      <RightSidebar />
    </div>
  </div>
</template>
<script>
import LeftSidebar from "@/LeftSidebar.vue";
import RightSidebar from "@/RightSidebar.vue";

export default {
  components: {
    LeftSidebar,
    RightSidebar,
  },
  middleware: "auth",
};
</script>
