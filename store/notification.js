export const state = () => ({
  notifications: [],
  notification: null,
  newNotifications: [],
  page: 1,
});

export const getters = {
  notifications: (state) => state.notifications,
  notification: (state) => state.notification,
  newNotifications: (state) => state.newNotifications,
  page: (state) => state.page,
};

export const mutations = {
  setNotifications(state, payload) {
    state.notifications = payload;
  },

  setMNotification(state, payload) {
    state.notification = payload;
  },

  setNewNotifications(state, payload) {
    state.newNotifications = payload;
  },

  setPage(state, payload) {
    state.page = payload;
  },

  increasePage(state) {
    state.page = state.page + 1;
  },
};

export const actions = {
  setNotifications(context, payload) {
    context.commit("setNotifications", payload);
  },

  setNotification(context, payload) {
    context.commit("setNotification", payload);
  },

  setNewNotifications(context, payload) {
    context.commit("setNewNotifications", payload);
  },

  setPage(context, payload) {
    context.commit("setPage", payload);
  },

  increasePage(context) {
    context.commit("increasePage");
  },
};
