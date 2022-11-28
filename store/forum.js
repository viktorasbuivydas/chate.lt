export const state = () => ({
  threads: [],
  questions: [],
  page: 1,
});

export const getters = {
  threads: (state) => state.threads,
  questions: (state) => state.questions,
  page: (state) => state.page,
};

export const mutations = {
  setThreads(state, payload) {
    state.threads = payload;
  },

  setQuestions(state, payload) {
    state.questions = payload;
  },

  setPage(state, payload) {
    state.page = payload;
  },

  increasePage(state) {
    state.page = state.page + 1;
  },
};

export const actions = {
  setThreads(context, payload) {
    context.commit("setThreads", payload);
  },

  setQuestions(context, payload) {
    context.commit("setQuestions", payload);
  },

  setPage(context, payload) {
    context.commit("setPage", payload);
  },

  increasePage(context) {
    context.commit("increasePage");
  },
};
