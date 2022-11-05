<template>
  <div
    v-if="type === 'toUser'"
    class="col-start-1 col-end-13 sm:col-end-9 p-3 rounded-lg"
  >
    <div class="flex flex-row items-center">
      <div
        class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white flex-shrink-0"
      >
        {{ firstLetter() }}
      </div>
      <div
        class="relative flex space-x-2 items-center ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
      >
        <div @click="toggleMessage" class="cursor-pointer">
          {{ message.content }}
        </div>

        <button
          @click="replyTo"
          v-if="message.user.name !== $auth.user.data.name"
        >
          <Material icon="reply" class="text-brand" />
        </button>
        <div
          v-if="toggled"
          class="absolute text-xs bottom-0 left-0 -mb-5 mr-2 text-gray-500"
        >
          {{ time() }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="col-start-6 col-end-13 p-3 rounded-lg">
    <div class="flex items-center justify-start flex-row-reverse">
      <div
        class="flex items-center justify-center h-10 w-10 rounded-full bg-blue-500 text-white flex-shrink-0"
      >
        {{ firstLetter() }}
      </div>
      <div
        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
      >
        <div @click="toggleMessage" class="cursor-pointer">
          {{ message.content }}
        </div>
        <div
          v-if="toggled"
          class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
        >
          {{ time() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import Material from "@/Material.vue";
import { useContext } from "@nuxtjs/composition-api";

const props = defineProps({
  type: {
    type: String,
    default: "",
  },
  message: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["replyTo"]);
const { $auth } = useContext();
const toggled = ref(false);

const replyTo = () => {
  emit("replyTo", props.message.user);
};

const typeColor = computed(() => {
  return props.type === "user"
    ? "bg-blue-100"
    : props.type === "toUser"
    ? "bg-yellow-100"
    : "bg-gray-50";
});

const firstLetter = () => {
  return props.message.user.name.charAt(0);
};

const time = () => {
  return props.message.created_at;
};

const toggleMessage = () => {
  toggled.value = !toggled.value;
};
</script>
