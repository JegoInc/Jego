import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "无忧行 - 使用指南",
  description: "无忧行是最好用的免费代理工具，专为Edge和Chrome浏览器设计",
  
  // 使用自定义域名时设置为根路径
  base: '/',
  
  // 启用简洁URL，移除.html后缀
  cleanUrls: true,
  
  // 配置favicon和PWA
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-chrome-192x192.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '512x512', href: '/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'msapplication-TileColor', content: '#ffffff' }],
    ['meta', { name: 'msapplication-config', content: '/browserconfig.xml' }]
  ],
  
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/icon48.png',
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/' },
      { text: '浏览器翻墙教程', link: '/guide/usage' },
      { text: '电脑和手机翻墙教程', link: '/devices/pc-mobile' },
      { text: '升级会员', link: '/membership/benefits' },
      { text: '使用准则', link: '/abuse/fair-use' }
    ],

    sidebar: [
      {
        text: '使用教程',
        items: [
          { text: '📗如何安装', link: '/guide/installation' },
          { text: '👶如何注册', link: '/guide/registration' },
          { text: '🔮如何翻墙', link: '/guide/usage' },
          { text: '🤖如何解锁New Bing、Copilot或者ChatGPT', link: '/guide/chatgpt-access' },
          { text: '🟢服务详解', link: '/guide/services' },
          { text: '🌐节点选择', link: '/guide/node-selection' },
          { text: '📋节点介绍', link: '/guide/nodes' },
          { text: '☑️模式选择', link: '/guide/mode-selection' },
          { text: '🔀代理策略', link: '/guide/proxy-strategy' },
          { text: '🆕防止失联', link: '/guide/keep-updated' },
          { text: '🙋联系客服', link: '/guide/support' },
          { text: '❓常见问题', link: '/guide/faq' }
        ]
      },
      {
        text: '升级会员',
        items: [
          { text: '🏆会员体系', link: '/membership/benefits' },
          { text: '💳如何支付', link: '/membership/payment' }
        ]
      },
      {
        text: '订阅服务',
        items: [
          { text: '在电脑或手机上如何翻墙', link: '/devices/pc-mobile' },
          { text: '安卓手机怎么翻墙', link: '/devices/android' },
          { text: '苹果手机/iPad 怎么翻墙', link: '/devices/ios' },
          { text: '华为鸿蒙手机怎么翻墙', link: '/devices/harmony' },
          { text: 'Windows 电脑怎么翻墙', link: '/devices/windows' },
          { text: '苹果Mac电脑怎么翻墙', link: '/devices/mac' },
          { text: 'Linux 电脑怎么翻墙', link: '/devices/linux' }
        ]
      },
      {
        text: '工具软件',
        items: [
          { text: 'Mihomo系列软件', link: '/tool/mihomo' },
          { text: 'sing-box', link: '/tool/sing-box' },
          { text: 'FlClash', link: '/tool/flclash' },
          { text: 'sing-box for Android', link: '/tool/sing-boxforandroid' },
          { text: 'sing-box for Apple', link: '/tool/sing-boxforapple' },
          { text: 'GUI.for.SingBox', link: '/tool/guiforsing-box' },
          { text: 'Shadowrocket', link: '/tool/shadowrocket' },
          { text: 'Surfboard', link: '/tool/surfboard' },
          { text: 'v2rayN', link: '/tool/v2rayn' },
          { text: 'v2rayNG', link: '/tool/v2rayng' },
          { text: 'OneClick', link: '/tool/oneclick' },
          { text: 'Surge', link: '/tool/surge' },
          { text: 'Quantumult X', link: '/tool/quantumult-x' },
          { text: 'Loon', link: '/tool/loon' },
          { text: 'ClashBox', link: '/tool/clashbox' },
          { text: 'Clash for Windows', link: '/tool/clash-for-windows' },
          { text: 'Clash for Android', link: '/tool/clash-for-android' }
        ]
      },
      {
        text: '使用准则',
        items: [
          { text: '❤️公平使用', link: '/abuse/fair-use' },
          { text: '⏳流量限制', link: '/abuse/limits' }
        ]
      }
    ],

    socialLinks: [
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16"><path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/></svg>'
        },
        link: 'https://www.jegovpn.com',
        ariaLabel: 'cool link'
      }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-2025 JegoVPN'
    }
  }
})
