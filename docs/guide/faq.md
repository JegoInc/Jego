---
title: 常见问题 - 使用指南
description: 你一定有概率遇到问题，不要慌可以通过下面的常见问题和解决办法一一排查并解决掉。
---

# 常见问题

### **问题1：手机订阅支持解锁ChatGPT和New Bing吗？**

所有线路都支持解锁ChatGPT APP以及网页版。

### 问题2：打不开New Bing或者ChatGPT的网站了

请**优化本地网络和浏览器的环境**， 按照下面的步骤处理一下，<span style="background-color:red; color:white; padding:2px 6px; border-radius:3px;">每一步都很重要</span>：

1. **网络环境**
   1. 把路由器和本机的DNS改成阿里公共DNS: [alidns.com](http://alidns.com/) （[查看DNS设置帮助](https://www.alidns.com/knowledge?type=SETTING_DOCS#user_windows)）
      * 按设置帮助在DNS服务器地址中输入`223.5.5.5` 和 `223.6.6.6`。
      * 关闭IPV6。
   2. 清理DNS缓存：
      * 点击`开始`->`运行`，输入`CMD`进入命令行模式。
      * 在命令行里输入`ipconfig/flushdns`按回车。
   3. 关闭本地其他代理软件，如网易UU、讯飞游戏加速器、V2rayN、Clash等软件干扰
   4. 打开 `系统设置`->`网络和Internet`->`代理` ，设置：
      * 自动检测设置：关闭
      * 使用设置脚本：关闭
      * 使用代理服务器：关闭
2. **浏览器环境**
   1. 升级浏览器至最新版本，清除所有Cookies和缓存并重启浏览器
   2. 升级无忧行至[最新版本](/guide/keep-updated)，并只保留无忧行暂时禁用其他浏览器插件
   3. 将无忧行设置为规则模式（免费为开启）
   4. 重启浏览器
3. **再次访问**
   * 最好去无痕模式下开启无忧行注册一个境外的微软账户。
   * 然后开启New Bing、Copilot或者ChatGPT

> 能访问New Bing或者ChatGPT之后，就可以尝试逐个开启其他插件或者软件了，目的是排查插件之间的相互影响。

### **问题3：重定向次数过多。**

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FF6dZ9YLI7YU5b3kOalpA_2Fimage_1.png" alt="Bing.com 重定向次数过多">

**解决办法：**删除 **无忧行** 的 **控制面板 - 代理策略** 里`openai.com`和`bing.com`的访问策略，关掉浏览器、再次打开浏览器、点开无忧行，然后再次尝试访问`bing.com`

### <span style="color:red;">**问题4：为什么没有New Bing？**</span>

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FPrqRnEhRBtThiFNriRYY_2Fimage_2.png" alt="国内版、国际版">

如上图所示一旦出现`国内版`和`国际版`，就代表了你的Bing的账户所在国家为<span style="color:red;">`中国`</span>。

::: danger 中国没有New Bing
:::

#### 解决方案

1、在Edge的隐私模式下开启无忧行

2、点击Bing右上角的三个横杠，点击`Country/Region`

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F4X4pVnYK2KWM6XiyHkP6_2Fimage_3.png" alt="Country/Region">

3、把国家按照下列方式更改：

* 请将国家改为<span style="color:blue;">`United States`</span>

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FQFg8JMkptC2tNNiLnUk0_2Fimage_1.png" alt="更改国家设置">

4、然后回到Edge的普通模式，访问New Bing，大功告成：

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FlTK7Ld57wxLmFhBvHDz3_2Fimage_2.png" alt="New Bing">

#### 演示视频

下方mp4文件是 `cn.bing.com` 切换至`new bing`的演示视频：

<video src="/Jego/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHdfcY8pUhEOe7afX3nGk_2F20230528-141341_1.mp4" controls></video>

::: warning 还是无效？
<span style="color:orange;">**还是无效？**</span>

<span style="color:orange;">可以继续尝试使用下方无忧行提供的额外4个拓展解决方案继续尝试解决。</span>
:::

### **问题5：默认搜索引擎是大陆的必应怎么办？**

#### 重新配置Edge的默认搜索引擎

在Edge的地址栏内输入`edge://settings/searchEngines` ，点击右上角的`添加/Add`按钮。

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F0WsYu8S2aed4NEWVLscQ_2Fimage_3.png" alt="三个空格">

```sh
#Search engine
Bing
#Shortcut
bing.com
#URL with %s in place of query
{bing:baseURL}search?q=%s&{bing:cvid}{bing:msb}{google:assistedQueryStats}
```

添加完成后，点击右侧三个点将其设为默认即可。

### **问题5之拓展解决方案1：最好把微软账户也改个国家**。

1. 访问微软账户设置页 [https://account.microsoft.com/profile](https://account.microsoft.com/profile)
2. 修改`Country or region`和`Phone number`

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F2urY4db1qFvocDlTtgNj_2Fimage_1.png" alt="微软账户设置">

* Contry or region改成 <span style="color:blue;">`United States`</span>

手机号码最好不要用中国大陆的。

### **问题5之拓展解决方案2：最好把Windows的设置也改掉**

1、Windows -> 设置 -> 时间和语言 -> 语言和区域

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F9NPKEgiCoLEpqb6WCQMb_2Fimage_2.png" alt="国家或地区：法国">

* 国家或地区改成  <span style="color:blue;">`United States`</span>

2、Windows -> 设置 -> 隐私和安全性 -> 位置

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzQJALXbqHJDo0am5sbx0_2Fimage_3.png" alt="定位服务：关">

* 定位服务设置为关

### 问题5之拓展解决方案3：更换ISP

如果您在尝试完上述所有办法均无法解决，无忧行也深表抱歉，没能给您带来最佳的体验。由于中国大陆各个地区的网络防火墙的复杂程度不太一样，所以我们还可以更换一个网络环境或者网络供应商(ISP)继续尝试，无忧行深知这个执行性难度较高，但是我们提供一个思路仅供参考：

* <span style="color:blue;">Wifi换成有线、有线换成Wifi</span>
* <span style="color:blue;">禁止Wifi和有线，使用手机热点</span>
* <span style="color:blue;">在办公室网络环境和家里网络环境切换尝试</span>
* <span style="color:blue;">在自己和同事、同学、朋友的之间的网络环境切换尝试</span>

<span style="color:blue;">大体思路就是电信不行就换联通，联通不行就换移动…</span>

以上各解决方案是无忧行团队和用户反复尝试后得到的经验，希望能对您有所帮助。

### **问题6：Bing提示：**你已达到今天的对话限制。 登录以继续你的聊天。

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FR5N7binyonxvysAkUl5m_2Fimage_1.png" alt="You've reached the conversation limit for today. Sign in to continue your chat.">

看到这个提示的时候本质上是你账户的问题，无论你怎么找无忧行沟通技术细节，更换更多服务器节点或者按照上述方法换国家和地区**都没用**了。

**解决方法：**

请使用无忧行的解锁流程，<span style="color:red;">重新注册</span>一个全新的Bing的账户即可。

### 问题7：如何开启隐私模式？

1、在Edge浏览器地址栏内输入 `edge://extensions/`，打开扩展管理界面，找到无忧行点击详细信息

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FzX0shn8SkzNDitbuWyLk_2Fimage_2.png" alt="扩展管理界面">

2、选中在InPrivate中允许

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FNzcdN0zHPrnfQfxvzine_2Fimage_3.png" alt="InPrivate设置">

3、点击Edge浏览器右上角三个点，在下拉菜单中选中新建InPrivate窗口

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FHV0QVHMxq4rRJPSEghvH_2Fimage_1.png" alt="新建InPrivate窗口">

4、大功告成

<img src="/Jego/images/image_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2FmSgH7un2lH6oQ2I02okf_2Fimage_2.png" alt="隐私模式成功">

### 问题8：建议关闭防火墙

无忧行会采用特殊端口进行流量的封装、加密和解密，在使用无忧行时建议关闭或者降低网络防火墙的安全等级。

Windows：若要打开或关闭 Microsoft Defender 防火墙，请执行以下操作：

1. 选择"开始"，然后打开"设置"。 在"隐私和安全" 下面，选择"Windows 安全" >"防火墙和网络保护"。 打开 Windows 安全中心设置
2. 选择网络配置文件：域网络、专用网络 或 公用网络。
3. 请将设置切换为"关闭"。

Mac：若要打开或关闭 Mac 防火墙，请执行以下操作：

1. 请选取苹果菜单 ![苹果菜单](/Jego/images/image_2f77cc85238452e25cb517130188bf99_2.png) >"系统设置"，在边栏中点按"网络" ![网络](/Jego/images/image_8cfb53953fdf6e7e49ac94510557df95_3.png)，然后点按右侧的"防火墙"。
2. 请将设置为关闭状态。

### 问题9：如何通过Edge无痕模式测试New Bing是否解锁成功？

如果遇到聊天窗口消失的情况，可以通过如下方式测试：

1. 暂时关闭其他浏览器插件、只保留无忧行，并允许无忧行可以在无痕模式下使用
2. 将无忧行设置为规则模式
3. 关闭本地其他代理软件，如网易UU、讯飞游戏加速器、Clash等软件干扰
4. 打开Edge的无痕模式，输入bing.com。
5. 如果发现有聊天入口，就代表无忧行的new bing解锁成功了。
6. 回到普通版的Edge如果没有聊天窗口，请清除所有Cookies和缓存，重启Edge再次访问sg.bing.com，看下有没有聊天窗口。
7. 如果未登录的时候有，登录后没有，请在无痕模式下开启无忧行重新注册个新的new bing账户。
8. 不要频繁更换代理软件或者同一个账户一会儿访问国内的必应，一会儿访问海外的new bing

<video src="/Jego/videos/video_spaces_2FtaiByLw8cj0IZKJTlaiM_2Fuploads_2F5kaw1En36b4S8wPLm3ok_2F20230927-110903_2.mp4" controls></video>

无痕模式测试演示视频

