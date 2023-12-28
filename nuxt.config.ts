// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/svg-sprite'],
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Рекомендуй друга в ИТ',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content: '100 000 по программе приведи в IT · Бонусы для сотрудников',
        },
      ],
      script: [
        {
          src: '/ya.metrika.js',
          defer: true,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-16x16.png',
          sizes: '16x16',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-32x32.png',
          sizes: '32x32',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-96x96.png',
          sizes: '96x96',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-128x128.png',
          sizes: '128x128',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/favicon-196x196.png',
          sizes: '196x196',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-57x57.png',
          sizes: '57x57',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-60x60.png',
          sizes: '60x60',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-72x72.png',
          sizes: '72x72',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-76x76.png',
          sizes: '76x76',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-114x114.png',
          sizes: '114x114',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-120x120.png',
          sizes: '120x120',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-144x144.png',
          sizes: '144x144',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicons/apple-icon-152x152.png',
          sizes: '152x152',
        },
      ],
    },
  },
  devtools: { enabled: false },
  css: ['normalize.css/normalize.css'],
  vite: {
    esbuild: {
      drop: ['debugger'],
      pure: ['console.log', 'console.error', 'console.warn', 'console.debug', 'console.trace'],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/styles/_colors.scss" as *;
            @use "@/assets/styles/_mixins.scss" as *;
            @use "@/assets/styles/_fonts.scss" as *;
          `,
        },
      },
    },
  },
  components: [
    {
      path: '~/components',
      extensions: ['.vue'],
      pathPrefix: false,
    },
  ],
});
