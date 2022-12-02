<template>
  <div class="space-y-2">
    <Header />
    <TabHeadline title="Žinutės" :tabs="tabs" />

    <div class="flex-grow text-sm sm:text-md mt-2">
      <div class="flex flex-col w-full">
        <div class="w-full flex flex-col">
          <div
            class="w-full flex flex-col space-y-5 items-center"
            v-if="activeTab === 'all'"
          >
            <div v-if="!messages" class="w-full">
              <ErrorsAlert />
            </div>
            <div
              v-else
              class="w-full flex flex-col shadow p-1 space-y-2 bg-white"
            >
              <CardRowLink
                v-for="message in messages"
                :link="'/home/inbox/' + message.id"
                :icon="message.read_at === null ? 'mail' : 'drafts'"
                :active="message.read_at === null"
                :title="message.sender"
              />
            </div>
          </div>
          <div v-else class="w-full flex flex-col space-y-5 items-center">
            <div v-if="!messages" class="w-full">
              <ErrorsAlert />
            </div>
            <div
              v-else
              class="w-full flex flex-col shadow p-1 space-y-2 bg-white"
            >
              <CardRowLink
                v-for="message in messages"
                :link="'/home/inbox/' + message.id"
                :icon="message.read_at === null ? 'mail' : 'drafts'"
                :active="message.read_at === null"
                :title="message.receiver"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
};
</script>

<script setup>
import {
  ref,
  onMounted,
  useStore,
  computed,
  watch,
  useRoute,
} from "@nuxtjs/composition-api";
import TabHeadline from "@/Tabs/Headline.vue";
import CardRowLink from "@/Card/RowLink.vue";
import useInbox from "uses/useInbox.js";
import ErrorsAlert from "@/Errors/Alert.vue";
import Header from "@/Header.vue";

const { fetchMessages } = useInbox();
const store = useStore();
const route = useRoute();

const tabs = ref([
  {
    name: "Gautos",
    value: "all",
  },
  {
    name: "Išsiųstos",
    value: "sent",
  },
]);

onMounted(() => {
  if (route.value.query?.active_tab === "sent") {
    store.dispatch("user/setTab", "sent");
  }

  fetchMessages(activeTab.value, page.value);
});

const activeTab = computed(() => {
  return store.getters["user/tab"];
});

const page = computed(() => {
  return store.getters["inbox/page"];
});

const messages = computed(() => {
  return store.getters["inbox/messages"];
});

watch(activeTab, () => {
  if (!activeTab.value) {
    return;
  }
  fetchMessages(activeTab.value, page.value);
});
</script>
