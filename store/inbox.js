export const state = () => ({
  messages: [],
  page: 1,
});

export const getters = {
  messages: (state) => state.messages,
  page: (state) => state.page,
};

export const mutations = {
  setMessages(state, payload) {
    state.messages = payload;
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

  setPage(context, payload) {
    context.commit("setPage", payload);
  },

  increasePage(context) {
    context.commit("increasePage");
  },
};
