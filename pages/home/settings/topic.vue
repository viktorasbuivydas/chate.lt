<template>
  <Card>
    <template #content>
      <div class="flex">
        <div class="grid grid-cols-3 flex-grow p-2 space-x-10">
          <Menusettings currentPage="topic" />
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
</script>
