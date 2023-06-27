import { defineNuxtPlugin, useRuntimeConfig, useAppConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {

  const {
    nuxtRating: { endpoints },
  } = useRuntimeConfig().public

  const appConfig = useAppConfig()

  return {
    provide: {
      backend: appConfig.nuxtRating.endpoints,
    },
  };
});
