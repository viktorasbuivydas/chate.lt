<template>
  <div class="p-5 text-left rounded-xl flex flex-col" :class="[typeColor]">
    <div class="text-sm sm:text-md">
      <b class="text-brand font-semibold float-left mr-2"
        >{{ message.user.name }}:
      </b>
      {{ message.content }}
    </div>
    <div class="flex items-center space-x-2 text-xs">
      <p>{{ message.created_at }}</p>
      <button
        @click="replyTo"
        v-if="message.user.name !== $auth.user.data.name"
      >
        <Material icon="reply" class="text-brand" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
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
</script>
