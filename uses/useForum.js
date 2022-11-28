import { useContext, useStore } from "@nuxtjs/composition-api";

export default function useChat() {
  const { $axios } = useContext();
  const store = useStore();

  const fetchThreads = (parentId, page, messages = null) => {
    return new Promise((resolve, reject) => {
      const parent = parentId ? "&parent_id=" + parentId : "";
      $axios
        .get("/threads/index?page=" + page + parent)
        .then((response) => {
          store.dispatch("forum/setThreads", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const fetchQuestions = (threadId, page, messages = null) => {
    return new Promise((resolve, reject) => {
      const parent = parentId ? "&parent_id=" + parentId : "";
      const loadMessages = messages ? "&messages=true" : "";
      $axios
        .get("/threads/index?page=" + page + parent + loadMessages)
        .then((response) => {
          store.dispatch("forum/setThreads", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  return {
    fetchThreads,
  };
}
