# HINATA Go 
## HINATA Go 是什么？

HINATA Go 是一款多平台的 NFC 卡片工具，支持卡片信息查看与读卡器模拟，主要功能包括：
* **卡片信息查看**：使用设备内置 NFC 或外接 HINATA 读卡器扫描卡片，查看交通卡（日本交通系、国内交通联合）的余额、历史记录，或获取各类街机游戏卡片的 Access Code 与卡片数据。
* **读卡器模式**：配置并选择游戏实例后，刷卡可自动将卡号发送至当前选中的实例，支持 SEGA 游戏（AimeIO）和 Konami 游戏（SpiceAPI）等。
* **卡片管理**：提供本地卡包与文件夹管理功能，支持卡片保存、刷卡历史追溯以及数据的导入与导出。
* **外接读卡器管理**：连接实体 HINATA 读卡器后，可进行硬件设置修改及固件 OTA 升级： [管理 HINATA 读卡器](/configuration)

## 开源地址
<Links
  :items="[
    {
      name: 'Github',
      link: 'https://github.com/Project-HINATA/hinata_go',
      linkText: 'Project-HINATA/hinata_go'
    }
  ]"
/>

## 下载与访问

<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin: 16px 0;">
  <a href="https://apps.apple.com/app/id6760301105" target="_blank" rel="noopener noreferrer">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style="height: 40px;" />
  </a>
  <a href="https://github.com/nerimoe/hinata_go/releases" target="_blank" rel="noopener noreferrer">
    <img src="/assets/download-on-android.svg" alt="Download APK for Android" style="height: 40px;" />
  </a>
  <a href="https://go.neri.moe" target="_blank" rel="noopener noreferrer">
    <img src="/assets/open-on-web.svg" alt="Launch App on Web Browser" style="height: 40px;" />
  </a>
</div>


## 界面

![hinata-go-ui](assets/ui.jpg)

如图所示，当我们安装完成后打开应用应是这样的 UI 界面

## 功能

<Links
  :items="[
    {
      name: '卡片信息查看',
      link: 'features/read-card-info',
    }
  ]"
/>
<Links
  :items="[
    {
      name: '读卡器模式',
      link: 'features/game-connection',
    }
  ]"
/>
<Links
  :items="[
    {
      name: '管理 HINATA 读卡器',
      link: '/configuration',
    }
  ]"
/>
<Links
  :items="[
    {
      name: '卡片管理',
      link: 'features/cards',
    }
  ]"
/>
