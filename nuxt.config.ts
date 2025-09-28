// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/gif",
          href: "/images/logo.gif", // ต้องวางไฟล์ไว้ที่ /public/images/logo.gif
        },
      ],
    },
  },
})