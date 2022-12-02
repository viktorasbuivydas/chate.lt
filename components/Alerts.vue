<template>
  <div>
    <BaseAlert :message="success" type="success" v-if="success" />
    <BaseAlert :message="error" type="error" v-if="error" />
  </div>
</template>
<script setup>
import BaseAlert from "@/Base/Alert.vue";
import { useStore } from "@nuxtjs/composition-api";
import { computed } from "vue";

const store = useStore();

const success = computed(() => {
  return store.getters["alert/success"];
});

const error = computed(() => {
  return store.getters["alert/error"];
});
</script>
