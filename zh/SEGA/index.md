# SEGA 游戏配置说明

**HINATA** 以及 **HINATA Lite** 支持通过两种方式连接游戏：
* [SEGA 官方串口协议](serial.md)
* [AimeIO（基于 Segatools）](aimeio.md)

两种方式之间请优先使用 **SEGA 官方串口协议**

请先自备**能正常联网**的游戏

## 两种方式的差异：

使用 **SEGA 官方串口协议** 时所有行为逻辑与官方读卡器一致

使用 **AimeIO** 时支持游戏内热插拔读卡器，读卡速度相比串口协议会稍快，但是部分行为受 Segatools 限制无法正确实现：

* 使用 `Amusement IC` 卡片时**无法登录 SEGA 官服**（SDGA，SDGS 等）<br>本地服以及私服不受影响
* 目前无法读取卡号**非 510 开头**的版本的 `Banapass` ：
  * 日本发行的旧版（非 `Amusement IC` 版本的）
  * 在海外发行的所有版本，包括国行
* 部分 Segatools 无法使用包括 `Amusement IC` 在内的所有 [Felica](https://zh.wikipedia.org/wiki/FeliCa) 卡片，如果发生了请更换一份 Segatools
