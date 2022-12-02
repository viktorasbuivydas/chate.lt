<template>
  <ContentContainer>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div class="flex flex-col md:flex-row">
        <div
          class="grid grid-cols-1 md:grid-cols-3 flex-grow p-2 md:space-x-10"
        >
          <Menusettings currentPage="topic" />
          <div class="md:col-span-2 p-2 flex justify-start">kuriama...</div>
        </div>
      </div>
    </template>
  </ContentContainer>
</template>

<script>
export default {
  name: "settings",
  layout: "home",
  middleware: "notUser",
};
</script>

<script setup>
import ContentContainer from "@/Content/Container.vue";
import Menusettings from "@/Menu/Settings.vue";
import Header from "@/Header.vue";
</script>
