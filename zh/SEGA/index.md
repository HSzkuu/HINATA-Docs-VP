# SEGA 游戏配置说明

**HINATA** 以及 **HINATA Lite** 支持通过两种方式连接游戏，请二选一：
* [SEGA 官方串口协议](serial.md)
* [AimeIO（基于 Segatools）](aimeio.md)

两种方式之间各有优劣，目前（2025040400 版本的固件）我更推荐使用 **AimeIO**

请先自备**能正常联网**的游戏

## 两种方式的差异：

### SEGA官方串口协议
使用 **SEGA 官方串口协议** 时所有行为逻辑与官方读卡器一致，但是：
::: warning
* 配置较为麻烦，要和 Windows 的玄学问题斗智斗勇
* 如果因为各种原因读卡器没有成功和游戏通信时游戏就会断网
* 许多服务器没有接入 SEGA 官方的 AimeDB ，会导致用户在使用串口协议并扫描 `Amusement IC` 卡片时会得到错误的卡号 (0008 开头)。如果你需要在扫描 `Amusement IC` 卡片时得到完全正确的卡号，请使用 **AimeIO** 方式来连接游戏，并确保**读卡器固件版本号 ≥ 2025040400**
:::

### AimeIO
使用 **AimeIO** 时的好处：
* 支持游戏内热插拔读卡器
* 读卡速度相比串口协议会稍快
* 可以与回车刷卡共存
* 配置方便，不需要和 Windows 斗智斗勇来设置串口，插上之后配置游戏就能用
* 独家功能：**支持绕过服务器，直接读取 `Amusement IC` 卡片的正确卡号并传入游戏**。
::: warning 但是部分行为受 Segatools 限制无法正确实现：
* 使用 `Amusement IC` 卡片时**无法登录 SEGA 官服**（SDGA，SDGS 等）  
本地服以及私服不受影响
* 目前无法读取非 `Amusement IC` 的 `Banapass`（卡上没有 Amusement IC 的标志，或者背面是英文或韩文或中文的）
* 少部分 Segatools 无法使用包括 `Amusement IC` 在内的所有 [Felica](https://zh.wikipedia.org/wiki/FeliCa) 卡片，或是实现不正确。如果您出现了刷 `Amusement IC`、`Hime` 等 Felica 卡片时在游戏中遇到了各种刷卡问题，请更换一份 Segatools，或者更换为**串口协议**连接
:::
