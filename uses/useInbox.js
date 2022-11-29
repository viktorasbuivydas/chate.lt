import { useContext, useStore } from "@nuxtjs/composition-api";

export default function useInbox() {
  const { $axios } = useContext();
  const store = useStore();

  const fetchMessages = (type, page) => {
    store.dispatch("inbox/setMessages", []);

    return new Promise((resolve, reject) => {
      $axios("/inbox/index?page=" + page + "&type=" + type)
        .then((response) => {
          store.dispatch("inbox/setMessages", response.data.data);
          resolve(response.data);
        })
        // .finally(() => store.dispatch("inbox/increasePage"))
        .catch((e) => reject(e));
    });
  };

  const fetchNewMessages = () => {
    store.dispatch("inbox/setNewMessages", []);

    return new Promise((resolve, reject) => {
      $axios("/inbox/new")
        .then((response) => {
          store.dispatch("inbox/setNewMessages", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const getMessage = (messageId) => {
    store.dispatch("inbox/setMessage", null);

    return new Promise((resolve, reject) => {
      $axios("/inbox/" + messageId)
        .then((response) => {
          store.dispatch("inbox/setMessage", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  return {
    fetchMessages,
    fetchNewMessages,
    getMessage,
  };
}
