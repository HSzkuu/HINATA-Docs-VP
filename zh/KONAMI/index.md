# KONAMI 游戏配置说明
**该功能仅限标准版 | Lite版可以支付 CN¥49 解锁该功能**

## CardIO 读卡设置

1. 部分较旧的固件版本需要绑定 HID 灯光才能进行读卡
2. 打开 *spicecfg*，在顶部选择 **Advanced**（Spice 版本太旧的话在 **Options** 里，并且需要显示隐藏选项） ，找到 `CardIO HID Reader Support (-cardio)` 并勾选  
如图所示：
   
   ![spicecardio](/assets/spicecardio.png)

3. 如果勾选 `CardIO HID Reader Support (-cardio)` 后读卡器不工作（可能会出现在远古版本的 Spice 或非 Windows10 及以上的版本上）请尝试勾选 `HID SmartCard`，请确认不工作时再勾选，非必要情况请勿勾选
4. 如果发现刷卡的槽位不对（例如 IIDX 这种有 1P 和 2P 的游戏）  
请勾选下面的 `xxx Order Flip`

默认情况下 CardIO 偏向最高兼容性，能刷入的卡包括:

|                  卡类型                   | 能否刷卡 |
| :---------------------------------------: | :------: |
|           Amusement IC (四社通)           |    ✅     |
|              任何 ISO14443-A              |    ✅     |
| 任何 Felica 卡(Suica, AIC, Osaifu-Keitai) |    ✅     |
|               任何 Aime 卡                |    ✅     |
|           ISO15693 (旧版 epass)           |    ❌     |

可以在 [HINATA 控制中心](../HCP/index.md) 中控制可以读取的卡范围 （ISO14443A，Aime）


## HID 灯光绑定
当 SDVX 处于女武神框体模式 或 IIDX 处于雷霆框体模式时，游戏就会向读卡器输出灯光。以下是绑定方式：
1. 打开 *spicecfg* ，在顶部选择 **Lights**，找到 `IC Card Reader *`
2. 按下图方式绑定:
   
   ![spicelight](/assets/spicelight.png)

3. IIDX 之类的有 2P 位的游戏会分为 1P、2P 共六个通道，绑定你有玩的 P 位，或者使用两个读卡器的时候可以都绑定
4. 调整灯光亮度：在 *spicecfg* > **Advanced** > `Light Brightness Adjustment`内可以调整
![spicebrightness](/assets/spicebrightness.png)


## 其他页面
* [调整 CardIO 读卡限制](../HCP/index.md#cardio-设置)
* [SEGA 游戏设置](../SEGA/index.md)
