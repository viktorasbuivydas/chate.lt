<template>
  <div>
    <Header />
    <div class="grid grid-cols-3 gap-x-10 w-full">
      <Card class="flex flex-col">
        <template #content>
          <MenuControl currentPage="requests" />
        </template>
      </Card>
      <div class="col-span-2">
        <div class="w-full flex flex-col space-y-5 items-center">
          <TabHeadline title="Užklausų valdymas" :tabs="tabs" />
          <template v-if="activeTab === 'all'">
            <template v-if="requests && requests.length">
              <CardsRow
                v-for="request in requests"
                :title="request.email"
                :content="request.content"
              />
            </template>
            <template v-else>
              <ErrorsAlert />
            </template>
          </template>
          <template v-else>
            <template v-if="requests && requests.length">
              <CardsRow
                v-for="request in requests"
                :title="request.email"
                :content="request.content"
              />
            </template>
            <template v-else>
              <ErrorsAlert />
            </template>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "control",
  layout: "home",
  middleware: "auth",
};
</script>

<script setup>
import Card from "@/Card.vue";
import MenuControl from "@/Menu/Control.vue";
import TabHeadline from "@/Tabs/Headline.vue";
import CardsRow from "@/Cards/Row.vue";
import { ref, watch } from "vue";
import { useStore, computed } from "@nuxtjs/composition-api";
import ErrorsAlert from "@/Errors/Alert.vue";
import useRequest from "uses/useRequest.js";
import Header from "@/Header.vue";

const store = useStore();
const { fetchRequests } = useRequest();
const tabs = ref([
  {
    name: "Naujos",
    value: "new",
  },
  {
    name: "Visos",
    value: "all",
  },
]);

const activeTab = computed(() => {
  return store.getters["user/tab"];
});

const requests = computed(() => {
  return store.getters["request/requests"];
});

watch(activeTab, () => {
  if (!activeTab.value) {
    return;
  }
  fetchRequests(activeTab.value);
});
</script>
