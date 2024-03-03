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
gtag('consent', 'default', {
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'ad_storage': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500,
});
gtag('js', new Date());
gtag('config', 'G-57CT6TZ3LB');`,
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
