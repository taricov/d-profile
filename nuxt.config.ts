import { AppFormHero } from './.nuxt/components.d';
export default ({
    modules: ['@nuxtjs/tailwindcss', 'nuxt-icon', '@vueuse/nuxt'],
    build: {
        transpile: ["@headlessui/vue"],
    },
    head:{
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/public/favicon.ico' }
          ],
      },
    colorMode: {
        classSuffix: '',
    },
})
