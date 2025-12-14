# 修改游戏所需的端口号

::: info
**如果你没有在「中二节奏」和「舞萌 / 音击」之间来回切换游玩的需求，也没有其他特殊需求，可以直接忽略本节**
:::

::: warning
本文 **仅适用于使用 SEGA 官方串口协议连接的用户**。  
如果你按照下面的教程修改了配置文件，但之后要使用 `虚拟读卡（回车）` 或 `AimeIO`，  
请务必将配置文件还原为默认配置，否则将无法正常使用。
:::

## 简介

| 游戏 | 默认端口号 |
| :--: | :--: |
| maimai DX | COM1 |
| ONGEKI | COM1 |
| CHUNITHM | COM4 |

以上是「击中萌」三款游戏的默认端口号，但**并不是固定的**，用户可以通过修改配置文件来更改游戏所使用的读卡器端口号。

设想一个需求：  
你只有一台电脑和一台读卡器，但希望游玩多个 SEGA 音游。  
舞萌与音击因为默认端口号相同，通常只需设置一次即可。  
而中二节奏的端口号不同，因此就有了本节教程的必要。

目前大多数 SEGA 游戏都使用 `amdaemon`，读卡器相关设置由 `amdaemon` 统一管理。  
玩家可以通过修改传入 `amdaemon` 的配置文件，来更改游戏所需的读卡器端口号。

## 文件修改

### 文件介绍

以下是一个正常游戏目录中可能存在的 `amdaemon` 配置文件：

![amdcfg](assets/amdaemon_cfg.jpg)

- `config_client.json`、`config_server.json`  
  与配信服务器相关，本文可忽略
- `config_hook.json`  
  Segatools 自带，用于强制覆写部分设置
- `config_cvt.json`、`config_sp.json`  
  **CHUNITHM 专用配置文件**
- `config_common.json`  
  所有游戏通用的配置文件

通常情况下，读卡器端口号配置位于 `config_common.json`。  
但对于 **CHUNITHM**，需要根据启动时使用的框体不同，修改 `config_cvt.json` 或 `config_sp.json`。

### 修改方法

打开 `config_common.json` 或 `config_cvt.json / config_sp.json`，向下查找 `aime` 条目：

![amdcfg2](assets/amdaemon_cfg2.png)

其中：

```json
"port": 4
````

这里的 `4` 即为读卡器所使用的端口号（对应 COM4）。
你可以将其修改为 **其他未被官方设备占用的端口号**。

::: tip 什么是「官方使用的其他端口号」？

以 **CHUNITHM** 为例，SEGA 官方使用 `COM1` 连接 *Ground Slider*（地键触摸板），
因此在修改读卡器端口号时 **不能使用 COM1**。
:::
以下是常见游戏中 **官方占用但不可用于读卡器的端口号**：
|       游戏      | 占用端口号及用途                                                   |
| :-----------: | :--------------------------------------------------------- |
|   maimai DX   | COM2：VFD 屏幕<br>COM3 / COM4：1P / 2P 触摸屏<br>COM21 / COM23：灯板 |
|     ONGEKI    | COM2：VFD 屏幕<br>COM3：灯板                                     |
|  CHUNITHM（SP） | COM1：触摸板<br>COM2：VFD 屏幕<br>COM20 / COM21：灯板                |
| CHUNITHM（CVT） | COM1：触摸板<br>COM2 / COM3：灯板                                 |

以上端口号 **均不可用于读卡器端口**。

## 用例说明

需求：
我只有一台电脑和一台读卡器，但希望在 **中二节奏** 与 **舞萌** 之间来回切换游玩。

可以按以下步骤操作：

1. 编辑舞萌的 `config_common.json`，将读卡器端口号修改为 `COM7`
2. 编辑中二节奏的 `config_cvt.json` 或 `config_sp.json`，同样将读卡器端口号修改为 `COM7`
3. 打开 Windows 设备管理器，将读卡器的实际端口号也修改为 `COM7`，并重新插拔读卡器

完成后，即可在两个游戏之间切换，而无需反复更改读卡器端口号。
