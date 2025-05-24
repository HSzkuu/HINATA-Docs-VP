# HINATA 控制中心（旧）
简称 **HCP**，请与 [**HCC** (HINATA Control Center)](/HCC/) 分辨清楚

**该功能仅限标准版使用**，如果你使用 2025040400 及以上固件，请移步上面，旧控制中心将逐步弃用

## 简介
HINATA 控制中心用于控制 HINATA 的各项设置以及写卡用，调整的设置不会存储在 HINATA 内，HINATA 断电不会保存设置。但是控制中心会保存设置，HINATA 重连回控制中心后会自动同步回上次设置。

以后会重构控制中心以及让读卡器可以持久化设置。
  
[点我下载 HINATA 控制中心](https://github.com/nerimoe/HINATA-release/releases/download/HINATA-2024090300/HINATA-Control-Panel-2024050400.7z)  
（中国大陆用户如果下载比较慢的话可以在售后群群文件下载）


![hcp0](assets/hcp0.png)


## 主页开关
1. PN532 直通模式，开启后可以将串口直通为 PN532 设备，在第三方的 NFC 工具中使用（默认关闭）   
   当**固件版本号 ≥ `2025040400` 时**，PN532 直通将变为全自动
   第三方工具推荐：[Mifare One Tool](https://github.com/xcicode/MifareOneTool)，[NFCToolsGUI](https://github.com/GSWXXN/NFCToolsGUI)
2. 深色主题与亮色主题切换，在右上角
3. 底部的滑块用于调整 SEGA 串口模式时的亮度（AimeIO 方式下亮度可以在 `segatools.ini` 内调整），旁边的按钮进入设置闲置时灯光的页面
4. **控制中心内暂未实现固件更新，目前那个按钮没啥用，请使用该文档内的方法更新**


## 卡片读写
**如果你的固件版本号 ≥ `2025040400`，请移步这里: [使用HINATACC读写卡片](../HCC/index.md#卡片读写)**

![hcp1](assets/hcp1.png)

* 该页面用于读取卡片信息和把[兼容的卡片](https://s.taobao.com/search?commend=all&ie=utf8&initiative_id=tbindexz_20170306&page=1&q=m1%E7%99%BD%E5%8D%A1&search_type=item&sourceId=tb.index)写入为Aime卡
* 当放置了[兼容的卡片](https://s.taobao.com/search?commend=all&ie=utf8&initiative_id=tbindexz_20170306&page=1&q=m1%E7%99%BD%E5%8D%A1&search_type=item&sourceId=tb.index) (Mifare Classic 1k) 并且该卡可写入时可以自动弹出写入框和写入按钮，可以写入 20 位 `Access Code` 用于 SEGA 游戏或开启了 `Access Code` 读取功能的 CardIO
* 赠送的白色卡片也从这里写卡
* **请不要在游戏中开启卡片读写页面**，否则会导致与游戏通讯出现问题


## CardIO 设置

1. CardIO 是用于 **KONAMI 游戏** 以及 **太鼓之达人** 的，如果只玩 SEGA 游戏的话下面可以忽略
2. UID 开关：开启 / 关闭 对于 M1 卡 UID 读取的支持（默认开启）
3. Access Code 开关： 开启 / 关闭 对于旧版 Aime 卡或旧版 Aime 兼容卡的 20 位卡号读取的支持（默认关闭）

### CardIO 额外说明

CardIO 兼容的游戏（KONAMI 游戏和太鼓达人）接收一个 8 字节的 16 进制数据，并且第一个字符必须为 0

一张普通的 `Mifare Classic 1K`（M1）卡的 UID 有 4 个字节

* 开启 UID 读取后，读取 M1 卡时会将 CardIO 数据的前四字节填入 M1 卡的 UID，并且第一位会被修改为 0，后面四字节全部填 0
    
    例如：卡片的 UID 为 `11:45:14:19` 那么发送进游戏的数据将是 `01:45:14:19:00:00:00:00`
    
* Access Code 开关在开启后，读取到 旧版 **Aime** 时，会将 20 位的 Access Code 转换为 8 字节的 16 进制数据。
  例如：一张卡片的卡号是 `1145 1419 1981 0114 5141`，当刷卡后，读卡器将会把它转换为 `0e:eb:9d:16:a4:e8:46:35` 后发给游戏
    
* 由于 旧版 Aime 卡 是 M1 卡片，在有 `Access Code` 卡号的同时也有 UID 所以：
    * 当 关闭 Access Code 开关，但开启 UID 开关 时，会把卡片当作 普通 M1 卡 处理，将 UID 发送给游戏
    * 当 开启 Access Code 开关，但关闭 UID 开关 时，将只会接受 旧版 Aime 卡，而不会接受普通的非 Aime 的 M1 卡片，并将 Access Code 转换为 16 进制发送给游戏
    * 当两个开关 同时开启 时，刷卡时如果刷到 旧版 Aime 卡 时，会将 Access Code 发送给游戏，如果发现卡片并非 Aime 卡，而是 普通 M1 卡片，则会将 UID 发送给游戏
    * 当两个开关 同时关闭 时，将不接受任何 旧版 Aime 卡 和 普通 M1 卡片 ，只接受 Felica 卡片
* **Felica** 卡片（**Amusement IC**，**Suica** 等）在任何时候都可以刷，不受这两个开关控制
* **氧无面板** 在绑定卡号时会过滤卡号，卡号**非 01:2e 开头**的通常会被拒绝绑定