import { useContext, useStore } from "@nuxtjs/composition-api";
import useAlerts from "./useAlerts";

export default function useChat() {
  const { $axios } = useContext();
  const store = useStore();
  const alert = useAlerts();

  const fetchThreads = (parentId, page) => {
    return new Promise((resolve, reject) => {
      const parent = parentId ? "&parent_id=" + parentId : "";
      $axios
        .get("/threads/index?page=" + page + parent)
        .then((response) => {
          store.dispatch("forum/setThread", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const fetchThread = (threadId) => {
    return new Promise((resolve, reject) => {
      $axios
        .get("/threads/" + threadId)
        .then((response) => {
          store.dispatch("forum/setThread", response.data.data);
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
          store.dispatch("forum/setQuestion", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const fetchComments = (questionId) => {
    return new Promise((resolve, reject) => {
      $axios
        .get("/questions/" + questionId + "/comments")
        .then((response) => {
          console.log(response.data);
          store.dispatch("forum/setComments", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const writeQuestion = (name, content, threadId) => {
    return new Promise((resolve, reject) => {
      $axios
        .post("/questions/" + threadId + "/store/", {
          name: name,
          content: content,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          if (e.response.data.message) {
            alert.pushErrorAlert(e.response.data.message);
          }
          reject(e);
        });
    });
  };

  const writeComment = (content, questionId) => {
    return new Promise((resolve, reject) => {
      $axios
        .post("/comments/" + questionId + "/store/", {
          content: content,
        })
        .then((response) => {
          resolve(response.data);
        })
        .catch((e) => {
          if (e.response.data.message) {
            alert.pushErrorAlert(e.response.data.message);
          }
          reject(e);
        });
    });
  };

  return {
    fetchThreads,
    fetchThread,
    fetchQuestions,
    fetchQuestion,
    fetchComments,
    writeQuestion,
    writeComment,
  };
}
