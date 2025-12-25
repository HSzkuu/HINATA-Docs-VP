# Bandai Namco 游戏配置说明

::: info
- 几乎所有 Bandai Namco 游戏都可以使用 **Bandai Namco 读卡器原生协议**
- **太鼓之达人** 同时支持 **Bandai Namco 读卡器原生协议** 与 **CardIO**
:::

## Bandai Namco 原生协议（以《太鼓之达人》为例）

如果你的游戏目录中使用了 `bnusio.dll`，则需要通过 `config.toml` 进行配置。

1. 打开 `config.toml`，找到 `[emulation]` 下的 `card_reader` 参数，并将其修改为：

   ```toml
   card_reader = false
   ```

2. 参考 [读卡器端口配置](../SEGA/serial.md#读卡器端口配置) 将读卡器的端口号调整为 **COM1**，并**建议重启电脑**以确保设置生效。

3. 启动游戏即可。

## CardIO 协议

::: warning
* **仅支持《太鼓之达人》**
* 仅限 **HINATA 标准版** 以及 **已解锁功能的 HINATA Lite**
* 该模式下读取到的卡号与 **Bandai Namco 原生协议** 获取的卡号存在差异
:::

1. 从以下链接下载 `cardio.dll`：  
   [https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll](https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll)

2. 将下载的 `cardio.dll` 放入游戏目录中的：  
   `\Executable\Release\plugins`

3. 启动游戏即可。
