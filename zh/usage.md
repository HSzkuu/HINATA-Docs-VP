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

::: warning ⚠️ HINATA Lite 部分卡片速度慢/不稳定/无法读取？
由于 HINATA Lite 使用现成射频模块，若遇到部分卡片速度慢/不稳定/无法读取，请尝试：
1. **不要紧贴**：部分卡片最佳读取位置在上方，建议**抬高几厘米**，或垫上合适厚度的非金属物品（最佳距离建议通过 [HINATA Go](go/index.md) 测试确定）。
2. **使用铜箔贴纸**：可在背面亮红光处贴一片铜箔贴纸（25年7月20日后发货已附赠），贴纸尺寸建议通过 [HINATA Go](go/index.md) 测试确定。
:::

## (可选) 为赠送的白卡写入 Aime 卡号

> [!NOTE]
> 此步骤仅适用于标准版附赠的空白卡。

白卡需要写入卡号后方可在 SEGA 游戏中使用。如果你已经拥有 `Aime` 卡、`Bandai Namco Passport` 卡、`BANA PASSPORT` 卡或 `Amusement IC`（四社通）卡片，并且不打算使用赠送的白卡，可以直接跳过该步骤。

写入方式请参考：[HINATA 控制中心 - 卡片读写](/hcc/index.md#卡片读写)。

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

