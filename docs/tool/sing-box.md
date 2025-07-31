---
title: sing-box - 工具软件
description: sing-box 是一款全新的内核，几乎支持目前所有协议，还拥有全平台的代理工具客户端，包括 Windows、macOS、Android、iOS 和 Linux。
---

# sing-box

sing-box 是一款全新的内核，几乎支持目前所有协议，还拥有全平台的代理工具客户端，包括 Windows、macOS、Android、iOS 和 Linux。

### sing-box简介

* **丰富的协议支持**：sing-box支持众多协议，包括但不限于SOCKS、HTTP、Shadowsocks、VMess、Trojan、Wireguard、Hysteria、VLESS、ShadowTLS、TUIC、Hysteria2、AnyTLS、Tor、SSH等​​。
* **高度定制的路由功能**：sing-box允许用户根据需要设置复杂的路由规则，有效地管理网络流量。
* **适用于多种平台**：sing-box提供了对多个操作系统的支持，包括macOS、Windows、Linux、Android和iOS平台，这使得它能够满足不同用户的需求​​。
* **图形界面客户端**：为了方便用户操作，sing-box官方就提供了图形界面客户端，简化了配置和管理过程。

## <img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FX6LBfzRlMdWyQVvPC9eg_2Fimage_1.png" width="26" height="26" alt="sing-box图标"> 获取sing-box

### 苹果全家桶

macOS iOS iPadOS tvOS的用户请移步： [sing-box for Apple](/tool/sing-boxforapple)

### Andorid设备

安卓的用户请移步： [sing-box for Android](/tool/sing-boxforandroid)

### Windows

Windows的用户请移步： [GUI.for.SingBox](/tool/guiforsing-box)

### Linux

Linux的硬核玩家请移步sing-box官方的[Github Release](https://github.com/SagerNet/sing-box/releases)

## sing-box 常见问题

### 🚫 无法访问境外网站但可访问境内网站？

**🟡 情况一：刚启动时**

刚启动 sing-box 时，程序在处理境外域名解析前，会先对所有可用节点进行一次 URL 测速，目的是选出最快的节点来完成后续的 DNS 解析。因此，在测速完成前，可能暂时无法访问境外网站。

> ✅ 解决方法：如果不想等待测速过程，可以手动选择一个可用节点，这样就能立即访问境外网站。

**🟡 情况二：使用过程中出现相同问题**

如果在使用过程中也突然无法访问境外网站，很可能是当前所选节点不可用或连接质量差。

> ✅ 解决方法：请检查当前节点的连通性，必要时手动切换到一个稳定可用的节点，即可恢复访问。

---

**💡** 注意：此问题不会影响境内网站的访问，也不影响基于境外 IP 的服务（如 Telegram）的使用，只影响访问境外域名的网站。

