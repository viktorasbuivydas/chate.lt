<template>
  <div class="grid grid-cols-3 gap-x-10">
    <Card class="flex flex-col">
      <template #content>
        <MenuControl currentPage="topic" />
      </template>
    </Card>
    <Card class="col-span-2">
      <template #headline>Valdymo pultas</template>
      <template #content>
        <div>test</div>
      </template>
    </Card>
  </div>
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
import CardsStat from "@/Cards/Stat.vue";
</script>
