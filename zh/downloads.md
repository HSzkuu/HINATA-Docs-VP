# 下载中心

这里可以找到所有本使用文档内包含的下载链接及网页工具。

## HINATA Client

HINATA Client 是用于 Windows 的桌面工具，可以帮助你快速部署 HINATA AimeIO 或串口配置。详细用法请参阅[使用 HINATA Client 配置 SEGA 游戏](/game-setting/sega/hinata-client/)。

<Links
  :grid="2"
  :items="[
    {
      name: 'HINATA Client 中国大陆下载',
      link: 'https://gh-proxy.org/https://github.com/nerimoe/hinata_client-pub/releases/latest/download/hinata_client-win-setup.exe',
      linkText: '立即下载'
    },
    {
      name: 'HINATA Client 国际下载',
      link: 'https://github.com/nerimoe/hinata_client-pub/releases/latest/download/hinata_client-win-setup.exe',
      linkText: '立即下载'
    }
  ]"
/>

## HINATA Go

HINATA Go 是一款多平台 NFC 卡片工具，支持卡片信息查看、卡片管理、读卡器模式以及 HINATA 设备管理。详细功能请参阅[HINATA Go 使用说明](/go/)。

<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin: 16px 0;">
  <a href="https://apps.apple.com/app/id6760301105" target="_blank" rel="noopener noreferrer">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style="height: 40px;" class="no-zoom" />
  </a>
  <a href="https://github.com/nerimoe/hinata_go/releases" target="_blank" rel="noopener noreferrer">
    <img src="/assets/download-on-android.svg" alt="Download APK for Android" style="height: 40px;" class="no-zoom" />
  </a>
  <a href="https://go.neri.moe" target="_blank" rel="noopener noreferrer">
    <img src="/assets/open-on-web.svg" alt="Launch App on Web Browser" style="height: 40px;" class="no-zoom" />
  </a>
</div>

## SEGA 游戏使用的文件及链接

### AimeIO DLL

HINATA AimeIO DLL 用于让支持 Segatools 的 SEGA 游戏使用 HINATA 读卡器。详细配置请参阅[AimeIO 配置说明](/game-setting/sega/manual/aimeio/)。

<Links
  :grid="2"
  :items="[
    {
      name: 'hinata.dll 中国大陆下载',
      desc: 'HINATA AimeIO DLL',
      link: 'https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll',
      linkText: '立即下载'
    },
    {
      name: 'hinata.dll 国际下载',
      desc: 'HINATA AimeIO DLL',
      link: 'https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll',
      linkText: '立即下载'
    }
  ]"
/>

### 受支持的 Segatools（banafix）

如果你使用的不是 `fufubot_segatools`，可以从这里下载受支持的 Segatools，以支持读取部分 Banapass 兼容卡。具体使用方法请参阅[AimeIO 配置说明](/game-setting/sega/manual/aimeio/)。

<Links
  :items="[
    {
      name: 'Project-HINATA/segatools-banafix',
      link: 'https://github.com/Project-HINATA/segatools-banafix/releases',
      linkText: '打开 Releases'
    }
  ]"
/>

### 远程刷卡服务网页

AimeIO Sender 用于配合 AimeIO 扩展功能，通过网页输入 Access Code 实现远程刷卡。详细说明请参阅[AimeIO 扩展功能](/game-setting/sega/manual/aimeio/extension)。

<Links
  :items="[
    {
      name: 'AimeIO Sender',
      link: 'https://aime-portal.neri.moe/',
      linkText: '点击访问'
    }
  ]"
/>

## Bandai Namco 游戏使用的文件

### CardIO

`cardio.dll` 用于支持 CardIO 协议的 Bandai Namco 游戏环境，目前主要用于《太鼓之达人》。详细配置请参阅[Bandai Namco 游戏配置说明](/game-setting/bandai-namco/)。

<Links
  :items="[
    {
      name: 'cardio.dll',
      link: 'https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll',
      linkText: '立即下载'
    }
  ]"
/>

## libhinata-rs

libhinata-rs 是一个用于和 HINATA 以及 HINATA Lite 通信的 Rust 库。详细用法请参阅[libhinata-rs 使用说明](/integration/rustlib/)。

<Links
  :items="[
    {
      name: 'libhinata-rs Repository',
      link: 'https://github.com/nerimoe/hinata-rs',
      linkText: '点击访问'
    }
  ]"
/>
