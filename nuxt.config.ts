import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', '@vite-pwa/nuxt',],
  // pwa: {
  //   /* your pwa options */
  // }
  css: ['~/assets/css/tailwind.css',],
  vite: {
    plugins: [
      tailwindcss(),
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '~/assets/scss/variable.scss',
        }
      }
    },
  },
})