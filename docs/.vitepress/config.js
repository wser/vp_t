import { defineConfig } from "vitepress";
// app level config options
export default defineConfig({
  lang: "en-US",
  title: "Viktor Vidaković",
  description: "Vite & Vue & Md & Tailwind & Minisearch powered static site.",
  themeConfig: {
    returnToTopLabel:'Go to top',
    search: {
      provider: "local",
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wser' },
      { icon: 'linkedin', link: 'https://linkedin.com/viktor-vidakovic' },
      { icon: 'x', link: 'https://twitter.com/wserz' },
      { icon: 'discord', link: 'https://discord.com/wserz' },
      { icon: 'youtube', link: 'https://youtube.com/wserz' },
      // // You can also add custom icons by passing SVG as string:
      // {
      //   icon: {
      //     svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
      //   },
      //   link: '...',
      //   // You can include a custom label for accessibility too (optional but recommended):
      //   ariaLabel: 'cool link'
      // }
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    footer: {
      message: 'Released with my approval.',
      copyright: 'Copyright © 1981-present Viktor Vidaković'
    }
  },
});
