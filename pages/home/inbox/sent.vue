<template>
  <Card class="flex-grow text-sm sm:text-md">
    <template #content>
      <div class="flex flex-col w-full">
        <div class="w-full flex flex-col">messages</div>
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
import Material from "@/Material.vue";
import { ref, onMounted, useContext } from "@nuxtjs/composition-api";
import Skeleton from "@/Skeleton.vue";

const messages = ref(null);
const { $axios } = useContext();
const loading = ref(true);
const getMessages = () => {
  loading.value = true;
  $axios("/inbox/index")
    .then((response) => {
      messages.value = response.data.data;
    })
    .finally(() => {
      loading.value = false;
    });
};

onMounted(() => {
  getMessages();
});
</script>
