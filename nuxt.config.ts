// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2026-01-12",
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "dark",
  },

  // use the head property here 👇
});
