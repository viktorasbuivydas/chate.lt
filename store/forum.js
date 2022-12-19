export const state = () => ({
  thread: null,
  questions: [],
  comments: [],
  question: null,
  page: 1,
});

export const getters = {
  thread: (state) => state.thread,
  questions: (state) => state.questions,
  comments: (state) => state.comments,
  question: (state) => state.question,
  page: (state) => state.page,
};

export const mutations = {
  setThread(state, payload) {
    state.thread = payload;
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
  setThread(context, payload) {
    context.commit("setThread", payload);
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
