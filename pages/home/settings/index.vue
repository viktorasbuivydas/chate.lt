<template>
  <Card>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div class="flex">
        <div class="grid grid-cols-3 flex-grow p-2 space-x-10">
          <Menusettings />
          <div class="col-span-2">pamparam</div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
export default {
  name: "settings",
  layout: "home",
  middleware: "notUser",
};
</script>

<script setup>
import Card from "@/Card.vue";
import Menusettings from "@/Menu/Settings.vue";
import Header from "@/Header.vue";
</script>
