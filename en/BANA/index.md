# Bandai Namco Game Configuration Instructions

*   All (probably) Bandai Namco games can use the `Bandai Namco Native Reader Protocol`.
*   **Taiko no Tatsujin** can support both `Bandai Namco Native Reader Protocol` and `CardIO`.

## Bandai Namco Native Protocol (Example with Taiko no Tatsujin)
If your game uses `bnusio.dll`, you need to configure it in `config.toml`.

1.  Open `config.toml`, find the `card_reader` parameter, and change it to `false`.
2.  Refer to [Reader Port Configuration](../SEGA/serial.md#reader-port-configuration) to set the reader to **COM1**, and it is recommended to restart your computer.
3.  Start the game.

## CardIO Protocol
Only supports Taiko no Tatsujin, limited to HINATA Standard Edition and unlocked HINATA Lite.
The card number read in this mode will be different from the `Bandai Namco Native Protocol`.

1.  Download [cardio.dll](https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll) from here.
2.  Place it in the `\Executable\Release\plugins` folder in the game directory.
3.  Start the game.
