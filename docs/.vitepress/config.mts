import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vibe Coding Guide",
  description: "AI 时代的 Vibe Coding 实践",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  metaChunk: true,
  // https://vitepress.dev/zh/guide/deploy#setting-a-public-base-path
  base: "/vibe-coding-guide/",
  head: [
    [
      "link",
      { rel: "icon", type: "image/png", href: "/vibe-coding-guide/logo.png" },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { src: "/logo.png" },
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    editLink: {
      pattern:
        "https://github.com/lyh-docs/vibe-coding-guide/edit/main/docs/:path",
      text: "在 GitHub 编辑",
    },
    nav: [
      { text: "主页", link: "/" },
      { text: "赞助我", link: "https://github.com/lyh-gzh/buy-me-a-coffee" },
    ],
    sidebar: [
      {
        text: "AI 时代的 Vibe Coding 实践",
        items: [
          { text: "序言：什么是 Vibe Coding", link: "/00" },
          { text: "Vibe Coding 到底改变了什么", link: "/01" },
          {
            text: "为什么很多人用了 AI，却没有进入真正的 Vibe Coding",
            link: "/02",
          },
          { text: "Vibe Coding 的核心，不是提示词，而是意图管理", link: "/03" },
          { text: "上下文，才是 AI 编程的真正燃料", link: "/04" },
          { text: "真正高效的方式，是小步迭代，而不是一口吃成", link: "/05" },
          { text: "人类最重要的角色，正在从写转向判", link: "/06" },
          { text: "Vibe Coding 不等于放弃工程纪律", link: "/07" },
          { text: "一个实用的 Vibe Coding 工作流", link: "/08" },
          { text: "不同层次的开发者，会怎样使用 Vibe Coding", link: "/09" },
          { text: "AI 时代，编程能力会变成什么样", link: "/10" },
          {
            text: "结语：真正值得练习的，不是让 AI 听话，而是让协作高效",
            link: "/11",
          },
        ],
      },
    ],
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/lyh-docs/vibe-coding-guide",
      },
    ],
    footer: {
      message: "Released under the CC-BY-SA-4.0 license.",
      copyright: `Copyright © 2025-${new Date().getFullYear()} <a href="https://github.com/lyh-docs">lyh-docs</a>`,
    },
  },
});
