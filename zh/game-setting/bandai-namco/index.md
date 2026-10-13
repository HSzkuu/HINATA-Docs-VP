# Bandai Namco 游戏配置说明

::: tip
- 几乎所有 Bandai Namco 游戏都可以使用 **Bandai Namco 读卡器原生协议**
- **太鼓之达人** 同时支持 **Bandai Namco 读卡器原生协议** 与 **HINATA 插件（hinata.dll）**
:::

## Bandai Namco 原生协议（以《太鼓之达人》为例）

如果你的游戏目录中使用了 `bnusio.dll`，则需要通过 `config.toml` 进行配置。

1. 打开 `config.toml`，找到 `[emulation]` 下的 `card_reader` 参数，并将其修改为：

   ```toml
   card_reader = false
   ```

2. 参考
   [读卡器端口配置](../sega/manual/serial/index.md#读卡器端口配置)
   将读卡器的端口号调整为 **COM1**，并**建议重启电脑**以确保设置生效。

3. 启动游戏即可。

## HINATA 插件（太鼓之达人）

使用 TaikoArcadeLoader（TAL）加载 `hinata.dll`，通过 HINATA 读卡器读取真实 Access Code，也可以使用远程刷卡。此方式不需要设置 COM 端口，也不需要启用读卡器的 CardIO 功能。

::: warning

* 此插件配置**仅适用于使用 TAL 的《太鼓之达人》**，请使用支持读卡器插件接口的 TAL 版本，并将 HINATA 固件更新到最新版。
* 支持读取 Aime、Amusement IC 及受支持的 Banapass 兼容卡的真实 Access Code；普通 FeliCa 卡（非 Amusement IC）不能通过此接口刷卡。
* 旧版 `cardio.dll` 使用 UID 派生卡号，`hinata.dll` 使用真实 Access Code。更换后卡号可能不同，**不会自动迁移旧卡号对应的游戏存档**，请先确认服务器侧的账号绑定方式。
:::

### 1. 放置插件

下载最新版 **64 位** `hinata.dll`：

- [点击下载（国际）](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll)
- [点击下载（中国大陆）](https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll)

将文件放入 `\Executable\Release\plugins\hinata.dll`。如果此前安装过 `cardio.dll` 或其他读卡器插件，请先将旧插件移出 `plugins` 目录，避免同时处理刷卡。

### 2. 修改 TAL 配置

打开 `Taiko.exe` 所在目录的 `config.toml`，在已有的 `[emulation]` 条目下启用读卡器模拟：

```toml
[emulation]
card_reader = true
```

如果之前使用原生串口协议并设置了 `card_reader = false`，需要改回 `true`。国行版本使用二维码接口刷卡时，还需在同一 `[emulation]` 条目下设置 `qr = true`。配置项可参阅 [TAL 配置示例](https://github.com/esuo1198/TaikoArcadeLoader/blob/Refactor/dist/config.toml)。

### 3. 配置 hinata.ini

在 `Taiko.exe` 所在目录（`\Executable\Release`）创建 `hinata.ini`，**不要放在 `plugins` 目录中**：

```ini
[hinata]
; 日志等级，排查问题时可改为 debug
logLevel=info
; 读卡器灯光亮度，范围 0~255
brightness=255
; 自动更新 DLL，0 为关闭，1 为开启
autoUpdate=1
```

请从 `Taiko.exe` 所在目录启动游戏；插件按启动时的工作目录查找配置。`hinata.ini` 优先于 `SEGATOOLS_CONFIG_PATH` 环境变量指定的文件和 `segatools.ini`。配置兼容 `[aimeio]` 条目，但同名配置以 `[hinata]` 为准；无需添加 `path=hinata.dll`。

#### 可选：远程刷卡

在 `hinata.ini` 的同一 `[hinata]` 条目下添加：

```ini
; 将 REPLACEME 替换为自己的房间名
serverUrl=wss://aime-ws.neri.moe/REPLACEME
```

通过 [AimeIO Sender](https://aime-portal.neri.moe/) 连接同一房间并发送 20 位 Access Code，或使用 [HINATA Go](/go/) 发送卡片。需要加密远程通道时，可在 `[hinata]` 下添加 `remotePassword=你的密码`，发送端也必须使用相同密码。不使用远程刷卡时无需添加这些配置。

### 4. 启动游戏

连接读卡器并启动游戏，在游戏请求刷卡时刷卡即可。TAL 模式仅使用 HINATA 读卡器和远程刷卡后端，不读取 `aime.txt`、`felica.txt`，也不使用 `dllMux`。
