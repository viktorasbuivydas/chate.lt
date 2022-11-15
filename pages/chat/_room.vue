<template>
  <div class="flex flex-col flex-auto h-full p-0">
    <div
      class="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-0"
    >
      <div
        class="flex flex-col h-full overflow-x-auto mb-4"
        id="chat-container"
        ref="chatContainer"
      >
        <div class="flex flex-col h-full">
          <div class="flex flex-col justify-center text-center">
            <!-- <button @click="getMessages(currentPage++)" class="text-gray-400">
              Load more
            </button> -->
            <infinite-loading
              v-if="room && loadedFirstData"
              spinner="bubbles"
              @infinite="infiniteScroll"
              direction="top"
            ></infinite-loading>
          </div>
          <div class="grid grid-cols-12 gap-y-2">
            <ChatCard
              v-for="message in room"
              :message="message"
              @replyTo="replyTo($event)"
              :type="
                message.user.username === $auth.user.data.username
                  ? 'user'
                  : 'toUser'
              "
            />
          </div>
        </div>
      </div>

      <div
        class="relative flex flex-col items-center rounded-xl bg-white w-full p-4"
      >
        <div class="absolute bottom-25 right-0">
          <Emojipicker v-if="showEmojis" @emoji_click="emojiClick" />
        </div>
        <div v-if="content.to" class="flex items-center space-x-2 w-full mb-4">
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
          @submit.prevent="writeMessage"
          class="flex items-center flex-row w-full h-16"
        >
          <div>
            <button
              class="flex items-center justify-center text-gray-400 hover:text-gray-600"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                ></path>
              </svg>
            </button>
          </div>
          <div class="flex-grow ml-4">
            <div class="relative w-full">
              <input
                type="text"
                v-model="content.body"
                class="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
              />
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
          <div class="ml-4">
            <button
              type="submit"
              :disabled="loading"
              class="flex items-center justify-center bg-blue-500 hover:bg-blue-600 rounded-xl text-white px-4 py-1 flex-shrink-0"
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
import ChatCard from "@/Chat/Card.vue";
import Emojipicker from "@/Emojipicker.vue";
import Loader from "@/Loader.vue";
import {
  ref,
  onMounted,
  useContext,
  useRoute,
  computed,
  onBeforeUnmount,
} from "@nuxtjs/composition-api";
import infiniteLoading from "vue-infinite-loading";

const route = useRoute();
const room = ref(null);
const { $axios, $auth } = useContext();
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

const getMessages = (page) => {
  if (!route.value.params.room) {
    return;
  }

  $axios
    .get(
      "/chat/" + route.value.params.room + "/index?page=" + currentPage.value
    )
    .then((response) => {
      room.value = response.data.data;
      scrollBottom();
    })
    .finally(() => {
      setTimeout(() => {
        loadedFirstData.value = true;
      }, 500);
    });
};

const loadNewMessages = () => {
  $axios
    .get(
      "/chat/" + route.value.params.room + "/index?page=" + currentPage.value
    )
    .then((response) => {
      if (response.data.data)
        if (response.data.data.length > 1) {
          response.data.data.forEach((item) => room.value.push(item)); // push it into the items array so we can display the data
          $state.loaded();
        } else {
          $state.complete();
        }
      room.value = response.data.data;
      scrollBottom();
    });
};

const infiniteScroll = ($state) => {
  setTimeout(() => {
    currentPage.value++; // next page

    $axios
      .get(
        "/chat/" + route.value.params.room + "/index?page=" + currentPage.value
      )
      .then((response) => {
        if (response.data.data.length > 1) {
          response.data.data.forEach((item) => room.value.push(item)); // push it into the items array so we can display the data
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

const writeMessage = () => {
  if (!content.value.body) {
    return;
  }
  currentPage.value = 1;
  showEmojis.value = false;
  loading.value = true;

  $axios
    .post("/chat/" + route.value.params.room + "/store", {
      content: message.value,
    })
    .then(() => {
      content.value.to = "";
      content.value.body = "";
      getMessages();
    })
    .finally(() => {
      loading.value = false;
      scrollBottom();
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

onMounted(() => {
  getMessages();

  interval.value = setInterval(() => {
    loadNewMessages();
  }, 10000);
});

onBeforeUnmount(() => {
  clearInterval(interval.value);
});

const scrollBottom = () => {
  setTimeout(() => {
    var scrollY = document.getElementById("chat-container");
    if (!scrollY) {
      return;
    }
    scrollY.scrollTop = scrollY.scrollHeight - scrollY.clientHeight;
  }, 500);
};

const emojiClick = (emoji) => {
  content.value.body += emoji + " ";
};
</script>
