<template>
  <Card class="flex-grow text-sm sm:text-md">
    <div class="flex flex-col w-full">
      <div class="w-full space-y-2">
        <div v-if="content.to" class="flex items-center space-x-2">
          <div>
            Žinutė skirta: <b>{{ content.to }}</b>
          </div>
          <button class="bg-gray-200 rounded-md p-1" @click="removeTo">
            <Material icon="close" />
          </button>
        </div>
        <textarea
          v-model="content.body"
          class="border border-card-border w-full rounded-xl p-2"
          rows="5"
        ></textarea>
      </div>
      <div class="sm:ml-auto flex items-center space-x-2">
        <button class="flex flex-shrink">
          <!-- <Material icon="mood" /> -->
        </button>
        <button
          @click="writeMessage"
          :disabled="message.length === 0"
          class="flex justify-center flex-grow sm:flex-shrink bg-brand hover:bg-brand-hover py-4 px-10 sm:px-20 text-white rounded-xl"
          :class="[{ 'opacity-70 cursor-not-allowed': message.length === 0 }]"
        >
          Siųsti žinutę
        </button>
      </div>
      <div
        class="flex flex-col space-y-2 mt-5 overflow-y-scroll max-h-screen text-center"
        v-for="(message, index) in messages"
      >
        <!-- <div class="text-grayish">{{ index }}</div> -->
        <ChatCard
          type="default"
          :message="message"
          @replyTo="replyTo($event)"
        />
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
import {
  ref,
  onMounted,
  useContext,
  useRoute,
  computed,
} from "@nuxtjs/composition-api";

const route = useRoute();
const messages = ref(null);
const { $axios } = useContext();
const content = ref({
  to: "",
  body: "",
});

const getMessages = () => {
  $axios.get("/chat/" + route.value.params.room + "/index").then((response) => {
    messages.value = response.data.data.messages;
  });
};

const writeMessage = () => {
  $axios
    .post("/chat/" + route.value.params.room + "messages/store", {
      content: message.value,
    })
    .then(() => {
      content.value.to = "";
      content.value.body = "";
      getMessages();
    });
};

const replyTo = (event) => {
  content.value.to = event.name;
};

const removeTo = () => {
  content.value.to = "";
};

const message = computed(() => {
  return content.value.to
    ? content.value.to + " -> " + content.value.body
    : content.value.body;
});

onMounted(() => {
  getMessages();
});
</script>
