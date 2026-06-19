# 使用 HINATA

HINATA 有多种使用方式，不单单是游戏读卡器

## 连接读卡器

使用数据线将 HINATA 连接到 Windows、MacOS、Android 或 Linux 等多种系统的设备

![connection](</assets/connection.jpg>)

![scan-card-by-hinata](go/features/assets/scan-card-by-hinata.png)

## (重要) 测试读卡器

为了之后的使用，请**务必**在正式使用之前**先测试一下读卡器**

1. 打开 [HINATA Go](go/index.md)
2. 在 HINATA Go 中连接好读卡器，并刷卡以查看设备是否异常
3. 如未出现异常，我们的使用就可以开始了
4. 如果你使用 `HINATA Lite` ，请看下面的特别说明

::: tip 关于 HINATA Lite 天线方面的说明
由于 HINATA Lite 使用现成的射频天线模块，在部分需要卡片紧贴读卡器的使用场景中，可能无法获得最佳读取效果。

部分卡片的最佳读取位置并不是完全贴紧读卡器，而是需要向上抬高几厘米。如果在扫描部分兼容卡时出现读卡不稳定的问题，建议先进入 [HINATA Go](go/index.md) 测试卡片读取稳定性，再在游戏中尝试将卡片抬高几厘米，或使用厚度合适的非金属物品作为垫片。

此外，也可以在 HINATA Lite 背面亮红光的位置贴一片铜箔贴纸，具体尺寸建议通过 HINATA Go 网页版测试确定。

**2025 年 7 月 20 日之后发货的 HINATA Lite 将附赠一片尺寸合适的铜箔贴纸。**
:::

## 使用方式

<HCard title="🕹️ 将 HINATA 连接到游戏" link="game-setting/" cols="1">
  可以将 HINATA 连接到 SEGA、KONAMI 或 Bandai Namco 等厂家的街机游戏呢
</HCard>

<HCard title="⭕ 连接到 Kanade DX" link="kdx" cols="2">
  可以在 Kanade DX 上连接 HINATA 当读卡器用了
</HCard>
<HCard title="🛠️ 当作普通 PN532 使用" link="integration/pn532/" cols="2">
  HINATA 也可以直接当普通 PN532 使用第三方上位机
</HCard>

