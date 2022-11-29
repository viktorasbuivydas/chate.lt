import useInbox from "uses/useInbox.js";

export default {
  //   const { $axios } = useContext();
  setup() {
    const { fetchNewMessages } = useInbox();
    fetchNewMessages();
    console.log("init");
    return {
      fetchNewMessages,
    };
  },
};
