# Connecting to Games via AimeIO

## Important Notes
AimeIO relies on Segatools to hook into the card reader, allowing for hot-swapping of the reader in-game. However, due to limitations of Segatools, there are the following drawbacks:
* When using `Amusement IC` cards, you **cannot log into SEGA's official servers**.
* Currently, it cannot read `Banapass` cards that do not start with the number **510**:
  * Old versions issued in Japan (non `Amusement IC` versions).
  * All versions issued overseas, including those in China.
* Some Segatools may not be able to use any [Felica](https://zh.wikipedia.org/wiki/FeliCa) cards, including `Amusement IC`. If this occurs, please replace your Segatools.

**Standard version requires firmware version ≥ `2024083100`** (devices shipped after August 31, 2024, can be used directly).

**Lite version requires firmware version ≥ `2024090500`** (devices shipped after September 5, 2024, can be used directly).

## Game Configuration
1. First, ensure that your game is **connected to the internet** and shows a **green globe icon** after entering the game. If not, you need to set up the game's internet connection, which is not covered in this document.
2. Place the provided `hinata.dll` file into the game directory.  
   [Click here to download](https://github.com/nerimoe/HINATA-release/releases/download/HINATA-2024090500/hinata.dll)
3. Open `segatools.ini` and modify it as follows:
   ```ini
   ; If there is no [aime] entry, please manually add this entry and its content
   [aime]
   enable=1
   ; enable=1 is used to enable Segatools' reader hook. You can also leave it blank, as it is enabled by default.

   ; If there is no [aimeio] entry, you need to add it yourself
   [aimeio]
   path=hinata.dll
   brightness=128
   ; path specifies the path to the DLL
   ; brightness controls the reader's brightness, selectable from 0 to 255. If not specified, the default is 128.
   ```
4. Start the game.

## Related Guides
* [Connecting to SEGA Games via Serial Protocol](serial.md)
* [In-Game Card Reader Test](in_game_test.md)
* [KONAMI Game Configuration Instructions](../KONAMI/index.md)