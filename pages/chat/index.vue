<template>
  <Card class="flex-grow text-sm sm:text-md">
    <div class="flex flex-col w-full">
      <div class="w-full flex flex-col">
        <nuxt-link
          :to="localePath({ name: 'chat-room', params: { room: room.id } })"
          v-for="(room, index) in rooms"
          :key="index"
          class="p-4 hover:bg-gray-50 cursor-pointer flex justify-between"
        >
          <div class="flex items-center space-x-2">
            <Material icon="speaker_notes" />
            <span>{{ room.name }}</span>
          </div>
          <span
            class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full"
          >
            {{ room.messages_count }}
          </span>
        </nuxt-link>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  layout: "home",
};
</script>

<script setup>
import Card from "@/Card.vue";
import Material from "@/Material.vue";
import ChatCard from "@/Chat/Card.vue";
import { ref, onMounted, useContext } from "@nuxtjs/composition-api";

const rooms = ref(null);
const { $axios } = useContext();

const getRooms = () => {
  $axios("/chat/index").then((response) => {
    rooms.value = response.data;
  });
};

onMounted(() => {
  getRooms();
});
</script>
