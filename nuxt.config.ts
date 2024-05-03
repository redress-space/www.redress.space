// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  devtools: { enabled: true },
  ssr: true,
  app: {
    head: {
      title: 'RE:DRESS',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {name: 'keywords', content: 'RE:DRESS, fashion, personalized fashion, deep learning, conscious shopping, style game, stylists, future of fashion'},
        {name: 'description', content: 'Redress is your personalized fashion shopping experience. Try out the AI stylist that will keep you well-dressed everyday and everywhere'},
        {name: 'og:url', content: 'https://redress.space'},
        {name: 'og:title', content: 'Redress App'},
        {name: 'og:description', content: 'Redress is your personalized fashion shopping experience. Try out the AI stylist that will keep you well-dressed everyday and everywhere'},
        {name: 'og:type', content: 'website'},
        {name: 'format-detection', content: 'telephone=no'},
      ]
    }
  }
})
