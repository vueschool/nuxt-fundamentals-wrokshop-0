// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-01-12",
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "dark",
  },

  ssr: false,
  //   OR
  //   routeRules: {
  //     "/": { ssr: false },
  //   },
});
