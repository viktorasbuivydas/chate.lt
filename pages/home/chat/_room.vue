<template>
  <div class="flex flex-col flex-auto h-full p-0">
    <Header />
    <div
      class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-0"
    >
      <div
        class="relative flex flex-col items-center rounded-xl bg-white w-full px-4"
      >
        <div class="absolute top-25 right-0">
          <Emojipicker v-if="showEmojis" @emoji_click="emojiClick" />
        </div>
      </div>
      <div v-if="content.to" class="flex items-center space-x-2 w-full ml-2">
        <div>
          <b>{{ content.to }}</b>
        </div>
        <button
          class="text-brand flex items-center rounded-md p-1"
          @click="removeTo"
        >
          <Material icon="close" />
        </button>
      </div>
      <form
        @submit.prevent="sendMessage"
        class="flex flex-col space-y-2 items-center w-full py-2"
      >
        <div class="w-full">
          <div class="relative w-full">
            <textarea
              v-model="content.body"
              maxlength="500"
              rows="3"
              class="flex w-full pr-10 border rounded-xl focus:outline-none focus:border-indigo-300 p-2"
            ></textarea>
            <div
              @click="showEmojis = !showEmojis"
              class="hidden sm:flex cursor-pointer absolute items-center justify-center h-full w-12 right-0 top-0 text-gray-400 hover:text-gray-600"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-end">
          <button
            type="submit"
            :disabled="loading"
            class="ml-1 flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-xl text-white px-5 py-2 flex-shrink-0"
          >
            <template v-if="loading">
              <Loader />
            </template>
            <template v-else>
              <span>Rašyti</span>
              <span class="ml-2 mb-1">
                <svg
                  class="w-4 h-4 transform rotate-45 -mt-px"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
              </span>
            </template>
          </button>
        </div>
      </form>
      <div
        class="flex flex-col h-full mb-4"
        id="chat-container"
        ref="chatContainer"
      >
        <div class="flex flex-col h-full relative">
          <div class="flex flex-col">
            <CardChat
              v-for="(message, index) in messages"
              :key="index"
              :message="message"
              @replyTo="replyTo($event)"
              :type="
                message.user.username === $auth.user.data.username
                  ? 'user'
                  : 'toUser'
              "
            />
          </div>
          <infinite-loading
            v-if="messages && loadedFirstData"
            spinner="bubbles"
            @infinite="infiniteScroll"
          >
            <div slot="no-more" class="p-2">Žinučių daugiau neturime :(</div>
            <div slot="no-results" class="p-2">
              Nepavyksta rasti daugiau žinučių
            </div>
          </infinite-loading>
          <ScrollToBottom :showScroll="false" />
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
import Material from "@/Material.vue";
import CardChat from "@/Card/Chat.vue";
import Emojipicker from "@/Emojipicker.vue";
import Loader from "@/Loader.vue";
import ErrorsAlert from "@/Errors/Alert.vue";
import {
  ref,
  onMounted,
  useContext,
  useRoute,
  computed,
  onBeforeUnmount,
  useStore,
} from "@nuxtjs/composition-api";
import infiniteLoading from "vue-infinite-loading";
import ScrollToBottom from "@/ScrollToBottom.vue";
import useChat from "uses/useChat.js";
import useScroll from "uses/useScroll.js";
import Header from "@/Header.vue";

const { $axios, $auth } = useContext();
const { fetchMessages, fetchNewMessages, writeMessage } = useChat();
const { scrollToTop } = useScroll();
const route = useRoute();
const store = useStore();

const room = ref(null);
const loading = ref(false);
const currentPage = ref(1);

const content = ref({
  to: "",
  body: "",
});

const chatContainer = ref(null);

const showEmojis = ref(false);
const interval = ref(null);
const loadedFirstData = ref(false);
const chatId = route.value.params.room;

const getMessages = () => {
  if (!chatId) {
    return;
  }

  fetchMessages(chatId, page.value).then(() => {
    setTimeout(() => {
      scrollToTop("chat-container");
      loadedFirstData.value = true;
    }, 1000);
  });
};

const infiniteScroll = ($state) => {
  if (!loadedFirstData.value) {
    return;
  }

  setTimeout(() => {
    fetchMessages(chatId, page.value)
      .then((response) => {
        if (response.data.length) {
          $state.loaded();
        } else {
          $state.complete();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, 500);
};

const sendMessage = () => {
  if (!content.value.body) {
    return;
  }

  showEmojis.value = false;
  loading.value = true;
  room.value = [];

  writeMessage(chatId, message.value)
    .then(() => {
      content.value.to = "";
      content.value.body = "";
    })
    .finally(() => {
      loading.value = false;
    });
};

const replyTo = (event) => {
  content.value.to = event.username;
};

const removeTo = () => {
  content.value.to = "";
};

const message = computed(() => {
  return content.value.to
    ? content.value.to + " -> " + content.value.body
    : content.value.body;
});

onMounted(async () => {
  getMessages(page.value);

  interval.value = setInterval(() => {
    fetchNewMessages(chatId);
  }, 10000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});

const emojiClick = (emoji) => {
  content.value.body += emoji + " ";
};

const messages = computed(() => {
  return store.getters["chat/messages"];
});

const page = computed(() => {
  return store.getters["chat/page"];
});
</script>
<style>
textarea {
  resize: none;
}
</style>
