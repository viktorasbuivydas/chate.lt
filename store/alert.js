export const state = () => ({
  success: null,
  error: null,
});

export const getters = {
  success: (state) => state.success,
  error: (state) => state.error,
};

export const mutations = {
  setSuccess(state, payload) {
    state.success = payload;
  },

  setError(state, payload) {
    state.error = payload;
  },
};

export const actions = {
  pushSuccess(context, payload) {
    context.commit("setSuccess", payload);
  },

  pushError(context, payload) {
    context.commit("setError", payload);
  },

  clearAlerts(context) {
    context.commit("setError", null);
    context.commit("setSuccess", null);
  },
};
