<template>
  <Card>
    <template #header>
      <Header />
    </template>
    <template #content>
      <div
        class="flex flex-col flex-grow border-gray-100 p-2 rounded-md space-y-4"
      >
        <div class="font-semibold text-gray-500">Statistika</div>
        <div class="flex flex-col space-y-2">
          <CardRowLink link="/" icon="star" type="default" title="Reputacija" />

          <CardRowLink
            link="/"
            icon="stars"
            type="default"
            title="Reputacijos taškai"
          />

          <CardRowLink
            link="/"
            icon="chat"
            type="default"
            title="Pokalbių žinučių"
          />

          <CardRowLink
            link="/"
            icon="forum"
            type="default"
            title="Forumo žinučių"
          />
        </div>
      </div>
    </template>
  </Card>
</template>
<script>
export default {
  layout: "home",
};
</script>

<script setup>
import Card from "@/Card.vue";
import CardRowLink from "@/Card/RowLink.vue";
import Header from "@/Header.vue";
</script>
