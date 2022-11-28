<template>
  <div
    class="ml-2 hidden md:flex flex-col pt-4 px-4 w-64 bg-white flex-shrink-0"
  >
    <slot></slot>
    <!-- <div class="flex flex-col mt-2">
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
          v-for="user in users"
          :to="
            localePath({
              name: 'about-username',
              params: { username: user.user.username },
            })
          "
          class="flex flex-row hover:bg-gray-100 rounded-xl p-2"
        >
          <div
            class="flex items-center justify-center h-8 w-8 bg-gray-200 rounded-full"
          >
            <Material icon="smartphone" v-if="user.is_mobile" />
            <Material icon="computer" v-else />
          </div>
          <div
            class="flex w-full flex-col justify-center items-start text-left"
          >
            <div class="flex justify-between w-full">
              <div class="text-sm font-semibold ml-2">
                {{ user.user.username }}
              </div>
              <div
                v-if="user.status === 'active'"
                class="flex text-xs text-white bg-green-500 h-4 w-4 rounded-full leading-none"
              ></div>
            </div>
          </div>
        </nuxt-link>
      </div>
    </div> -->
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
