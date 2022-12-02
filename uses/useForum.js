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

  const fetchQuestions = (threadId) => {
    return new Promise((resolve, reject) => {
      $axios
        .get("/questions/thread/" + threadId)
        .then((response) => {
          console.log(response.data);
          store.dispatch("forum/setQuestions", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const fetchQuestion = (questionId) => {
    return new Promise((resolve, reject) => {
      $axios
        .get("/questions/" + questionId)
        .then((response) => {
          console.log(response.data);
          store.dispatch("forum/setQuestion", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const fetchQuestionComments = (questionId) => {
    return new Promise((resolve, reject) => {
      $axios
        .get("/questions/comments/" + questionId)
        .then((response) => {
          console.log(response.data);
          store.dispatch("forum/setComments", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  return {
    fetchThreads,
    fetchQuestions,
    fetchQuestion,
    fetchQuestionComments,
  };
}
