# HINATA Client 高级设置

## AimeIO 模式下的高级设置

![aimeio-advanced](<assets/aimeio-advanced.png>)

### 远程刷卡服务器地址（serverUrl）

用于启用 **远程刷卡功能**。

#### 远程刷卡功能是什么？

当没有读卡器或没有实体 Aime / BANA PASSPORT / Amusement IC 卡片的情况下，设置此项可以实现只使用卡号刷卡，适合没有读卡器或他人忘带卡需登录账号的情况。

#### 如何使用

1. 在 **远程刷卡服务器地址 (serverUrl)** 输入：

```
wss://aime-ws.neri.moe/REPLACEME
```

2. 将 `REPLACEME` 修改为你喜欢的字符串，例如：

```
wss://aime-ws.neri.moe/cerisebouquet
```

3. 点击 **应用更改**

配置完成后，可以访问：

[https://aime-portal.neri.moe](https://aime-portal.neri.moe)

![aime-portal](</assets/aime-portal.png>)

将 URL 中的 ReplaceME 修改为与配置中相同的字符串，例如：

```
https://aime-ws.neri.moe/cerisebouquet
```

然后输入 **20 位 Access Code** 并点击 **Send** 即可远程刷卡。

### 第三方 AimeIO DLL 挂载（dllMux）

如果需要同时使用 **部分手台自带读卡器或其他使用 AimeIO 的读卡器 / 服务**，可以在这里添加 DLL。

操作方法：

1. 点击 **添加 DLL**
2. 选择需要加载的 DLL 文件

例如可以挂载：

* `MU3Input.dll`
* `amnet.dll`
* `mageki.dll`
* `yubideck.dll`

添加后 HINATA 会在运行时 **同时加载这些 AimeIO 设备**。


## COM 串口模式下的高级设置

![serial-advanced](<assets/serial-advanced.png>)

### 指定游戏 COM 端口

用于指定 **游戏使用的读卡器端口号**。

如果你需要在多个 SEGA 音游之间切换游玩（如 **maimai DX / ONGEKI / CHUNITHM**），
可以在此处手动指定游戏识别的 COM 端口，例如：`COM7`

点击 **应用更改** 后，游戏将通过该端口与读卡器通信。

::: tip
建议使用未被官方设备占用的端口，例如 `COM5` ~ `COM9`。
:::

