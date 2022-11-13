<template>
  <div>
    <div v-if="error.statusCode === 404">
      <ErrorsNotFound />
    </div>
    <div v-else-if="error.statusCode === 500">
      <ErrorsServerError />
    </div>
    <h1 v-else>An error occurred</h1>
  </div>
</template>
<script setup>
import ErrorsNotFound from "@/Errors/NotFound.vue";
import ErrorsServerError from "@/Errors/ServerError.vue";
const props = defineProps({
  error: {
    type: Object,
  },
});
</script>
