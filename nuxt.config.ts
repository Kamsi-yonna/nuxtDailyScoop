// import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  modules: ["nuxt-icon", "@nuxtjs/tailwindcss"],
  css: ["~/assets/vuetify.css", "@mdi/font/css/materialdesignicons.min.css"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
