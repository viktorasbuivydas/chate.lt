export const state = () => ({
  messages: [],
  message: null,
  newMessages: [],
  page: 1,
});

export const getters = {
  messages: (state) => state.messages,
  message: (state) => state.message,
  newMessages: (state) => state.newMessages,
  page: (state) => state.page,
};

export const mutations = {
  setMessages(state, payload) {
    state.messages = payload;
  },

  setMessage(state, payload) {
    state.message = payload;
  },

  setNewMessages(state, payload) {
    state.newMessages = payload;
  },

  setPage(state, payload) {
    state.page = payload;
  },

  increasePage(state) {
    state.page = state.page + 1;
  },
};

export const actions = {
  setMessages(context, payload) {
    context.commit("setMessages", payload);
  },

  setMessage(context, payload) {
    context.commit("setMessage", payload);
  },

  setNewMessages(context, payload) {
    context.commit("setNewMessages", payload);
  },

  setPage(context, payload) {
    context.commit("setPage", payload);
  },

  increasePage(context) {
    context.commit("increasePage");
  },
};
