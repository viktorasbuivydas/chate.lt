<template>
  <div>
    <Header />
    <div
      class="px-4 flex flex-col md:flex-row mt-6 md:space-x-6 space-y-6 md:space-y-0"
    >
      <LeftSidebar />
      <div class="flex flex-col md:flex-row sm:flex-grow">
        <Nuxt />
      </div>

      <RightSidebar />
    </div>
  </div>
</template>
<script>
import Header from "@/Header.vue";
import LeftSidebar from "@/LeftSidebar.vue";
import RightSidebar from "@/RightSidebar.vue";

export default {
  components: {
    Header,
    LeftSidebar,
    RightSidebar,
  },
  middleware: "auth",
};
</script>
