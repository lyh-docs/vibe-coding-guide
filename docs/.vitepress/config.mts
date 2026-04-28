import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My VitePress Template",
  description: "This is my VitePress template",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  // https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path
  base: "/vitepress-template/",
  head: [["link", { rel: "icon", type: "image/png", href: "/logo.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/logo.png" },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    editLink: {
      pattern:
        "https://github.com/lyh-docs/vitepress-template/edit/main/docs/:path",
      text: "在 GitHub 编辑",
    },
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lyh-docs/vitepress-template",
      },
    ],
    footer: {
      message: "Released under the CC-BY-SA-4.0 license.",
      copyright: `Copyright © 2025-${new Date().getFullYear()} <a href="https://github.com/lyh-docs">lyh-docs</a>`,
    },
  },
});
