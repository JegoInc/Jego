---
title: Clash for Windows - Tools & Software
description: This is a tutorial for the Clash for Windows client. Clash for Windows was discontinued on November 2, 2023, but the last version at that time can still be used.
---

# Clash for Windows

This is a tutorial for the Clash for Windows client. Clash for Windows was discontinued on November 2, 2023, but the last version at that time can still be used.

::: danger Not Recommended
This software has not been updated for several years. Jego does not recommend continued use.

Please use [Jego's recommended clients](/en/devices/pc-mobile#_1-about-which-client-to-use)
:::

::: danger Discontinued
Clash for Windows was discontinued on November 2, 2023.
:::

::: info Alternative
You can visit the [Mihomo Series Software](/en/tool/mihomo) page to get the latest software.
:::

## <img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4VjXObRb6A8YcNiBGA9e_2Fclash_2.png" width="26" height="26" alt="Clash icon"> Get Clash for Windows

You can download the backup files of the last version from here: [https://archive.org/download/clash_for_windows_pkg](https://archive.org/download/clash_for_windows_pkg)

For Windows OS, please download the <span style="color:blue;">`Clash.for.Windows-[version]-win.7z`</span> compressed package and use [7-zip](https://www.7-zip.org/) to extract it.

For macOS, please download the <span style="color:blue;">`Clash.for.Windows-[version]-mac.7z`</span> compressed package and use [7-zip](https://www.7-zip.org/) to extract it.

## Add Clash Configuration Subscription

### **Add Subscription:**

In the **Jego - Control Panel**, click on **Subscription Nodes** in the left navigation bar, find the **Clash/Mihomo Series** subscription address and click **Copy**.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FZi4WzVyeec9wgY50xRLc_2Fimage_2.png" alt="Jego control panel">

<div class="tip custom-block" style="padding-top: 8px">

Jego subscription service mobile panel: <https://jego.us>

</div>

Open Clash for Windows, click on **Profiles** (Configuration Files) on the left side of the window.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FKUWlGIFpAyHjpFHOAhYE_2Fimage_3.png" alt="Profiles page">

At the top of the Profiles page, paste the **Clash configuration subscription link**, then click **Download** to download the configuration file.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FFXfU18yTGxoAoAIfYaGe_2Fimage_1.png" alt="Download configuration">

After successful download, Clash for Windows will automatically switch to the downloaded configuration file.

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FbOBW1Ud8wrXZ9pMWTw1x_2Fimage_2.png" alt="Configuration successful">

## Usage Instructions {#proxy-usage}

### General {#general}

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FN1xu9dCMCxl1cWQXK0Co_2Fimage_3.png" alt="General settings">

Under the General page, you can clearly understand the current configuration file settings, such as the regular http and socks5 proxy ports, etc., which is convenient for configuring proxies for certain applications separately.

#### Option Descriptions {#option-descriptions}

* Port: Mixed(Http+Socks) proxy port
* Allow LAN: Whether to allow LAN proxy
  * Network icon: Display network card information
* Log Level: Clash core log level
* IPV6: Whether to enable IPV6
* Home Directory: Clash configuration file directory (it is not recommended to modify the file content in this directory)
* GeoIP Database: GeoIP database update
* UWP Loopback: UWP application network restriction removal tool
* Service Mode: Virtual network card installation (TUN mode)
  * Globe icon: Display Service Mode online status
* TUN Mode: Whether to enable TUN mode
  * Settings icon: Open TUN mode settings panel
* TAP Device: Virtual network card installation (TAP mode)
* Mixin: Whether to enable Mixin mode
  * Settings icon: Launch editor to modify Mixin configuration
* System Proxy: System proxy switch
* Start with Windows/macOS/Linux: Auto-start switch

#### Click Behaviors {#click-behaviors}

* Clash for Windows (title): Quick restart software
* v x.x.x: When "new" prompt is displayed, you can directly click to download the new version installation package (check for updates every 6 hours)
* Connected/Disconnected: Display current log file in folder

#### Right-side Corresponding Click Behaviors {#right-side-click-behaviors}

* Port:
  * Terminal icon: Use command line to set system proxy
  * Loop icon: Randomly set Mixed port
  * Port number: Modify Mixed Port
* Log Level: Set log type
* IPv6: Set whether to enable IPv6 connection logic
* Clash Core
  * Shield icon: Add firewall rules for Allow LAN and System Stack
  * Core version number: Open Clash core control web page
* UWP Loopback: Quick open loopback proxy limiter
* Home Directory: Quick open configuration file directory
* GeoIP Database: Click to update GeoIP library (macOS available)
* TAP Device: Open TAP mode virtual network card control panel (Windows available)

### Proxies {#proxies}

<img src="/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F0ItaMGtYXVi98CkgiosU_2Fimage_1.png" alt="Proxies page">

The main function of the Proxies page is to **switch proxy modes** and **switch nodes**

#### Switch Proxy Mode {#switch-proxy-mode}

Clash has three working modes:

* Global: All requests are sent directly to the **proxy server**
* Rule: All requests are **routed according to configuration file rules**
* Direct: All requests are **sent directly to the destination**

When switching different modes, the corresponding node list will change accordingly

#### Switch Nodes {#switch-nodes}

::: tip Latency Test
Latency test (network icon) can test the latency of all nodes. You can modify the test URL in Settings→Latency Test URL

Nodes are separated by policy groups and can be tested for latency by group, making it easy to select nodes with lower latency.
:::

## Common Issues {#qa}

### **Precautions for First Running Clash**

1. It is recommended ⛔ to exit security software such as xx Guardian, xx Manager, firewall, etc., to avoid preventing the software from running normally.
2. Must extract before running, cannot run directly in the compressed package.
3. After running, the Clash icon "cat" will be displayed in the taskbar at the bottom of the screen.
   * If you can't see the Clash icon, it may be hidden. Click to show hidden icons.
   * Double-click the taskbar Clash icon to display the software main interface.

### Get Subscription Address

1. Be sure to 🚫 **disable web translation function**, otherwise the obtained subscription address may be incorrect.
2. In the **Jego - Control Panel**, click on **Mobile Subscription** in the left navigation bar, find the **Clash for Windows** subscription address and click **Copy**.

### **What to do if subscription download or update fails**

The following 3 reasons are most common, check in the following order:

1. **🐷 Wrong subscription address**
   * Make sure the subscription address is copied from the **Jego - Control Panel**.
2. **📶 Network reasons**
   * Try changing networks, such as: your own or friend's mobile hotspot, home, company, neighbor's WIFI, etc.
   * Try turning off Clash > General > System Proxy.
   * Try exiting other VPN or proxy software.
   * Try restarting computer, modem, router.
   * Try turning off firewall.

## Set Proxy Mode

Go to the "Proxies" interface and select the proxy mode according to your needs:

### **Global Connection | Global: Proxy all traffic**

* Suitable for users who do not rely on domestic services.
* Very effective for foreign traffic, domestic traffic will be slowed down.
* In this mode 🈲 **cannot select DIRECT and REJECT nodes**, they will cause inability to access the internet.

### **Rule Judgment | Rules: Only proxy foreign traffic**

Suitable for users who use both domestic and foreign services.

* Domestic traffic will not consume package data.
* When querying IP on domestic websites, you get the local IP address.
* When querying IP on foreign websites, you get the proxy IP address.

Traffic routing rules cannot be comprehensive and have timeliness. If you encounter the following situations, try global proxy.

* Unable to open international websites;
* Slow loading of international websites;
* Unable to unlock Netflix / Spotify and other region-restricted content.

### **Direct Connection | Direct: Do not proxy any traffic**

Choosing this mode will result in inability to bypass restrictions, with the same effect as turning off VPN.

### **Script Mode | Script: Flexibly customize rules**

Official manual: [https://lancellc.gitbook.io/clash/clash-config-file/script](https://lancellc.gitbook.io/clash/clash-config-file/script)

## Troubleshooting

### **I have selected an available node, but Chrome cannot access foreign websites. What should I do?**

There are 2 reasons:

* **1️⃣ Conflict with Jego extension**.

  1. Go to Chrome > Jego
  2. Switch Jego's mode to direct mode in the extension popup.

* **2️⃣ Insufficient permissions to follow system proxy.**
  1. Right-click on Chrome shortcut, select Properties.
  2. Add **one space** and **startup parameter** after the target: --proxy-server="http://127.0.0.1:7890"

### **What to do if 360 / QQ / Sogou and other domestic browsers cannot access foreign websites**

Do not use domestic browsers to access foreign websites to prevent leaking browser history.

For domestic browsers that cannot be used, we do not provide technical support.

### **What to do if LINE cannot connect to server**

LINE does not follow system proxy settings and needs to manually configure proxy in LINE's advanced settings:

1. Ensure the browser can normally access foreign websites.
2. ✅ Enable proxy server
3. Proxy server: **HTTP** or **SOCKS5**
4. Server: **127.0.0.1**:**7890** 