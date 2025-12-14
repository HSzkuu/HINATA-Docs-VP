# 固件更新

如果读卡器目前**使用正常且稳定**，并且你**对新功能没有需求**，可以选择不更新固件。  
但如果在使用过程中遇到异常、兼容性问题或已知 Bug，**更新固件通常可以解决部分问题**，因此仍然推荐在需要时进行更新。

## 使用 HINATA 控制中心进行更新

::: warning
**该更新方式仅支持以下条件：**
- 固件版本 **2025040400 及以上**
- 仅支持 **macOS / Linux / ChromeOS**
- Linux 需要 **提前配置 udev 规则**
:::

通过浏览器访问 HINATA 控制中心即可进行在线更新：

[使用 HINATA 控制中心进行更新](/HCC/#固件更新)

该方式无需下载额外工具，适合非 Windows 用户。

## 使用更新器更新（Windows）

在 Windows 系统下，需要使用 **HINATAUT** 工具来更新固件。

- **Windows 11**：可直接运行更新器
- **Windows 10**：可能需要先从 Microsoft Store 安装 Windows Terminal

::: warning
如果在 Windows 10 下直接运行无反应或闪退，请先安装  
[Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701)
:::

### 下载更新器

- [点击下载（国际）](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinataut-rs.exe)
- [点击下载（中国大陆）](https://gitee.com/nerimoe/hinata-pub/raw/master/hinataut-rs.exe)
