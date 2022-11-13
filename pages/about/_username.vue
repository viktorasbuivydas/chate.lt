<template>
  <Card>
    <div class="flex flex-col flex-grow p-2" v-if="user">
      <div>
        Vartotojo vardas: <b>{{ user.username }}</b>
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
import { onMounted, useContext, useRoute } from "@nuxtjs/composition-api";
import { ref } from "vue";

const route = useRoute();
const user = ref(null);
const { $axios, error } = useContext();

onMounted(() => {
  getUserByUsername();
});

const getUserByUsername = () => {
  $axios
    .get("/about/" + route.value.params.username)
    .then((response) => {
      user.value = response.data.data;
    })
    .catch((e) => {
      error({ statusCode: 404, message: "Post not found" });
    });
};
</script>
