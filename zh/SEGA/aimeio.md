# AimeIO 方式连接游戏

* 标准版需求固件版本号 ≥ `2024083100` （2024 年 8 月 31 日后发货的可以直接用，2024 年 8 月 31 日前发货的需要更新固件
* Lite 版需求固件版本号 ≥ `2024090500`（2024 年 9 月 5 日后发货的可以直接用, 2024 年 9 月 5 日前发货的需要更新固件
* **部分新功能需要更新到 `2025040400` 及以上才可以使用**
* 访问 [HINATA 控制中心](https://cc.neri.moe) 可以检查当前的固件版本号，通常在发货时会刷入发货当天的最新版固件


## 食用须知
使用 **AimeIO** 时的好处：
* 支持游戏内热插拔读卡器
* 读卡速度相比串口协议会稍快
* 可以与回车刷卡共存
* 配置方便，不需要和 Windows 斗智斗勇来设置串口，插上之后配置游戏就能用
* 独家功能：**支持绕过服务器，直接读取 `Amusement IC` 卡片的正确卡号并传入游戏**。

**但是部分行为受 Segatools 限制无法正确实现：**
* 使用 `Amusement IC` 卡片时**无法登录 SEGA 官服**（SDGA，SDGS 等）  
本地服以及私服不受影响
* 目前无法读取非 `Amusement IC` 的 `Banapass` (卡上没有 aic 的标志，或者背面是英文或韩文或中文的)
* 少部分 Segatools 无法使用包括 `Amusement IC` 在内的所有 [Felica](https://zh.wikipedia.org/wiki/FeliCa) 卡片，或是实现不正确。如果您出现了刷 `Amusement IC`、`Hime` 等 Felica 卡片时在游戏中遇到了各种刷卡问题，请更换一份 Segatools，或者更换为**串口协议**连接

## 游戏配置
0. 如果你根据 [修改游戏所需的端口号](com_port.md) 修改过 amdaemon 的读卡器端口号，请先将修改的设置还原，否则以下设置将不工作
1. 首先请确保你的游戏是**已经联网**的，进入游戏后能够显示一个**绿色地球图标**，否则请先把游戏的联网设置好，不在本文讨论范围内
2. 把本文提供的 `hinata.dll` 放入游戏目录下（与 amdaemon.exe, inject.exe, segatools.ini 放一起）   
   * [点击下载(国际)](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll)
   * [点击下载(中国大陆)](https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll)

3. 打开 `segatools.ini`，并按照如下方式修改：

   ```ini
   ; 如果没有 [aime] 条目则请手动添加该条目和条目下内容
   [aime]
   ; enable=1 的用途是启用 Segatools 的读卡器 hook，也可以什么都不加，如果什么都不加的话默认是启用的
   enable=1

   ; 如果没有 [aimeio] 条目的话需要自己添加
   [aimeio]
   ; 指定 dll 路径
   path=hinata.dll
   ```

4. 若你想要修改默认设置，请在 `segatools.ini` 中的 `[aimeio]` 条目下添加以下设置，一下三条设置如果不添加的话则全部为默认值：

   ```ini
   ; 控制读卡器亮度（0 ~ 255，默认 128）
   brightness=128
   ; 和回车刷卡共存 (0 = 关，1 = 开，默认开)
   enableReturnKey=1
   ```

   如果你的固件版本号 ≥ `2025040400`，则可以继续添加：

   ```ini
   ; Amusement IC 卡号绕过 AimeDB 服务器，直接将卡号发送给服务器（0 = 关，1 = 开，默认开）
   aicBypassDB=1
   ```

5. 启动游戏，但如果你发现无论如何怎么配置都只有回车刷卡能用，而读卡器的灯光没任何反应，也无法刷卡的话，那就是你的 segatools 并不支持加载 aimeio ，请更换一份 Segatools (xxxhook.dll, inject.exe)
6. 部分 Segatools 无法使用包括 `Amusement IC` 在内的所有 [Felica](https://zh.wikipedia.org/wiki/FeliCa) 卡片，如果您出现了刷 `Amusement IC`、`Hime` 等 Felica 卡片时游戏中遇到了刷卡错误的情况，请更换一份 Segatools，或者更换为**串口协议**连接


## 其他页面
* [串口方式连接 SEGA 游戏](serial.md)
* [游戏内测试读卡器](in_game_test.md)
* [KONAMI 游戏设置](../KONAMI/index.md)