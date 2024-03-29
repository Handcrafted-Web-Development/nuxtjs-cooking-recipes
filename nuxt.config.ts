// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ['@pinia/nuxt', '@nuxtjs/apollo', '@nuxt/image', '@nuxtjs/tailwindcss'],
  runtimeConfig: {
    // Private keys are only available on the server
    datoToken: process.env.NUXT_DATO_TOKEN,
    isProd: process.env.NETLIFY_ENV === 'production',
    // Public keys that are exposed to the client
    public: {
      isProd: process.env.NETLIFY_ENV === 'production',
      datoToken: process.env.NUXT_DATO_TOKEN,
    },
  },
  vite: {
    server: {
      watch: {
        usePolling: true,
      },
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
    },
  },
  apollo: {
    clients: {
      default: './config/apollo.ts',
    },
  },
});
