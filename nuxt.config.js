// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
  app: {
    head: {
      script: [
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=UA-38936174-1",
        },
        {
          children: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'GTM-MGK4B79M');`,
        },
      ],
    },
  },
  css: ["~/../assets/css/main.scss"],
  devtools: { enabled: true },
  ssr: false,
  srcDir: "src/",
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "~/../assets/css/variables.scss";',
        },
      },
    },
  },
};
