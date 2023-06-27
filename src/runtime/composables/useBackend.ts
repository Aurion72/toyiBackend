import { useNuxtApp } from '#app'

export const useBackend = () => {
  return useNuxtApp().$backend
} 