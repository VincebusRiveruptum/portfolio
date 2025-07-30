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
  app: {
    head: {
      title: "Vincebus Riveruptum's portfolio",
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo_white.png",
        },
      ],
    },
  },
});
