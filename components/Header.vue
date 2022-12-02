<template>
  <div class="mx-auto w-full">
    <div class="bg-white w-full shadow rounded-md mb-2">
      <div class="2xl:container 2xl:mx-auto">
        <nav class="">
          <div class="flex flex-row justify-center">
            <div
              class="flex justify-end flex-row lg:pr-7 sm:pr-6 py-6 pr-4 pl-8"
            >
              <!-- <nuxt-link
                to="/home/notifications"
                class="cursor-pointer focus:outline-none hover:bg-gray-200 rounded-md p-2 focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6"
              >
                <Material icon="notifications" />
                <div
                  v-if="notifications && notifications.length"
                  class="animate-ping w-2 h-2 bg-blue-700 rounded-full absolute top-1 right-0 m-auto duration-200"
                ></div>
                <div
                  v-if="notifications && notifications.length"
                  class="w-1.5 h-1.5 bg-blue-700 rounded-full absolute top-1 right-0 m-auto shadow-lg"
                ></div>
              </nuxt-link> -->

              <div
                class="cursor-pointer focus:outline-none hover:bg-gray-200 rounded-md p-2 focus:ring focus:ring-offset-2 focus:ring-gray-800 relative flex justify-center items-center xl:mr-8 mr-6"
              >
                <Material icon="notifications" />
                <div
                  v-if="notifications && notifications.length"
                  class="animate-ping w-2 h-2 bg-blue-700 rounded-full absolute top-1 right-0 m-auto duration-200"
                ></div>
                <div
                  v-if="notifications && notifications.length"
                  class="w-1.5 h-1.5 bg-blue-700 rounded-full absolute top-1 right-0 m-auto shadow-lg"
                ></div>
              </div>

              <nuxt-link
                to="/home/inbox"
                class="cursor-pointer hover:bg-gray-200 rounded-md p-2 focus:outline-none relative flex justify-center items-center xl:mr-8 mr-6"
              >
                <Material icon="mail" />
                <div
                  v-if="messages && messages.length"
                  class="animate-ping w-2 h-2 bg-blue-700 rounded-full absolute top-1 right-1 m-auto duration-200"
                ></div>
                <div
                  v-if="messages && messages.length"
                  class="w-2 h-2 bg-blue-700 rounded-full absolute top-1 right-1 m-auto shadow-lg"
                ></div>
              </nuxt-link>
              <div class="flex justify-center items-center flex-row"></div>
            </div>

            <!-- Burger Icon -->
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import Material from "@/Material.vue";
import { useStore } from "@nuxtjs/composition-api";
import useInbox from "uses/useInbox.js";
import { computed, onMounted } from "vue";

const { fetchNewMessages } = useInbox();
const store = useStore();
onMounted(() => {
  fetchNewMessages();
});

const messages = computed(() => {
  return store.getters["inbox/newMessages"];
});

const notifications = computed(() => {
  return store.getters["notifications/newNotifications"];
});
</script>

<style></style>
