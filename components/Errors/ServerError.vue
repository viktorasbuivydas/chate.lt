<template>
  <body class="overflow-hidden">
    <div
      class="text-gray-800 grid place-content-center text-center py-12 md:py-40 px-16 md:px-24"
    >
      <h1 class="font-bold text-7xl py-2">500</h1>
      <p class="md:hidden py-2">
        Sorry. The content you’re looking for <br />
        doesn’t exist. Either it was removed, <br />
        or you mistyped the link.
      </p>
      <p class="hidden md:block py-2">
        Sorry. The content you’re looking for doesn’t exist.<br />Either it was
        removed, or you mistyped the link.
      </p>
      <div>
        <div class="md:flex md:justify-center md:gap-4 py-2">
          <nuxt-link
            to="/"
            class="w-full md:w-auto my-2 md:my-0 border rounded-md bg-gray-800 text-white py-4 px-8 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-opacity-50"
          >
            Go to Homepage
          </nuxt-link>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "MyComponent",
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped></style>
