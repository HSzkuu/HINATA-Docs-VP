# 卡片信息查看

## 支持的卡片类型

### 交通卡
* [**日本交通系卡片 (Suica, PASMO 等)**](#suica-pasmo-等)：查看卡片余额、最近 20 条交易记录（包括交易类型、日期、金额、以及基于内置数据库解析的乘降车站名称）。
* [**交通联合 (China T-Union)**](#交通联合-china-t-union)：查看卡号、余额及最近 10 条刷卡记录。

### 街机游戏卡
* [**Amusement IC**](#amusement-ic)：Access Code, Konami 游戏内卡号，生产厂商等
* [**旧式 Aime 或兼容卡**](#旧式-aime-或兼容卡)：Access Code, 游戏内合法性等
* [**旧式 Banapass 或兼容卡**](#旧式-banapass-或兼容卡)：Access Code
* **旧式 E-Amusement Pass**：Konami 游戏内卡号

### 其他卡片
* **任意 FeliCa 卡片**：IDm, PMm, SystemCodes, Konami 游戏内卡号 等
* **任意 ISO15693 卡片**：Konami 游戏内卡号

## 如何读取

将卡片置于移动设备 NFC 识别区域，即可读取卡片信息，如：

![scan-card](assets/scan-card.png)

或连接 HINATA 读卡器进行识别，如：

![scan-card-by-hinata](assets/scan-card-by-hinata.png)

## 保存卡片

在刷卡后，往下滑有两个按钮，点击左边的保存按钮并自定义名称和文件夹即可保存

![save-send](assets/save-send.png)

![save-card](assets/save-card.jpg)


## 读取信息

### Suica / PASMO 等

读取日本交通系卡片时，可查看：
* 余额 (JPY)
* 历史交易流水：包括交易类型（乘车、消费、充值等）、交易日期、交易金额，并可依托内置的日本铁路车站数据库自动解析乘降车站名称。

### 交通联合 (China T-Union)

读取交通联合卡时，可查看：
* 卡号
* 余额 (CNY)
* 历史交易记录：展示最近的扣款与充值历史。

### Amusement IC

![card-info-aic](assets/card-info-aic.png)

### 旧式 Aime 或兼容卡

![card-info-m1aime](assets/card-info-m1aime.png)

### 旧式 Banapass 或兼容卡

![card-info-bana](assets/card-info-bana.png)
