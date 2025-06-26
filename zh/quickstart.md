# 快速开始

## 开箱
默认情况下标准版用户可以收到：
* **HINATA** * 1
* USB Type-C 数据线 * 1
* Mifare Classic 1k sak:0x08 空白卡片 * 1

Lite 版用户可以收到：
* **HINATA Lite** * 1

## 应该做什么
### 0. 加入售后群 & 一些备注
加入售后群：[362419355](https://qm.qq.com/q/uKIsTeNXyw)

有任何问题都可以在群里提问，我也可以在合适的时间提供远程操作支持

收到读卡器后可以先检查固件版本并将固件更新至最新版 见 [固件更新](Update/index.md)

由于 HINATA Lite 使用现成的射频天线模块，可能会与当前紧贴卡片的使用场景不太匹配，部分卡片的最佳读取位置并不是最紧贴读卡器的时候，而要稍微向上抬高几厘米，如果您遇到了扫描部分兼容卡时非常不稳定的问题，请先进入 [HINATA 控制中心](HCC/index.md) 测试卡片读取稳定性，然后适当的在游戏中刷卡时抬高几厘米或找个厚度合适的非金属物品垫起来。或者您可以使用铜箔贴纸，在 HINATA Lite 背后亮红光的地方贴一片，具体大小建议在网页中测试得到。

### 1. 连接到电脑
使用 USB Type-C 数据线将 HINATA 与电脑相连  
HINATA 通电时会亮起黄色灯光，与电脑 USB 握手成功后会渐变为蓝色  
HINATA Lite 通电时背面会有常亮的红色灯光，请不要在意

![connection](</assets/connection.jpg>)

此时在 Windows 的 ```设备管理器``` 中应该可以看到 HINATA 设备

![devmgr0](<assets/devmgr0.png>)

![devmgr1](<assets/devmgr1.png>)


### 2. 为赠送的卡片写入 Aime 卡号
仅标准版赠送卡片  
白卡需要写入卡号后方可在 SEGA 游戏中使用  
如果你有自己的 `Aime` 卡片，`Banapass` 卡片或 `Amusement IC`（四社通）卡片，并且不想使用赠送的白卡，可以**跳过**该步骤

写入方式请见：
* [卡片读写 (旧) (固件版本 <= 2024093002)](HCP/index.md#卡片读写)
* [卡片读写 (新) (固件版本 >= 2025052106)](HCC/index.md#卡片读写)

### 3. 开始配置游戏
SEGA 游戏的配置与 KONAMI 游戏的配置可以共存  
（在调整 KONAMI 游戏的配置时不需要在意 SEGA 游戏端口号配置与否，读卡器状态会自动切换）
* [SEGA 游戏](SEGA/index.md)
* [KONAMI 游戏](KONAMI/index.md)

