# AimeIO 扩展功能

::: warning
请勿随意添加使用扩展功能，请务必确认自己需要使用该扩展功能再添加
:::

::: tip
请将添加的功能同样放到 `[aimeio]` 条目下
:::

## 远程刷卡功能
首先在 `[aimeio]` 条目下添加：
```ini
; 远程卡号刷卡功能，替换 REPLACEME 为你喜欢的字符串
; 例：wss://aime-ws.neri.moe/cerisebouquet
; 不添加这一条也可以正常使用
serverUrl=wss://aime-ws.neri.moe/REPLACEME
```
随后可访问 [aime-portal.neri.moe](https://aime-portal.neri.moe) 输入卡号远程刷卡。

![aime-portal](</assets/aime-portal.png>)

将 **URL** 栏中后面的 `ReplaceME` 修改为你在 `segatools.ini` 里替换 `REPLACEME` 的字符串，例：`https://aime-ws.neri.moe/cerisebouquet`  
随后可填写 20 位 Access Code 到下方，点击 `Send` 按钮即可远程刷卡。

## 挂载其他 AimeIO 同时使用

可在使用 HINATA 时同时使用部分手台自带读卡器或其他使用 AimeIO 的读卡器 / 服务。

```ini
; 挂载其他 AimeIO 同时使用，如 amnet、mageki、yubideck（大四）
; 请在有需求时添加使用
; 使用 '|' 作为分隔符可同时挂载多个 dll
dllMux=MU3Input.dll|amnet.dll
```
