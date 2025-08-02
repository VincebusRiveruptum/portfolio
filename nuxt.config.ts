// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },
  modules: ["@vueuse/nuxt"],
  nitro: {
    preset: "static",
  },
  app: {
    baseURL: "/portfolio/",
    head: {
      title: "Vincebus Riveruptum's portfolio",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/portfolio/logo_white.png",
        },
      ],
    },
  },
});
