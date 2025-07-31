---
title: 如何在电脑或手机上翻墙 - 设备支持
description: 无忧行的订阅节点服务（大陆用户通常称之为"机场"）与Windows PC、macOS、iOS、iPadOS和Android、乃至鸿蒙系统上的众多网络代理工具程序（大陆用户通常称之为"梯子"）兼容。只需简单学习，就能轻松让电脑和手机上的所有应用程序都能翻墙，随时畅享全球无限制网络资源。
---

# 如何在电脑或手机上翻墙

无忧行的订阅节点服务（大陆用户通常称之为"机场"）与Windows PC、macOS、iOS、iPadOS和Android、乃至鸿蒙系统上的众多网络代理工具程序（大陆用户通常称之为"梯子"）兼容。只需简单学习，就能轻松让电脑和手机上的所有应用程序都能翻墙，随时畅享全球无限制网络资源。

::: info 快速上手
为了让能您快速上手，我们提供了各种网络代理工具程序（大陆用户通常称之为"梯子"）的初级使用指南，请根据您的需求选择适合您的指南认真阅读。

如想深入研究还请自行在YouTube上搜索相关的视频教程。
:::

## <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtaiByLw8cj0IZKJTlaiM%2Fuploads%2F7Hh3XGbbAH0jtCKDKIF6%2Fandroid.svg?alt=media&token=86a25991-d085-47f1-870b-deb21b192155" width="38" height="28" alt="Android图标"> **Android 设备**

* [安卓手机怎么翻墙](/devices/android)

## <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtaiByLw8cj0IZKJTlaiM%2Fuploads%2F7GBp8VQdHNWWH3aalDTP%2Fios.svg?alt=media&token=84cac564-c6f6-4ed2-b209-35bd4d04c5d7" width="38" height="28" alt="iOS图标"> **iOS/iPadOS 设备**

* [苹果手机/iPad 怎么翻墙](/devices/ios)

## <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtaiByLw8cj0IZKJTlaiM%2Fuploads%2FbeA5N21M1iATQm5HiGND%2Fwin.svg?alt=media&token=1ea3ac37-8dec-4ad5-bf51-246b2b6c46b5" width="38" height="28" alt="Windows图标"> Windows PC **设备**

* [Windows 电脑怎么翻墙](/devices/windows)

## <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtaiByLw8cj0IZKJTlaiM%2Fuploads%2FrUGve1gm2gP1sXdvgjCw%2Fapple.svg?alt=media&token=e8226afc-af7d-4af0-8594-14f5c66a0885" width="38" height="28" alt="macOS图标"> **macOS 设备**

* [苹果Mac 电脑怎么翻墙](/devices/mac)

## <img src="https://files.gitbook.com/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtaiByLw8cj0IZKJTlaiM%2Fuploads%2FJJlooO6sJC8xrcR6vqGj%2Flinux.svg?alt=media&token=239191ef-7f4c-4274-a0d4-63b000e2cca0" width="38" height="28" alt="Linux图标"> Linux 设备

* [Linux 电脑怎么翻墙](/devices/linux)

## <img src="https://1663121531-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FtaiByLw8cj0IZKJTlaiM%2Fuploads%2FhUBqYs4CpmMcueAi690m%2FHMOS_Logo_Icon.svg?alt=media&token=ea81a99d-fd9e-49db-b1ab-ca51d6d6b83b" width="38" height="28" alt="HarmonyOS图标"> HarmonyOS (鸿蒙) 设备

* [华为鸿蒙手机怎么翻墙](/devices/harmony)

## 常见问题

### 1、关于应该使用什么客户端

::: info 免责声明
以下列表不代表无忧行团队的立场和观点。
:::

**推荐的**

* iOS iPadOS：[Surge](/tool/surge)、[sing-box](/tool/sing-boxforapple)、[Shadowrocket](/tool/shadowrocket)
* macOS：[Surge](/tool/surge)、[FlClash](/tool/flclash)、[ClashX.Meta](https://github.com/MetaCubeX/ClashX.Meta/releases)、[sing-box](/tool/sing-boxforapple)、[Shadowrocket](/tool/shadowrocket)
* Android：[FlClash](/tool/flclash)、[ClashMetaForAndroid](https://github.com/MetaCubeX/ClashMetaForAndroid/releases)、[sing-box](/tool/sing-boxforandroid)
* Windows：[FlClash](/tool/flclash)、[sing-box](/tool/guiforsing-box)

**不推荐的**

* Hiddify：假开源、违反上游协议
* Karing：sing-box 套皮广告软件、违反授权、假开源
* ClashMi：和Karing 是同一个作者，违反授权、假开源
* Clash Verge Rev v2.3 之前的版本，有高危提权漏洞
* Clash for Windows：删库、停更

### 2、这些软件里的系统代理和虚拟网卡/tun的区别

系统代理是Windows提供的代理接口，所有应用程序可以自愿遵守Windows代理规则也可以不遵守（浏览器都是遵守的，其他应用不好说）；

虚拟网卡/tun原理是代理软件内核新建了一个虚拟网卡，检查所有经过虚拟网卡的流量判断是否需要代理，这样的方式保证所有的请求都会经过代理软件来判断是否代理。

#### 结论：

想要电脑全局所有程序都翻墙，用虚拟网卡模式；\
想要浏览器翻墙，用系统代理模式。

<span style="color:green;">如果你的需求仅仅是在浏览器里实现翻墙，</span>[<span style="color:green;">无忧行浏览器插件才是最佳选择。</span>](/guide/usage)



