<template>
  <div>
    <div class="w-full flex flex-col">
      <Back :to="'/home/inbox?active_tab=' + activeTab" />

      <div class="w-full flex flex-col space-y-5 items-center">
        <div v-if="!message" class="w-full">
          <ErrorsAlert />
        </div>
        <div
          v-else
          class="flex flex-col space-y-8 items-center py-8 px-5 justify-center w-full"
        >
          <div
            class="w-full rounded-md py-4 px-5 bg-white border border-gray-200 dark:bg-gray-800"
          >
            <div class="flex items-start justify-between">
              <div class="flex items-center mb-4 lg:mb-0 mr-10">
                <div class="w-14 h-14 bg-cover rounded-md mr-3">
                  <img
                    tabindex="0"
                    src="/images/placeholders/avatar.png"
                    alt="person"
                    class="focus:outline-none rounded-full h-full w-full overflow-hidden shadow"
                  />
                </div>
                <div>
                  <nuxt-link
                    :to="'/home/about/' + message.sender"
                    class="focus:outline-none text-sm font-bold leading-4 text-gray-800 dark:text-gray-100"
                    >{{ sender }}</nuxt-link
                  >
                  <div class="text-sm">{{ message.created_at }}</div>
                </div>
              </div>
            </div>
            <p
              tabindex="0"
              class="focus:outline-none pt-4 text-xs leading-4 text-gray-600 dark:text-gray-100"
            >
              {{ message.content }}
            </p>
            <!-- <div class="flex items-end justify-end mt-4">
              <button
                class="focus:opacity-90 focus:ring-offset-2 focus:ring-2 focus:ring-red-700 text-xs font-medium leading-3 text-white py-3 px-4 rounded bg-red-500 focus:outline-none hover:opacity-90"
              >
                Ištrinti
              </button>
            </div> -->
          </div>

          <div class="w-full rounded dark:bg-gray-800">
            <SectionsInboxWriteMessage :toUsername="sender" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  middleware: "auth",
};
</script>

<script setup>
import {
  ref,
  onMounted,
  useStore,
  computed,
  useRoute,
  useContext,
} from "@nuxtjs/composition-api";
import useInbox from "uses/useInbox.js";
import ErrorsAlert from "@/Errors/Alert.vue";
import Back from "@/Back.vue";
import SectionsInboxWriteMessage from "@/Sections/Inbox/WriteMessage.vue";

const { getMessage } = useInbox();
const { $auth } = useContext();

const store = useStore();
const route = useRoute();

onMounted(() => {
  getMessage(route.value.params.id);
});

const activeTab = computed(() => {
  return store.getters["user/tab"];
});

const message = computed(() => {
  return store.getters["inbox/message"];
});

const sender = computed(() => {
  return message.value.receiver === username.value
    ? message.value.sender
    : message.value.receiver;
});

const username = computed(() => {
  return $auth.user.data.username;
});
</script>
