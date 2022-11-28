export const state = () => ({
  requests: [],
});

export const getters = {
  requests: (state) => state.requests,
};

export const mutations = {
  setRequest(state, payload) {
    state.requests = payload;
  },
};

export const actions = {
  setRequest(context, payload) {
    context.commit("setRequest", payload);
  },
};
