export const state = () => ({
  roles: [],
  permissions: [],
  tab: "",
});

export const getters = {
  user: (state) => state.user,
  tab: (state) => state.tab,
};

export const mutations = {
  setUserRoles(state, payload) {
    state.roles = payload;
  },
  setUserPermissions(state, payload) {
    state.permissions = payload;
  },
  setTab(state, payload) {
    state.tab = payload;
  },
};

export const actions = {
  setUserRoles(context, payload) {
    context.commit("setUserRoles", payload);
    this.$gates.setRoles(payload);
  },
  setUserPermissions(context, payload) {
    context.commit("setUserPermissions", payload);
    this.$gates.setPermissions(payload);
  },
  setTab(context, payload) {
    context.commit("setTab", payload);
  },
};
