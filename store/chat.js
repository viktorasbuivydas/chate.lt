export const state = () => ({
  messages: [],
  lastMessageId: 0,
  pinned: [],
  page: 1,
});

export const getters = {
  messages: (state) => state.messages,
  lastMessageId: (state) => state.lastMessageId,
  pinned: (state) => state.pinned,
  page: (state) => state.page,
};

export const mutations = {
  sendMessage(state, payload) {
    state.messages.push(payload);
  },

  addNewMessages(state, payload) {
    state.messages.unshift(...payload);
  },

  setLastMessageId(state, payload) {
    const lastMessageId = state.lastMessageId;
    if (payload[0]?.id > lastMessageId) {
      state.lastMessageId = payload[0].id;
    }
  },

  setMessages(state, payload) {
    let messagesList = [];
    if (state.messages && state.messages.length > 0) {
      const messages = state.messages.concat(payload);
      messagesList = messages;
    } else {
      messagesList = payload;
    }
    state.setLastMessageId = payload;
  },

  unsetMessages(state, payload) {
    state.messages = [];
  },

  unsetLastMessageId(state, payload) {
    state.lastMessageId = 0;
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
    context.commit("setLastMessageId", payload);
  },

  pinMessage(context, payload) {
    context.commit("pinMessage", payload);
    // dispatch("getMessages");
  },

  setPage(context, payload) {
    context.commit("setPage", payload);
  },

  setMessages(context, payload) {
    context.commit("setMessages", payload);
  },

  increasePage(context, payload) {
    context.commit("increasePage", payload);
  },

  resetMessages(context, payload) {
    context.commit("unsetMessages");
  },

  resetLastMessageId(context, payload) {
    context.commit("unsetLastMessageId");
  },

  resetPage(context) {
    context.commit("setPage", 1);
  },

  addMessages(context, payload) {
    if (payload) {
      payload.map((item) => context.commit("sendMessage", item));
      context.commit("setLastMessageId", payload);
    }
  },
};
