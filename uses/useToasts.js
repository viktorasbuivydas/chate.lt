import { computed, ref } from "@nuxtjs/composition-api";

const successToast = ref(null);
const errorToast = ref(null);
const successTimer = ref(null);
const errorTimer = ref(null);

export default function useToasts() {
  const pushSuccessToast = (message) => {
    successToast.value = message;

    if (successTimer.value !== null) {
      clearTimeout(successTimer.value);
    }

    successTimer.value = setTimeout(function () {
      successToast.value = null;
    }, 10000);
  };

  const closeSuccessToast = () => {
    successToast.value = null;
  };

  const hasSuccessToast = computed(() => successToast.value !== null);

  const pushErrorToast = (message) => {
    errorToast.value = message;

    if (errorTimer.value !== null) {
      clearTimeout(errorTimer.value);
    }

    errorTimer.value = setTimeout(function () {
      errorToast.value = null;
    }, 50000);
  };

  const closeErrorToast = () => {
    errorToast.value = null;
  };

  const hasErrorToast = computed(() => errorToast.value !== null);

  return {
    successToast,
    pushSuccessToast,
    closeSuccessToast,
    hasSuccessToast,
    errorToast,
    pushErrorToast,
    closeErrorToast,
    hasErrorToast,
  };
}
