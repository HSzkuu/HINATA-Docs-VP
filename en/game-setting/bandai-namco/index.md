# Bandai Namco Game Configuration Instructions

::: tip
- Almost all Bandai Namco games can use the **Bandai Namco native reader protocol**.
- **Taiko no Tatsujin** supports both the **Bandai Namco native reader protocol** and **CardIO**.
:::

## Bandai Namco Native Protocol (Example with Taiko no Tatsujin)

If your game uses `bnusio.dll`, you need to configure it in `config.toml`.

1. Open `config.toml`, find the `card_reader` parameter under `[emulation]`, and change it to:

   ```toml
   card_reader = false
   ```

2. Refer to [Reader Port Configuration](../sega/manual/serial/index.md#reader-port-configuration), set the reader port to **COM1**, and **restart your computer** to ensure the setting takes effect.

3. Start the game.

## CardIO Protocol

::: warning

* **Only Taiko no Tatsujin is supported.**
* This is limited to the **HINATA Standard Edition** and **HINATA Lite with the feature unlocked**.
* The card number read in this mode differs from the card number obtained through the **Bandai Namco native protocol**.
  :::

1. Download `cardio.dll` from the following link:  
   [https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll](https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll)

2. Place the downloaded `cardio.dll` into this folder in the game directory:

   `\Executable\Release\plugins`

3. Start the game.
