# Connecting to the Game via AimeIO

::: warning
- Requires firmware version >= `2025052500`; updating to the latest firmware is recommended for the best results.
:::

## Notes

Advantages of using **AimeIO**:

* Supports hot-plugging the card reader in-game
* Slightly faster card reading than the serial protocol
* Can coexist with enter-to-swipe
* Simple configuration without Windows serial port setup
* Exclusive feature: **Supports bypassing the server to directly read the correct card number of an `Amusement IC` card and pass it to the game.**

::: warning
The following behaviors are limited by Segatools and cannot be implemented correctly:

* When using an `Amusement IC` card, **you cannot log in to official SEGA servers** (SDGA, SDGS, etc.).  
  Local servers and private servers are not affected.
* Only some Segatools support reading non-`Amusement IC` `Bandai Namco Passport` or `BANA PASSPORT` cards:
  * The card has no Amusement IC logo
  * The card number is a **20-digit number starting with 3**
  * The back of the card is in English, Korean, or Chinese
* A small number of Segatools have incomplete FeliCa support.  
  If errors occur when swiping FeliCa cards that are **not** `Amusement IC`, such as `Hime`:
  * Replace Segatools
  * Or switch to the **serial protocol**
:::

## Game Configuration

::: warning
- If you previously modified AMDaemon's reader port number according to "Modifying the Required Game Port Number (com_port.md)", restore that setting first. Otherwise, the following configuration will not work.
- The game must already be connected to the network successfully.  
  After entering the game, it should display a **green globe icon**.  
  Network configuration is outside the scope of this page.
:::

### 1. Place the File

Place the provided `hinata.dll` into the game directory.  
It should be in the same directory as `amdaemon.exe`, `inject.exe`, and `segatools.ini`.

- [Download (International)](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll)
- [Download (Mainland China)](https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll)

### 2. Modify segatools.ini

```ini
; If there is no [aime] entry, add it manually
[aime]
; enable=1 enables the Segatools card reader hook
; It is also enabled by default if omitted
enable=1

; If there is no [aimeio] entry, add it manually
[aimeio]
; Specify the DLL path
path=hinata.dll

; Light brightness. Available values: 0~255. Default: 255
; It also works normally without this line
brightness=255
```

### 3. Start and Confirm

::: tip
If the following happens:

* Only enter-to-swipe works
* The reader has no lights and cannot read cards

Then the current Segatools **does not support AimeIO**.  
Replace it with supported Segatools, or switch to the **serial protocol**.
:::


## Other Pages
* [Connecting to SEGA games via serial protocol](../serial/index.md)
* [In-game card reader test](../../in_game_test.md)
* [KONAMI Game Settings](../../../konami/index.md)
