import { defineConfig } from 'vitepress'
import { groupIconVitePlugin } from 'vitepress-plugin-group-icons'
import llmstxt from 'vitepress-plugin-llms'
import Lumenpkg from '@theojs/lumen/package.json' with { type: 'json' }
import { head, markdown, nav, search, sidebar, socialLinks, transformPageData } from './configs'

const Lumenversion = `v` + Lumenpkg.version
const baseUrl = 'https://lumen.theojs.cn'

export default defineConfig({
  title: 'Lumen',
  description: '✨ 专为 VitePress 打造的主题美化与 Vue 扩展组件库',
  lang: 'zh-Hans',
  cleanUrls: true,
  lastUpdated: true,
  sitemap: { hostname: baseUrl },
  head,
  markdown,
  transformPageData,

  vue: {
    template: {
      compilerOptions: { isCustomElement: (tag) => tag === 'iconify-icon' }
    }
  },

  vite: {
    plugins: [
      groupIconVitePlugin({
        customIcon: {
          按需导入: 'logos:typescript-icon',
          全量导入: 'logos:typescript-icon',
          单独导入: 'logos:typescript-icon',
          默认: 'logos:vue',
          '自定义 2 列': 'logos:vue',
          '自定义 3 列': 'logos:vue',
          '.vitepress': 'https://vitepress.dev/vitepress-logo-mini.svg'
        }
      }),
      llmstxt({})
    ],
    build: {
      chunkSizeWarningLimit: 1000
    }
  },

  themeConfig: {
    // 站点标题
    siteTitle: `Lumen <code class="VPBadge tip">${Lumenversion}</code>`,

    // Logo
    logo: {
      src: 'https://i.theojs.cn/logo/Lumen-Logo-mini.webp',
      width: 24,
      height: 24,
      alt: 'Lumen Logo',
      loading: 'eager',
      fetchpriority: 'high'
    },

    // 修改链接
    editLink: { pattern: 'https://github.com/Theo-Messi/lumen/edit/main/docs/:path', text: '为此页提供修改建议' },

    // 目录设置
    outline: 'deep', // 索引级别
    outlineTitle: '本页目录', // 目录文本

    // 上次更新
    lastUpdatedText: '最后更新于',

    // 文章翻页
    docFooter: { prev: '上一篇', next: '下一篇' },

    // 移动端 - 返回顶部
    returnToTopLabel: '返回顶部',

    // 移动端 - menu
    sidebarMenuLabel: '文章',

    // 主题模式切换
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '主题模式',

    // markdown 外部链接图标
    externalLinkIcon: true,

    // 语言切换
    langMenuLabel: '切换语言',

    nav,

    sidebar,

    socialLinks,
    search: { provider: 'algolia', options: search },
    notFound: {
      title: '找不到页面',
      quote: '页面不见了，也许它去找寻新的冒险了！',
      linkLabel: '返回首页重新探索',
      linkText: '返回首页',
      code: '404'
    }
  }
})
