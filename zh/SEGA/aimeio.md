# AimeIO 方式连接游戏

::: warning
- 需求固件版本号 >= `2025052500`，建议更新到最新版固件1️以获得最佳效果
:::

## 食用须知

使用 **AimeIO** 的优点：
- 支持游戏内热插拔读卡器
- 读卡速度相比串口协议略快
- 可与回车刷卡共存
- 配置简单，不需要折腾 Windows 串口设置
- 独家功能：**支持绕过服务器，直接读取 `Amusement IC` 的正确卡号并传入游戏**

::: warning
以下行为受 Segatools 限制，无法正确实现：
- 使用 `Amusement IC` 卡片时 **无法登录 SEGA 官服**（SDGA、SDGS 等）  
  本地服与私服不受影响
- 无法读取非 `Amusement IC` 的 `Bandai Namco Passport` 或 `BANA PASSPORT`：
  - 卡上没有 Amusement IC 标志
  - 卡号为 **3 开头的 20 位数字**
  - 卡背为英文 / 韩文 / 中文
- 少部分 Segatools 对 Felica 支持不完整  
  若刷 `Hime` 等 **非** `Amusement IC` 的 Felica 卡片时出现异常：
  - 请更换 Segatools  
  - 或改用 **串口协议**
:::

## 游戏配置

::: warning
- 如果你曾根据「修改游戏所需的端口号（com_port.md）」修改过 AMDaemon 的读卡器端口号  
  请先还原该设置，否则以下配置将无法工作
- 游戏必须已成功联网  
  进入游戏后应显示 **绿色地球图标**  
  联网问题不在本文讨论范围内
:::

### 1. 放置文件

将本文提供的 `hinata.dll` 放入游戏目录  
（与 `amdaemon.exe`、`inject.exe`、`segatools.ini` 位于同一目录）

- [点击下载(国际)](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll)
- [点击下载(中国大陆)](https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll)

### 2. 修改 segatools.ini

```ini
; 如果没有 [aime] 条目请手动添加
[aime]
; enable=1 用于启用 Segatools 的读卡器 hook
; 不写默认也是启用
enable=1

; 如果没有 [aimeio] 条目请手动添加
[aimeio]
; 指定 dll 路径
path=hinata.dll

; 灯光亮度 可选值为 0~255,默认为 255
; 不添加这一条也可以正常使用
brightness=255
````

### 3. 启动并确认

::: tip
如果出现以下情况：

* 只有回车刷卡可用
* 读卡器无灯光、无法刷卡

说明当前 Segatools **不支持 AimeIO**  
请更换支持的 Segatools，或改用 **串口协议**
:::

## 其他页面 
* [串口方式连接 SEGA 游戏](serial.md) 
* [游戏内测试读卡器](in_game_test.md) 
* [KONAMI 游戏设置](../KONAMI/index.md)
