export const state = () => ({
  threads: [],
  questions: [],
  comments: [],
  question: null,
  page: 1,
});

export const getters = {
  threads: (state) => state.threads,
  questions: (state) => state.questions,
  comments: (state) => state.comments,
  question: (state) => state.question,
  page: (state) => state.page,
};

export const mutations = {
  setThreads(state, payload) {
    state.threads = payload;
  },

  setQuestions(state, payload) {
    state.questions = payload;
  },

  setComments(state, payload) {
    state.comments = payload;
  },

  setQuestion(state, payload) {
    state.question = payload;
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

  setComments(context, payload) {
    context.commit("setComments", payload);
  },

  setQuestion(context, payload) {
    context.commit("setQuestion", payload);
  },

  setPage(context, payload) {
    context.commit("setPage", payload);
  },

  increasePage(context) {
    context.commit("increasePage");
  },
};
