<template>
  <div class="hidden lg:flex flex-grow-0">
    <Card>
      <div class="flex flex-col space-y-2">
        <div class="text-gray-500 font-semibold">Prisijungę</div>
        <div class="flex flex-col space-y-2">
          <nuxt-link
            to="/"
            class="hover:bg-gray-100 p-2 rounded-md"
            v-for="user in users"
          >
            <div class="flex text-md space-x-1">
              <Material icon="smartphone" />
              <div class="font-bold">{{ user.user.name }}</div>
              <div>(Administratorius)</div>
            </div>
            <div class="text-xs italic">
              Paskutinis veiksmas ({{ user.updated_at }})
            </div>
          </nuxt-link>
        </div>
      </div>
    </Card>
  </div>
</template>
<script setup>
import Card from "@/Card.vue";
import { useContext, ref, onMounted } from "@nuxtjs/composition-api";
import Material from "./Material.vue";

const { $axios } = useContext();
const users = ref(null);

onMounted(() => {
  getOnlineData();
});

const getOnlineData = () => {
  users.value = null;
  $axios.get("online/index").then((response) => {
    users.value = response.data.data;
  });
};
</script>
