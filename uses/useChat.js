import { useContext, useStore } from "@nuxtjs/composition-api";

export default function useChat() {
  const { $axios } = useContext();
  const store = useStore();

  const fetchMessages = (chatId, page, loadMore = false) => {
    console.log(loadMore);
    return new Promise((resolve, reject) => {
      $axios
        .get("/chat/" + chatId + "/index?page=" + page)
        .then((response) => {
          if (!loadMore) {
            store.dispatch("chat/setMessages", response.data.data);
            console.log("a");
          } else {
            console.log("more");
            store.dispatch("chat/addNewMessages", response.data.data);
          }
          resolve(response.data);
        })
        .finally(() => store.dispatch("chat/increasePage"))
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
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  return {
    fetchMessages,
    writeMessage,
  };
}
