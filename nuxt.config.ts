// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image"],
  nitro: {
    compressPublicAssets: true,
  },
  app: {
    head: {
      title: "Front-End Green Light House Challenge",
      htmlAttrs: {
        lang: "en",
      },
    },
  },
});
