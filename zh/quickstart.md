# 快速开始 | 使用文档请务必仔细查看

## 开箱

### 标准版
标准版用户将收到以下物品：

- **HINATA × 1**
- USB Type-C 数据线 × 1
- Mifare Classic 1k（sak:0x08）空白卡片 × 1

### Lite 版
Lite 版用户将收到：

- **HINATA Lite × 1**

## 使用说明

::: tip 关于 HINATA Lite 天线性能的说明
HINATA Lite 采用现成的射频天线模块，在需要卡片紧贴读卡器的场景中，读取效果可能不够理想。

部分卡片的最佳读取位置并非完全贴紧读卡器，而是需要向上抬高几厘米。如果在扫描某些兼容卡时出现读卡不稳定的情况，建议先在 [HINATA 控制中心](HCC/index.md) 测试卡片读取稳定性，然后在游戏中尝试将卡片抬高几厘米，或使用厚度合适的非金属物品作为垫片。

此外，也可以在 HINATA Lite 背面红光区域贴一片铜箔贴纸，具体尺寸建议通过控制中心网页测试确定。

**2025 年 7 月 20 日之后发货的 HINATA Lite 将附赠一片尺寸合适的铜箔贴纸。**
:::

::: info 加入售后群 & 注意事项
售后群：  
[362419355](https://qm.qq.com/q/uKIsTeNXyw)

使用过程中遇到任何问题，均可在群内提问；在合适的时间我也可以提供远程协助。

收到读卡器后，建议先检查固件版本并更新至最新版，详见：  
[固件更新](Update/index.md)
:::



### 1. 连接到电脑

使用 USB Type-C 数据线将 HINATA 与电脑相连。

- **HINATA**：通电后亮起黄色灯光，与电脑 USB 握手成功后会渐变为蓝色  
- **HINATA Lite**：通电后背面红灯常亮，属于正常现象

![connection](</assets/connection.jpg>)

连接成功后，在 Windows 的 **设备管理器** 中应能看到 HINATA 设备：

![devmgr0](<assets/devmgr0.png>)
![devmgr1](<assets/devmgr1.png>)

### 2. 为赠送的卡片写入 Aime 卡号

此步骤仅适用于标准版附赠的空白卡。

白卡需要写入卡号后方可在 SEGA 游戏中使用。如果你已经拥有 `Aime` 卡、`Bandai Namco Passport` 卡、`BANA PASSPORT` 卡或 `Amusement IC`（四社通）卡片，并且不打算使用赠送的白卡，可以直接跳过该步骤。

写入方式请参考：

- [卡片读写](HCC/index.md#卡片读写)

### 3. 开始配置游戏

::: tip
SEGA 游戏与 KONAMI 游戏的配置可以共存。在调整 KONAMI 游戏配置时，无需在意 SEGA 游戏的端口号设置，读卡器状态会自动切换。
:::

- [SEGA 游戏](SEGA/index.md)
- [KONAMI 游戏](KONAMI/index.md)
