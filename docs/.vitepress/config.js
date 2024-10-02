import { defineConfig } from "vitepress";
// app level config options
export default defineConfig({
  lang: "en-US",
  title: "Viktor Vidaković",
  description: "Vite & Vue powered static site generator.",
  themeConfig: {
    search: {
      provider: "local",
    },
  },
});
