export default defineNuxtConfig({
  modules: ['../src/module'],
  devtools: { enabled: true },
  nuxtRating:{
    endpoints : {
      titi: ():string => "world"
    }
  }
})
