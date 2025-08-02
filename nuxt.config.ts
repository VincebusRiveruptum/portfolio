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
      meta: [
        {
          name: "description",
          content: "Full Stack Web Developer portfolio by Vicente Riveros.",
        },
        {
          name: "keywords",
          content: "Vue, Laravel, Nuxt, Full Stack Developer, Portfolio",
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: "Vincebus Riveruptum Portfolio" },
        {
          property: "og:description",
          content:
            "Welcome to Vincebus Riveruptum's portfolio page, a Full Stack Web Developer from Chile.",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://your-username.github.io/portfolio",
        },
      ],
    },
  },
});
