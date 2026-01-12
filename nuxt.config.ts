// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2026-01-12",
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/ui"],
  colorMode: {
    preference: "dark",
  },
  app: {
    pageTransition: { name: "fade-page", mode: "out-in" },

    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/vs-favicon.ico",
        },
      ],
    },
  },
});
