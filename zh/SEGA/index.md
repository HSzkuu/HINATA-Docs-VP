# SEGA 游戏配置说明

**HINATA** 以及 **HINATA Lite** 支持通过两种方式连接游戏，请二选一：
* [SEGA 官方串口协议](serial.md)
* [AimeIO（基于 Segatools）](aimeio.md)

两种方式之间各有优劣，目前( 2025040400 版本的固件) 我更推荐使用 **AimeIO**

请先自备**能正常联网**的游戏

## 两种方式的差异：

### SEGA官方串口协议
使用 **SEGA 官方串口协议** 时所有行为逻辑与官方读卡器一致

### AimeIO
使用 **AimeIO** 时支持游戏内热插拔读卡器，读卡速度相比串口协议会稍快，并且 **配置方便，不需要和 Windows 斗智斗勇来设置串口，插上之后配置游戏就能用**，支持绕过服务器，**直接读取 `Amusement IC` 卡片的正确卡号**。但是部分行为受 Segatools 限制无法正确实现：

* 使用 `Amusement IC` 卡片时**无法登录 SEGA 官服**（SDGA，SDGS 等）  
本地服以及私服不受影响
* 目前无法读取非 `Amusement IC` 的 `Banapass` (卡上没有 aic 的标志，或者背面是英文或韩文或日文的)
* 少部分 Segatools 无法使用包括 `Amusement IC` 在内的所有 [Felica](https://zh.wikipedia.org/wiki/FeliCa) 卡片，或是实现不正确。如果您出现了刷 `Amusement IC`、`Hime` 等 Felica 卡片时在游戏中遇到了各种刷卡问题，请更换一份 Segatools，或者更换为**串口协议**连接
