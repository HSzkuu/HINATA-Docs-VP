# SEGA 游戏配置说明

**HINATA** 与 **HINATA Lite** 支持通过以下两种方式连接 SEGA 游戏，请根据需求选择其中一种：

- [SEGA 官方串口协议](serial.md)
- [AimeIO（基于 Segatools）](aimeio.md)

两种方式各有优缺点。  
在当前 **2025040400 固件版本**下，更推荐使用 **SEGA 官方串口协议**。

在开始配置前，请确保你已准备好一套 **能够正常联网运行的游戏环境**。

## 两种方式的差异

### SEGA 官方串口协议

使用 **SEGA 官方串口协议** 时，读卡器的所有行为逻辑与官方设备保持一致。

但需要注意以下问题：

::: warning
- 配置过程相对复杂，往往需要处理 Windows 端的串口相关问题  
- 如果读卡器因任何原因未能成功与游戏通信，游戏会直接断开网络连接  
- 许多服务器未接入 SEGA 官方 AimeDB，在使用串口协议扫描 `Amusement IC` 卡片时，可能会获得错误的卡号（通常以 `0008` 开头）

如果你需要在扫描 `Amusement IC` 卡片时获得 **完全正确的卡号**，请改用 **AimeIO** 方式连接游戏，并确保 **读卡器固件版本 ≥ 2025040400**
:::

### AimeIO（基于 Segatools）

使用 **AimeIO** 方式连接游戏的优点包括：

- 支持在游戏运行中热插拔读卡器  
- 相比串口协议，读卡速度略快  
- 可与回车刷卡方式共存  
- 配置流程简单，无需处理 Windows 串口相关设置，连接后即可配置使用  
- 独家功能：  
  **支持绕过服务器，直接读取 `Amusement IC` 卡片的正确卡号并传入游戏**

但由于 Segatools 本身的限制，以下行为无法正确实现：

::: warning
- 使用 `Amusement IC` 卡片时，**无法登录 SEGA 官服**（如 SDGA、SDGS 等）  
  本地服与私服不受影响
- 目前无法读取 **非 `Amusement IC` 的 `Bandai Namco Passport`、`BANA PASSPORT` 卡片**，如何辨别：
  - 卡片上没有 Amusement IC 标志  
  - 卡号为 **3 开头的 20 位数字**  
  - 卡片背面为英文、韩文或中文
- 部分 Segatools 对包括 `Amusement IC` 在内的所有 [FeliCa](https://zh.wikipedia.org/wiki/FeliCa) 卡片支持不完整或实现存在问题  

如果在刷 `Amusement IC`、`Hime` 等 FeliCa 卡片时，游戏中出现各种异常读卡问题，建议更换一份 Segatools，或直接改用 **SEGA 官方串口协议** 连接
:::
