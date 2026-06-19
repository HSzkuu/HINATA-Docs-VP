# 使用 HINATA Client 配置 SEGA 游戏（推荐）

## 下载 HINATA Client

<Links
  :items="[
    {
      name: 'HINATA Client',
      link: 'https://gh-proxy.org/https://github.com/nerimoe/hinata_client-pub/raw/refs/tags/stable/release.zip',
      linkText: '立即下载'
    }
  ]"
/>

## 开始使用

解压后应存在以下文件：

![hinata-client-files](assets/hinata-client-files.png)

双击 `hinata_client.exe` 打开 HINATA Clients

## 配置游戏

1. 根据提示拖拽文件夹或手动选择文件夹，此文件夹内需包含 `segatools.ini`

   一般情况下：中二节奏为 `bin` 文件夹，舞萌为 `Package` 或 `AMDaemon` 文件夹

   ![hinata-client-folders-select](assets/hinata-client-folders-select.png)

2. 根据提示选择工作模式，选中对应模式后会有优缺点说明与 [可选的高级设置](advanced.md)。
   
   如果没有特殊需求请选择 `AimeIO 方式`，可以确保你的连接稳定性
   
   使用 `AimeIO 方式`时如果你使用的不是 `fufubot_segatools`，请勾选 `部署受支持的segatools`，否则无法扫描 `旧版Banapass`以及`Hikari IC`在内的，卡号以`3`开头的 Banapass 兼容卡

   ![hinata-client-mode-select](assets/hinata-client-mode-select.png)

3. 点击```应用更改```按钮即设置完成，可以开始使用读卡器了
