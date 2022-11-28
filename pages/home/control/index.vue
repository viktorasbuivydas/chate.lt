<template>
  <div class="grid grid-cols-3 gap-x-10">
    <Card class="flex flex-col">
      <template #content>
        <MenuControl />
      </template>
    </Card>
    <Card class="col-span-2">
      <template #headline>Valdymo pultas</template>
      <template #content>
        <div class="mt-5 w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <CardsStat title="Naujų užklausų" count="10" icon="feed" />
          <CardsStat title="Naujų vartotojų" count="3" icon="person" />
        </div>
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
