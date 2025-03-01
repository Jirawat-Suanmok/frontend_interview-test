// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  // Defaults options
  tailwindcss: {
    config: {},
    cssPath: "~/assets/css/tailwind.css",
    viewer: { endpoint: "/_tailwind", exportViewer: true },
    exposeConfig: false,
  },

  plugins: ["~/plugins/preline.client.ts"],
});
