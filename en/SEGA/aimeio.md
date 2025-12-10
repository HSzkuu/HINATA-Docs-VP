# Connecting to the game via AimeIO

* There are currently some minor bugs to be fixed, you can use the serial protocol for now.

* Standard Edition requires firmware version ≥ `2024083100` (can be used directly if shipped after August 31, 2024, needs firmware update if shipped before August 31, 2024).
* Lite Edition requires firmware version ≥ `2024090500` (can be used directly if shipped after September 5, 2024, needs firmware update if shipped before September 5, 2024).
* **Some new features require updating to `2025040400` or above to be used.**
* Visit the [HINATA Control Center](https://cc.neri.moe) to check the current firmware version. Usually, the latest firmware of the shipping date will be flashed at the time of shipment.


## Important Notes
Advantages of using **AimeIO**:
* Supports hot-plugging the card reader in-game.
* The card reading speed is slightly faster than the serial protocol.
* Can coexist with enter-to-swipe.
* Convenient configuration, no need to fight with Windows to set the serial port, just plug it in and configure the game to use it.
* Exclusive feature: **Supports bypassing the server to directly read the correct card number of an `Amusement IC` card and pass it to the game.**

**However, some behaviors are limited by Segatools and cannot be implemented correctly:**
* **Cannot log in to the official SEGA server** (SDGA, SDGS, etc.) when using an `Amusement IC` card.  
Local servers and private servers are not affected.
* Currently unable to read non-`Amusement IC` `Bandai Namco Passport` cards (cards without the Amusement IC logo, or with a 20-digit number starting with **3**, or with English, Korean, or Chinese on the back).
* A small number of Segatools cannot use all [Felica](https://en.wikipedia.org/wiki/FeliCa) cards, including `Amusement IC`, or the implementation is incorrect. If you encounter various card swiping problems in the game when swiping Felica cards such as `Amusement IC` or `Hime`, please replace your Segatools, or switch to the **serial protocol** connection.

## Game Configuration
0. If you have modified the reader port number of amdaemon according to [Modify the port number required by the game](com_port.md), please restore the modified settings first, otherwise the following settings will not work.
1. First, please make sure your game is **already connected to the network**. After entering the game, a **green globe icon** should be displayed. Otherwise, please set up the game's network connection first, which is not discussed in this article.
2. Place the `hinata.dll` provided in this article into the game directory (together with amdaemon.exe, inject.exe, segatools.ini).   
   * [Click to download (International)](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll)
   * [Click to download (Mainland China)](https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll)

3. Open `segatools.ini` and modify it as follows:

   ```ini
   ; If there is no [aime] entry, please add it and its contents manually
   [aime]
   ; The purpose of enable=1 is to enable the reader hook of Segatools, you can also add nothing, if nothing is added, it is enabled by default
   enable=1

   ; If there is no [aimeio] entry, you need to add it yourself
   [aimeio]
   ; Specify the dll path
   path=hinata.dll
   ```

4. If you want to modify the default settings, please add the following settings under the `[aimeio]` entry in `segatools.ini`. The following three settings **will all be default values if not added, so you don't need to add them if you don't need to change them**:

   ```ini
   ; Control reader brightness (0 ~ 255, default 128)
   brightness=128
   ; Coexist with enter-to-swipe (0 = off, 1 = on, default on)
   enableReturnKey=1
   ```

   If your firmware version is ≥ `2025040400`, you can continue to add:

   ```ini
   ; Amusement IC card number bypasses the AimeDB server and sends the card number directly to the server (0 = off, 1 = on, default on)
   aicBypassDB=1
   ```

5. Start the game, but if you find that no matter how you configure it, only enter-to-swipe works, and the reader's light does not respond and you cannot swipe cards, then your segatools does not support loading aimeio. Please replace your Segatools (xxxhook.dll, inject.exe).
6. Some Segatools cannot use all [Felica](https://en.wikipedia.org/wiki/FeliCa) cards, including `Amusement IC`. If you encounter a card swipe error in the game when swiping Felica cards such as `Amusement IC` or `Hime`, please replace your Segatools, or switch to the **serial protocol** connection.


## Other Pages
* [Connecting to SEGA games via serial port](serial.md)
* [In-game card reader test](in_game_test.md)
* [KONAMI Game Settings](../KONAMI/index.md)
