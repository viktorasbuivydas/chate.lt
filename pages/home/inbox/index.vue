<template>
  <div>
    <TabHeadline title="Žinutės" :tabs="tabs" />

    <div class="flex-grow text-sm sm:text-md mt-2">
      <div class="flex flex-col w-full">
        <div class="w-full flex flex-col">
          <div class="w-full flex flex-col space-y-5 items-center">
            <div v-if="!messages" class="w-full">
              <ErrorsAlert />
            </div>
            <div v-else>
              <div v-for="message in messages">
                {{ message.content }}
              </div>
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
import Card from "@/Card.vue";
import {
  ref,
  onMounted,
  useStore,
  computed,
  watch,
} from "@nuxtjs/composition-api";
import TabHeadline from "@/Tabs/Headline.vue";
import CardsRow from "@/Cards/Row.vue";
import useInbox from "uses/useInbox.js";
import ErrorsAlert from "@/Errors/Alert.vue";

const { fetchMessages } = useInbox();
const store = useStore();

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
