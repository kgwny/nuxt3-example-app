// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },
  app: {
    baseURL: '/nuxt3-example-app/',
    head: {
      charset: 'utf-8',
      viewport: 'width=500, initial-scale=1',
      title: 'Example App',
      meta: [
        { name: 'description', content: 'This example app build by Nuxt 3.' }
      ]
    }
  },
  ssr: false
});
