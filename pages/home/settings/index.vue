<template>
  <Card>
    <div class="flex flex-col flex-grow p-2">
      <Menusettings />
    </div>
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
