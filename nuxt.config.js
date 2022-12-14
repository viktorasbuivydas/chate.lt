import { resolve } from "path";
import locale from "./locale";

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "chate.lt",
    htmlAttrs: {
      lang: "lt",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded",
      },
    ],
  },
  target: "server",
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/infiniteloading", ssr: false },
    "~/plugins/vue-gates",
    { src: "./plugins/echo", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxt/postcss8",
    "@nuxtjs/composition-api/module",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/i18n",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "simple-code-editor/nuxt",
  ],

  publicRuntimeConfig: {
    pusher: {
      authEndpoint: process.env.PUSHER_AUTH_ENDPOINT,
      debug: process.env.PUSHER_DEBUG,
      key: process.env.PUSHER_APP_KEY,
      wshost: process.env.WS_HOST,
      port: process.env.PUSHER_PORT,
    },
  },

  axios: {
    proxy: true,
    credentials: true,
  },

  i18n: {
    locales: ["lt"],
    defaultLocale: "lt",
    vueI18n: locale,
  },
  alias: {
    "@": resolve(__dirname, "./components"),
    "~": resolve(__dirname, "./"),
    "+": resolve(__dirname, "./data"),
    uses: resolve(__dirname, "./uses"),
  },
  auth: {
    baseURL: process.env.API_BASE,
    autoLogout: true,
    plugins: [
      { src: "~/plugins/echo.js", ssr: false },
      "~/plugins/loggedIn.js",
    ],
    redirect: {
      home: "/home",
      login: "/",
    },
    strategies: {
      local: {
        token: {
          property: "token",
          global: true,
          required: true,
          type: "Bearer",
          maxAge: 86400 * 2,
        },
        refreshToken: {
          property: "refresh_token",
          data: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
        },
        user: {
          property: "",
          // autoFetch: true
        },
        endpoints: {
          login: { url: "login", method: "post" },
          logout: { url: "logout", method: "post" },
          user: { url: "user", method: "get" },
          refresh: { url: "/api/auth/refresh", method: "post" },
        },
      },
    },
  },
  axios: {
    baseURL: process.env.API_BASE,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};
