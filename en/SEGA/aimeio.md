# AimeIO Method for Connecting Games

::: tip
There are still some bugs. If you encounter issues, you can temporarily use the **Serial Protocol**
:::

::: warning
- Standard edition requires firmware version ≥ `2024083100`  
  (Units shipped after August 31, 2024 can use directly; earlier units need updates)
- Lite edition requires firmware version ≥ `2024090500`  
  (Units shipped after September 5, 2024 can use directly; earlier units need updates)
- **Some new features require firmware ≥ `2025040400`**
- You can access https://cc.neri.moe to check current firmware version  
  (Usually flashed with the latest version on the day of shipment)
:::

## Usage Instructions

Advantages of using **AimeIO**:
- Supports hot-plugging the reader during gameplay
- Slightly faster reading speed compared to serial protocol
- Can coexist with Enter key swiping
- Simple configuration, no need to handle Windows serial settings
- Exclusive feature: **Supports bypassing the server and directly reading the correct card number of `Amusement IC` cards and passing it to the game**

::: warning
The following behaviors cannot be correctly implemented due to Segatools limitations:
- When using `Amusement IC` cards, **cannot log into SEGA official servers** (SDGA, SDGS, etc.)  
  Local servers and private servers are not affected
- Cannot read non-`Amusement IC` `Bandai Namco Passport` or `BANA PASSPORT` cards:
  - Cards do not have Amusement IC logo
  - Card numbers are **20-digit numbers starting with 3**
  - Card backs are in English, Korean, or Chinese
- Some Segatools have incomplete support for FeliCa cards  
  If you encounter various abnormal reading issues when swiping `Amusement IC`, `Hime`, or other FeliCa cards:
  - Please replace the Segatools  
  - Or switch to **Serial Protocol**
:::

## Game Configuration

::: warning
- If you have previously modified the reader port number in AMDaemon according to "Modify Game Port Number (com_port.md)", please restore it first, otherwise the following configuration will not work
- The game must be successfully connected to the network. After entering the game, it should display a **green globe icon**. Network connection issues are not discussed in this article
:::

### 1. Place Files

Place the `hinata.dll` provided in this article into the game directory (in the same directory as `amdaemon.exe`, `inject.exe`, `segatools.ini`)

- [Download (International)](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll)
- [Download (Mainland China)](https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll)

### 2. Modify segatools.ini

```ini
; If there is no [aime] section, please add it manually
[aime]
; enable=1 is used to enable Segatools' reader hook
; Default is enabled if not written
enable=1

; If there is no [aimeio] section, please add it manually
[aimeio]
; Specify dll path
path=hinata.dll
```

### 3. Optional Configuration (Not Required)

If not added, all will be default values:

```ini
; Reader brightness (0 ~ 255, default 128)
brightness=128

; Whether to allow coexistence with Enter key swiping (0 = off, 1 = on, default on)
enableReturnKey=1
```

For firmware version ≥ `2025040400`, you can additionally add:

```ini
; Amusement IC card number bypasses AimeDB and is directly passed to the server
; 0 = off, 1 = on (default on)
aicBypassDB=1
```

### 4. Start and Confirm

::: tip
If the following occurs:
* Only Enter key swiping works
* Reader has no lights, cannot swipe cards

This means the current Segatools **does not support AimeIO**, please replace with a supported Segatools, or switch to **Serial Protocol**
:::

## Other Pages 
* [Serial Method for Connecting SEGA Games](serial.md) 
* [Test Reader in Game](in_game_test.md) 
* [KONAMI Game Settings](../KONAMI/index.md)
