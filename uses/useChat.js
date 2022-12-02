import { useContext, useStore } from "@nuxtjs/composition-api";

export default function useChat() {
  const { $axios } = useContext();
  const store = useStore();

  const fetchMessages = (chatId, page) => {
    return new Promise((resolve, reject) => {
      $axios
        .get("/chat/" + chatId + "/index?page=" + page)
        .then((response) => {
          store.dispatch("chat/addMessages", response.data.data);
          if (response.data.data.length > 0) {
            store.dispatch("chat/increasePage");
          }
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const fetchNewMessages = (chatId) => {
    return new Promise((resolve, reject) => {
      const lastMessageId = store.getters["chat/lastMessageId"];

      $axios
        .get("/chat/" + chatId + "/index?last_message_id=" + lastMessageId)
        .then((response) => {
          store.dispatch("chat/addNewMessages", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const writeMessage = (chatId, message) => {
    return new Promise((resolve, reject) => {
      $axios
        .post("/chat/" + chatId + "/store", {
          content: message,
        })
        .then((response) => {
          fetchNewMessages(chatId);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const resetChat = () => {
    store.dispatch("chat/resetMessages");
    store.dispatch("chat/resetPage", 1);
    store.dispatch("chat/resetLastMessageId");
  };

  return {
    fetchMessages,
    fetchNewMessages,
    writeMessage,
    resetChat,
  };
}
