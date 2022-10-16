<template>
  <form
    v-on:submit.prevent
    class="w-full lg:w-1/2 flex justify-center bg-white dark:bg-gray-900"
  >
    <div
      class="w-full sm:w-4/6 md:w-3/6 lg:w-2/3 text-gray-800 dark:text-gray-100 flex flex-col justify-center px-2 sm:px-0 py-16"
    >
      <div class="px-2 sm:px-6">
        <h3 class="text-2xl sm:text-3xl md:text-2xl font-bold leading-tight">
          Gauti registracijos kodą
        </h3>
      </div>
      <div class="mt-8 w-full px-2 sm:px-6">
        <div class="flex flex-col mt-8">
          <label for="email" class="text-lg font-semibold leading-tight"
            >El. pašto adresas</label
          >
          <input
            id="email"
            required
            aria-required="true"
            name="email"
            class="h-10 px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
            type="email"
          />
        </div>
        <div class="flex flex-col mt-5">
          <label for="password" class="text-lg font-semibold fleading-tight"
            >Priežastis</label
          >
          <textarea
            id="password"
            required
            aria-required="true"
            name="password"
            class="px-2 w-full rounded mt-2 text-gray-600 focus:outline-none focus:border focus:border-blue-700 dark:focus:border-blue-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 border-gray-300 border shadow"
          ></textarea>
        </div>
      </div>
      <div class="px-2 sm:px-6">
        <button
          type="submit"
          class="focus:outline-none w-full sm:w-auto bg-blue-700 transition duration-150 ease-in-out hover:bg-blue-600 rounded text-white px-8 py-3 text-sm mt-6"
        >
          Siųsti prašymą
        </button>
        <p class="mt-6 text-xs">
          Jau turite paskyrą?
          <nuxt-link :to="localePath({ name: 'login' })" class="text-blue-600"
            >Prisijungti</nuxt-link
          >
        </p>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  layout: "auth",
};
</script>

<script setup></script>
