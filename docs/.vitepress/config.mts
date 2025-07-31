import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "无忧行 - 使用指南",
  description: "无忧行是最好用的免费代理工具，专为Edge和Chrome浏览器设计",
  
  // 使用自定义域名时设置为根路径
  base: '/',
  
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
      { text: '使用教程', link: '/guide/installation.html' },
      { text: '升级会员', link: '/membership/benefits.html' },
      { text: '全设备支持', link: '/devices/pc-mobile.html' },
      { text: '使用准则', link: '/abuse/fair-use.html' }
    ],

    sidebar: [
      {
        text: '使用教程',
        items: [
          { text: '📗如何安装', link: '/guide/installation.html' },
          { text: '👶如何注册', link: '/guide/registration.html' },
          { text: '🔮如何翻墙', link: '/guide/usage.html' },
          { text: '🤖如何解锁New Bing、Copilot或者ChatGPT', link: '/guide/chatgpt-access.html' },
          { text: '🟢服务详解', link: '/guide/services.html' },
          { text: '🌐节点选择', link: '/guide/node-selection.html' },
          { text: '📋节点介绍', link: '/guide/nodes.html' },
          { text: '☑️模式选择', link: '/guide/mode-selection.html' },
          { text: '🔀代理策略', link: '/guide/proxy-strategy.html' },
          { text: '🆕防止失联', link: '/guide/keep-updated.html' },
          { text: '🙋联系客服', link: '/guide/support.html' },
          { text: '❓常见问题', link: '/guide/faq.html' }
        ]
      },
      {
        text: '升级会员',
        items: [
          { text: '🏆会员体系', link: '/membership/benefits.html' },
          { text: '💳如何支付', link: '/membership/payment.html' }
        ]
      },
      {
        text: '订阅服务',
        items: [
          { text: '在电脑或手机上如何翻墙', link: '/devices/pc-mobile.html' },
          { text: '安卓手机怎么翻墙', link: '/devices/android.html' },
          { text: '苹果手机/iPad 怎么翻墙', link: '/devices/ios.html' },
          { text: '华为鸿蒙手机怎么翻墙', link: '/devices/harmony.html' },
          { text: 'Windows 电脑怎么翻墙', link: '/devices/windows.html' },
          { text: '苹果Mac电脑怎么翻墙', link: '/devices/mac.html' },
          { text: 'Linux 电脑怎么翻墙', link: '/devices/linux.html' }
        ]
      },
      {
        text: '工具软件',
        items: [
          { text: 'Mihomo系列软件', link: '/tool/mihomo.html' },
          { text: 'sing-box', link: '/tool/sing-box.html' },
          { text: 'FlClash', link: '/tool/flclash.html' },
          { text: 'sing-box for Android', link: '/tool/sing-boxforandroid.html' },
          { text: 'sing-box for Apple', link: '/tool/sing-boxforapple.html' },
          { text: 'Shadowrocket', link: '/tool/shadowrocket.html' },
          { text: 'Surfboard', link: '/tool/surfboard.html' },
          { text: 'v2rayN', link: '/tool/v2rayn.html' },
          { text: 'v2rayNG', link: '/tool/v2rayng.html' },
          { text: 'OneClick', link: '/tool/oneclick.html' },
          { text: 'Surge', link: '/tool/surge.html' },
          { text: 'Quantumult X', link: '/tool/quantumult-x.html' },
          { text: 'Loon', link: '/tool/loon.html' },
          { text: 'GUI.for.SingBox', link: '/tool/guiforsing-box.html' },
          { text: 'ClashBox', link: '/tool/clashbox.html' },
          { text: 'Clash for Windows', link: '/tool/clash-for-windows.html' },
          { text: 'Clash for Android', link: '/tool/clash-for-android.html' }
        ]
      },
      {
        text: '使用准则',
        items: [
          { text: '❤️公平使用', link: '/abuse/fair-use.html' },
          { text: '⏳流量限制', link: '/abuse/limits.html' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JegoInc/Jego' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2020-Present Jego'
    }
  }
})
