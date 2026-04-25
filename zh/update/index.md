# 固件更新

如果读卡器目前**使用正常且稳定**，并且你**对新功能没有需求**，可以选择不更新固件。  
但如果在使用过程中遇到异常、兼容性问题或已知 Bug，**更新固件通常可以解决部分问题**，因此仍然推荐在需要时进行更新。

## 使用 HINATA Go 进行更新

::: warning
**该更新方式仅支持以下条件：**
- 固件版本 **2025040400 及以上**
- 仅支持 **macOS / Linux / ChromeOS**
- Linux 需要 **提前配置 udev 规则**
:::

通过浏览器访问 HINATA Go 即可进行在线更新：

[使用 HINATA Go 进行更新](/configuration)

该方式无需下载额外工具，适合非 Windows 用户。

## 使用 HINATA Client 更新（Windows）

在 Windows 系统下，需要使用 **HINATA Client** 工具来更新固件。

### 下载 HINATA Client

<Links
  :items="[
    {
      name: 'HINATA Client',
      link: 'https://gh-proxy.org/https://github.com/nerimoe/hinata_client-pub/raw/refs/tags/stable/release.zip',
      linkText: '立即下载'
    }
  ]"
/>

### 开始使用

解压后应存在以下文件：

![hinata-client-files](assets/hinata-client-files.png)

双击 `hinata_client.exe` 打开 HINATA Clients

### 固件更新

点击侧边栏固件更新，进入固件更新页面进行更新