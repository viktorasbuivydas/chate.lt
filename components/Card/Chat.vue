<template>
  <div
    class="flex flex-col w-full p-3 items-center border-b border-blue-200"
    :class="[cardStyle]"
  >
    <div class="flex w-full justify-between">
      <div class="flex flex-col items-start text-sm">
        <div>
          <nuxt-link :to="'/home/about/' + message.username">
            <b>{{ message.username }}</b>
          </nuxt-link>
          {{ message.content }}
        </div>

        <div class="text-xs mr-2 mt-1 text-gray-500">
          <div class="text-gray-500">
            {{ time() }}
          </div>
        </div>
      </div>

      <button @click="replyTo" v-if="message.username !== username">
        <Material icon="reply" class="text-brand" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Material from "@/Material.vue";
import { useContext } from "@nuxtjs/composition-api";

const props = defineProps({
  message: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["replyTo"]);
const { $auth } = useContext();

const replyTo = () => {
  emit("replyTo", props.message.username);
};

const cardStyle = computed(() => {
  return props.message.username === username.value
    ? "bg-blue-100"
    : isMessageToMe()
    ? "bg-yellow-100"
    : "bg-white";
});

const isMessageToMe = () => {
  return (
    props.message.content.includes(username.value + " ->") &&
    username.value != props.message.username
  );
};
const username = computed(() => {
  return $auth.user.data.username;
});

const time = () => {
  return props.message.created_at;
};
</script>
