<template>
  <div>
    <div class="w-full flex flex-col">
      <Back :to="'/home/about/' + username" />

      <div class="w-full flex flex-col space-y-5 items-center">
        <div
          class="flex flex-col space-y-8 items-center py-8 px-5 justify-center w-full"
        >
          <div class="w-full rounded dark:bg-gray-800">
            <div class="mb-2">
              Žinutė skirta: <b>{{ username }}</b>
            </div>
            <SectionsInboxWriteMessage :toUsername="username" />
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
  computed,
  useRoute,
  useContext,
} from "@nuxtjs/composition-api";
import useInbox from "uses/useInbox.js";
import Back from "@/Back.vue";
import SectionsInboxWriteMessage from "@/Sections/Inbox/WriteMessage.vue";

const { getMessage } = useInbox();
const { $auth } = useContext();

const route = useRoute();

onMounted(() => {
  getMessage(route.value.params.id);
});

const username = computed(() => {
  return route.value.params.username;
});
</script>
