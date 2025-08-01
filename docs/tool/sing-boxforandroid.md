---
title: sing-box for Android - 工具软件
description: sing-box for Android 简称 SFA，SFA是sing-box官方推出的图形界面客户端，开源免费无广告。
---

# sing-box for Android

sing-box for Android 简称 SFA，SFA是sing-box官方推出的图形界面客户端，开源免费无广告。

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FX6LBfzRlMdWyQVvPC9eg_2Fimage_1.png" width="26" height="26" alt="sing-box图标"> 获取sing-box for Android

有Google Play的安卓用户可以通过Play进行安装sing-box for Android

* [Play Store](https://play.google.com/store/apps/details?id=io.nekohasekai.sfa)
* [Play Store (Beta)](https://play.google.com/apps/testing/io.nekohasekai.sfa)

没有Google Play的安卓用户可以通过Github下载后进行安装sing-box for Android

* [GitHub Releases](https://github.com/SagerNet/sing-box/releases)

额外科普一下：

* SFA是sing-box for Android的简称。

## 添加订阅

在**无忧行 - 控制面板**里点击左侧导航栏**订阅节点**  ，找到**Sing-Box**订阅地址并点击**复制**。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQ9Ncmw0YFCe4ziEMoSuw_2Fimage_3.png" alt="Sing-Box订阅地址">

## sing-box for Android 使用教程

### 添加订阅

打开sing-box客户端，进入`Profiles -> New Profile -> Create Manually`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FRsirhK17unPD2bwSZu8I_2FScreenshot_2025-07-30-08-16-51-152_io_nekohasekai_sfa_1.jpg" alt="创建配置1"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FdSI01lsngpzA8cjod7zZ_2FScreenshot_2025-07-30-08-17-06-236_io_nekohasekai_sfa_2.jpg" alt="创建配置2">

1. Name处填`Jego`
2. Type选`Remote`
3. URL黏贴从无忧行复制的`sing-box的订阅URL`
4. 其他不动，直接点击`Create`

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fsl4SHLXeYbC8vhLnqFNM_2FScreenshot_2025-07-30-08-17-51-367_io_nekohasekai_sfa_3.jpg" alt="配置设置">

### 开启sing-box

点击`Dashboard`，确保Profile选中刚才创建的Jego，然后点击右下角的 `▶` 按钮开启sing-box。

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FBQfwN7xlCao01P3bCfBM_2FScreenshot_20250728_173617_com_android_vpndialogs_1.jpg" alt="VPN权限"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2Fq5glu31ZimAgjcxXLi5E_2FScreenshot_20250728_173755_io_nekohasekai_sfa_2.jpg" alt="sing-box运行">

第一次启动还会提示要VPN权限，点确定即可。

#### Overview 标签：选择上网模式

`Rule` `Direct` `Global`

提醒：第一次使用可能三个模式都没选中，建议点一下Rule。

#### Groups 标签 ：更换节点服务器

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4cQ0AKNudR808MoJ1zOt_2FScreenshot_2025-07-30-08-18-21-604_io_nekohasekai_sfa_1.jpg" alt="节点选择1"> <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F8rR5ZcKgpR3OQPVHoAPx_2FScreenshot_2025-07-30-08-18-27-812_io_nekohasekai_sfa_2.jpg" alt="节点选择2">

默认是自动选择，我这里自动选择在`🇸🇬 直连｜新加坡四号`的服务器，点击`Auto Select` 就可以手动选其他服务器。

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

### ⚠️ 报"服务错误"，无法启动服务

启动时如果遇到下图这个错误：

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FI7tmp4qdI0FYxbbPmGdN_2F20250720133807_3.jpg" alt="服务错误">

```xml
(packet-tunnel) error: start service: initialize rule-set[2]: initial rule-set: geosite-geolocation-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-cn.srs": context deadline exceeded | initialize rule-set[2]: initial rule-set: geoip-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geoip/rule-set/geoip-cn.srs": initialize rule-set[2]: initial rule-set: geosite-geolocation-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-cn.srs": context deadline exceeded | initialize rule-set[2]: initial rule-set: geosite-geolocation-!cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-!cn.srs": initialize rule-set[2]: initial rule-set: geosite-geolocation-cn: Get "https://raw.githubusercontent.com/SagerNet/sing-geosite/rule-set/geosite-geolocation-cn.srs": context deadline exceeded
```

**🟡 问题原因：**这是因为你的网络环境无法访问 GitHub，导致无法加载规则文件。

✅ **解决方法：**请尝试切换网络，比如：

* 改用其他 Wi-Fi
* 切换为移动网络（如 4G/5G）
* 更换网络运营商（如从电信换联通、找朋友要热点）

**💡 注意：**只要成功加载一次规则文件，之后就不会再报这个错。
