// https://nuxt.com/docs/api/configuration/nuxt-config
export default {
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
