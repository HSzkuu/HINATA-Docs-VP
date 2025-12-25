# Bandai Namco Game Configuration Instructions

::: info
- Almost all Bandai Namco games can use the **Bandai Namco Reader Native Protocol**
- **Taiko no Tatsujin** simultaneously supports the **Bandai Namco Reader Native Protocol** and **CardIO**
:::

## Bandai Namco Native Protocol (Example: "Taiko no Tatsujin")

If your game directory uses `bnusio.dll`, you need to configure it through `config.toml`.

1. Open `config.toml`, find the `card_reader` parameter under `[emulation]`, and change it to:

   ```toml
   card_reader = false
   ```

2. Refer to [Reader Port Configuration](../SEGA/serial.md#reader-port-configuration) to adjust the reader's port number to **COM1**, and **it is recommended to restart the computer** to ensure the settings take effect.

3. Start the game.

## CardIO Protocol

::: warning
* **Only supports "Taiko no Tatsujin"**
* Only for **HINATA Standard Edition** and **HINATA Lite with unlocked features**
* The card number read in this mode differs from the card number obtained using the **Bandai Namco Native Protocol**
:::

1. Download `cardio.dll` from the following link:  
   [https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll](https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll)

2. Place the downloaded `cardio.dll` in the game directory:  
   `\Executable\Release\plugins`

3. Start the game.
