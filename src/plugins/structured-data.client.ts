import { type Thing } from "schema-dts";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      structuredData: (thing: Thing) => {
        useHead({
          script: [
            {
              type: "application/ld+json",
              innerHTML: thing,
            },
          ],
        });
      },
    },
  };
});
