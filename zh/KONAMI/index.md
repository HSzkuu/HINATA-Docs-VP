# KONAMI 游戏配置说明

::: tip
- 该功能 **仅限标准版**
- Lite 版可支付 **CN¥49** 解锁该功能
:::

## CardIO 读卡设置

1. 部分较旧的固件版本需要先绑定 **HID 灯光** 才能进行读卡。

2. 打开 *spicecfg*，在顶部选择 **Advanced**  
   （如果 Spice 版本较旧，则在 **Options** 中，且需要显示隐藏选项”，  
   找到 `CardIO HID Reader Support (-cardio)` 并勾选，如下图所示：

   ![spicecardio](/assets/spicecardio.png)

3. 如果勾选 `CardIO HID Reader Support (-cardio)` 后读卡器不工作  
   （常见于较老版本的 Spice，或非 Windows 10 及以上系统），  
   请**再尝试**勾选 `HID SmartCard`。  
   请确认确实无法工作后再勾选，**非必要情况下请勿勾选**。

4. 如果发现刷卡槽位不正确（例如 IIDX 这种存在 1P / 2P 的游戏），  
   请勾选下方的 `xxx Order Flip` 选项进行调整。

默认情况下，CardIO 以**最高兼容性**模式运行，可刷入的卡片类型如下：

| 卡类型 | 能否刷卡 |
| :--: | :--: |
| Amusement IC（四社通） | ✅ |
| 任意 ISO14443-A | ✅ |
| 任意 Felica 卡（Suica / AIC / Osaifu-Keitai） | ✅ |
| 任意 Aime 卡 | ✅ |
| ISO15693（旧版 e-amusement pass） | ❌ |

可在 [HINATA 控制中心](../HCC/index.md) 中进一步控制可读取的卡片范围  
（如 ISO14443-A、Aime）。

## HID 灯光绑定

当以下情况成立时，游戏会向读卡器输出灯光信号：

- SDVX 处于 **女武神框体模式**
- IIDX 处于 **雷霆框体模式**

绑定方法如下：

1. 打开 *spicecfg*，在顶部选择 **Lights**，找到 `IC Card Reader *`
2. 按照下图所示方式进行绑定：

   ![spicelight](/assets/spicelight.png)

3. 对于 IIDX 等存在 2P 位的游戏，会分为 **1P / 2P 共六个通道**。  
   请选择自己游玩的 P 位进行绑定；  
   若使用两个读卡器，也可以全部绑定。

4. 调整灯光亮度：  
   在 *spicecfg* → **Advanced** → `Light Brightness Adjustment` 中进行调整。

   ![spicebrightness](/assets/spicebrightness.png)

## 其他页面
- [调整 CardIO 读卡限制](../HCC/index.md)
- [SEGA 游戏设置](../SEGA/index.md)
