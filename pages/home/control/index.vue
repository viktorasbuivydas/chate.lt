<template>
  <Card>
    <div class="flex flex-col flex-grow p-2">
      <MenuControl />
    </div>
  </Card>
</template>

<script>
export default {
  name: "control",
  layout: "home",
  middleware: "notUser",
};
</script>

<script setup>
import Card from "@/Card.vue";
import MenuControl from "@/Menu/Control.vue";
</script>
