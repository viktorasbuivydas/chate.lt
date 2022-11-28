import { useContext, useStore } from "@nuxtjs/composition-api";

export default function useChat() {
  const { $axios } = useContext();
  const store = useStore();

  const InitData = (parentId, page, messages = null) => {};
}
