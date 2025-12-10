# Bandai Namco 游戏配置说明

* 所有(大概) Bandai Namco 游戏都可以使用 `Bandai Namco 读卡器原生协议`
* **太鼓之达人** 可以同时支持 `Bandai Namco 读卡器原生协议` 与 `CardIO`

## Bandai Namco 原生协议 (以太鼓之达人举例)
如果您的游戏使用了 `bnusio.dll`，那么需要在 `config.toml` 中进行设置。

1. 打开 `config.toml` ，找到 `card_reader` 参数，将后面改成 `false`
2. 参考 [读卡器端口配置](../SEGA/serial.md#读卡器端口配置) 将读卡器调整为 **COM1**，并建议重启电脑
3. 开始游戏吧


## CardIO 协议
只支持 太鼓之达人，仅限 HINATA 标准版和解锁后的 HINATA Lite
该模式下读取得出的卡号会和 `Bandai Namco 原生协议` 有所差别

1. 从这里下载 [cardio.dll](https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll)
2. 放入游戏目录内 `\Executable\Release\plugins` 文件夹
3. 开始游戏
