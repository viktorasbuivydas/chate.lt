<template>
  <div class="hidden md:flex flex-col pt-4 px-4 w-64 bg-white flex-shrink-0">
    <div class="flex flex-col mt-2">
      <div class="flex flex-row items-center justify-between text-xs">
        <span class="font-bold">Prisijungę</span>
        <span
          class="flex items-center justify-center bg-gray-300 h-4 w-4 rounded-full"
          v-if="users"
          >{{ users.length }}</span
        >
      </div>
      <div class="flex flex-col space-y-1 mt-4 -mx-2 h-100 overflow-y-auto">
        <nuxt-link
          to="/"
          class="flex flex-row hover:bg-gray-100 rounded-xl p-2"
          v-for="user in users"
        >
          <div
            class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
          >
            <Material icon="smartphone" />
          </div>
          <div class="flex flex-col justify-center items-start text-left">
            <div
              class="flex justify-between items-center space-x-2 w-full px-2"
            >
              <div class="text-sm font-semibold">{{ user.user.name }}</div>
              <div
                class="flex items-center justify-center text-xs text-white bg-green-500 h-4 w-4 rounded-full leading-none"
              ></div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
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
