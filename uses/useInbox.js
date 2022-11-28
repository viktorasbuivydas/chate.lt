import { useContext, useStore } from "@nuxtjs/composition-api";

export default function useInbox() {
  const { $axios } = useContext();
  const store = useStore();

  const fetchMessages = (type, page) => {
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

  return {
    fetchMessages,
  };
}
