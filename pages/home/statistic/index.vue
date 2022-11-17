<template>
  <Card>
    <div
      class="flex flex-col flex-grow border-gray-100 p-2 rounded-md space-y-4"
    >
      <div class="font-semibold text-gray-500">Statistika</div>
      <div class="flex flex-col space-y-2">
        <CardRow title="Pokalbių topai" icon="forum" type="default" />
      </div>
    </div>
  </Card>
</template>
<script>
export default {
  layout: "home",
};
</script>

<script setup>
import Card from "@/Card.vue";
import CardRow from "@/Card/Row.vue";
</script>
