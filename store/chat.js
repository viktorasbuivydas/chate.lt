export const state = () => ({
  messages: [],
  pinned: [],
  page: 1,
});

export const getters = {
  messages: (state) => state.messages,
  pinned: (state) => state.pinned,
  page: (state) => state.page,
};

export const mutations = {
  sendMessage(state, payload) {
    state.messages.unshift(payload);
  },

  addNewMessages(state, payload) {
    state.messages.push(...payload);
  },

  setMessages(state, payload) {
    state.messages = payload;
  },

  pinMessage(state, payload) {
    state.pinned.push(payload);
  },

  setPage(state, payload) {
    state.page = payload;
  },

  increasePage(state) {
    state.page = state.page + 1;
  },
};

export const actions = {
  sendMessage(context, payload) {
    context.commit("sendMessage", payload);
  },

  addNewMessages(context, payload) {
    if (!payload.length) {
      return;
    }
    context.commit("addNewMessages", payload);
  },

  pinMessage(context, payload) {
    context.commit("pinMessage", payload);
    dispatch("getMessages");
  },

  setPage(context, payload) {
    context.commit("setPage", payload);
  },

  setMessages(context, payload) {
    context.commit("setMessages", payload);
  },

  increasePage(context) {
    context.commit("increasePage");
  },
};
