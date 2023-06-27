import { defineNuxtModule, addComponentsDir, addImportsDir, addPlugin, createResolver } from "@nuxt/kit";
import { name, version } from "../package.json";
import { join } from "pathe";
import { defu } from "defu";

// Module options TypeScript interface definition
export interface ModuleOptions {
  endpoints?: Record<string, any>
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: "nuxtRating",
    compatibility: {
      nuxt: "^3.0.0-rc.8",
    },
  },
  // Default configuration options of the Nuxt module
  defaults: {
    endpoints: {},
  },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    const runtimeDir = resolve("./runtime");

    nuxt.options.runtimeConfig.public.nuxtRating = defu(
      nuxt.options.runtimeConfig.public.nuxtRating,
      options,
    )

    addPlugin(resolve(runtimeDir, "plugin"));

    addImportsDir(join(runtimeDir, "composables"));
  },
});
