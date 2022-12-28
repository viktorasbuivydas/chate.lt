<template>
  <div>
    <Header />

    <div class="grid grid-cols-3 gap-x-10 mt-2">
      <Card class="flex flex-col" :showOnline="false">
        <template #content>
          <MenuControl />
        </template>
      </Card>
      <Card class="col-span-2" :showOnline="false">
        <template #headline>Valdymo pultas</template>
        <template #content>
          <div class="mt-5 w-full grid sm:grid-cols-1 md:grid-cols-2 gap-8">
            <CardsStat title="Naujų užklausų" count="10" icon="feed" />
            <CardsStat title="Naujų vartotojų" count="3" icon="person" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  name: "control",
  layout: "home",
  middleware: ["auth"],
};
</script>

<script setup>
import Card from "@/Card.vue";
import MenuControl from "@/Menu/Control.vue";
import CardsStat from "@/Cards/Stat.vue";
import Header from "@/Header.vue";
</script>
