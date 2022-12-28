import { computed, ref, useStore } from "@nuxtjs/composition-api";

const successTimer = ref(null);
const errorTimer = ref(null);

export default function useAlerts() {
  const store = useStore();

  const pushSuccessAlert = (message) => {
    store.dispatch("alert/pushSuccess", message);

    if (successTimer.value !== null) {
      clearTimeout(successTimer.value);
    }

    successTimer.value = setTimeout(function () {
      store.dispatch("alert/pushSuccess", null);
    }, 10000);
  };

  const closeSuccessAlert = () => {
    store.dispatch("alert/pushSuccess", null);
  };

  const hasSuccessAlert = computed(
    () => store.getters["alert/success"].value !== null
  );

  const pushErrorAlert = (message) => {
    if (errorTimer.value !== null) {
      clearTimeout(errorTimer.value);
    }

    errorTimer.value = setTimeout(function () {
      store.dispatch("alert/pushError", null);
    }, 20000);
    store.dispatch("alert/pushError", message);
  };

  const closeErrorToast = () => {
    store.dispatch("alert/pushError", null);
  };

  const closeAlerts = () => {
    store.dispatch("alert/pushError", null);
    store.dispatch("alert/pushSuccess", null);
  };

  const hasErrorAlert = computed(
    () => store.getters["alert/error"].value !== null
  );

  return {
    pushSuccessAlert,
    closeSuccessAlert,
    hasSuccessAlert,
    pushErrorAlert,
    closeErrorToast,
    closeErrorToast,
    hasErrorAlert,
    closeAlerts,
  };
}
