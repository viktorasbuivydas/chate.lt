import { useContext, useStore } from "@nuxtjs/composition-api";
import useToasts from "uses/useToasts.js";

export default function useRequest() {
  const { $axios } = useContext();
  const store = useStore();
  const { pushSuccessToast, pushErrorToast } = useToasts();

  const fetchRequests = (type) => {
    return new Promise((resolve, reject) => {
      $axios
        .get("/requests/index?type=" + type)
        .then((response) => {
          store.dispatch("request/setRequest", response.data.data);
          resolve(response.data);
        })
        .catch((e) => reject(e));
    });
  };

  const approveRequest = (requestId) => {
    return new Promise((resolve, reject) => {
      const lastMessageId = store.getters["chat/lastMessageId"];

      $axios
        .get("/requests/" + requestId + "/approve")
        .then((response) => {
          // store.dispatch("requests/getMessages", response.data.data);
          resolve(response.data);
        })
        .finally(() => {
          pushSuccessToast("Sekmingai priimta");
        })
        .catch((e) => reject(e));
    });
  };

  const rejectRequest = (requestId) => {
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

  return {
    fetchRequests,
    approveRequest,
    rejectRequest,
  };
}
