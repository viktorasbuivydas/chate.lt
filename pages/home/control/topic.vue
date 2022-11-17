<template>
  <Card class="flex flex-col sm:flex-row bg-white space-x-10 space-y-4">
    <div class="sm:w-2/5 sm:space-y-0">
      <div class="border rounded-xl border-card-border p-2 sm:p-4">topic</div>
    </div>
    <div class="sm:w-3/5">test test test</div>
  </Card>
</template>

<script>
export default {
  layout: "home",
};
</script>

<script setup>
import Card from "@/Card.vue";

const route = useRoute();
</script>
