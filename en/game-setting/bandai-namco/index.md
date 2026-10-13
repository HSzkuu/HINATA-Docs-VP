# Bandai Namco Game Configuration Instructions

::: tip
- Almost all Bandai Namco games can use the **Bandai Namco native reader protocol**.
- **Taiko no Tatsujin** supports both the **Bandai Namco native reader protocol** and the **HINATA plugin (hinata.dll)**.
:::

## Bandai Namco Native Protocol (Example with Taiko no Tatsujin)

If your game uses `bnusio.dll`, you need to configure it in `config.toml`.

1. Open `config.toml`, find the `card_reader` parameter under `[emulation]`, and change it to:

   ```toml
   card_reader = false
   ```

2. Refer to [Reader Port Configuration](../sega/manual/serial/index.md#reader-port-configuration), set the reader port to **COM1**, and **restart your computer** to ensure the setting takes effect.

3. Start the game.

## HINATA Plugin (Taiko no Tatsujin)

Load `hinata.dll` through TaikoArcadeLoader (TAL) to read real Access Codes using a HINATA reader, or to swipe cards remotely. This method does not require COM port configuration or the reader's CardIO feature.

::: warning

* This plugin setup **only applies to Taiko no Tatsujin running with TAL**. Use a TAL version with the card reader plugin interface and update your HINATA firmware to the latest version.
* It reads real Access Codes from Aime, Amusement IC, and supported Banapass-compatible cards. Ordinary FeliCa cards without Amusement IC cannot be used through this interface.
* The old `cardio.dll` derives card numbers from the UID, while `hinata.dll` uses real Access Codes. Switching plugins may change the card number and **does not automatically migrate game data associated with the old number**. Check how your server binds cards to accounts before switching.
:::

### 1. Install the Plugin

Download the latest **64-bit** `hinata.dll`:

- [Download (International)](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll)
- [Download (Mainland China)](https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll)

Place it at `\Executable\Release\plugins\hinata.dll`. If you previously installed `cardio.dll` or another card reader plugin, move the old plugin out of the `plugins` directory to avoid handling the same swipe twice.

### 2. Configure TAL

Open `config.toml` next to `Taiko.exe` and enable card reader emulation in the existing `[emulation]` section:

```toml
[emulation]
card_reader = true
```

If you previously set `card_reader = false` for the native serial protocol, change it back to `true`. For CHN versions using the QR interface to log in, also set `qr = true` in the same `[emulation]` section. See the [TAL configuration example](https://github.com/esuo1198/TaikoArcadeLoader/blob/Refactor/dist/config.toml) for these settings.

### 3. Configure hinata.ini

Create `hinata.ini` next to `Taiko.exe` (`\Executable\Release`), **not inside `plugins`**:

```ini
[hinata]
; Log level; use debug when troubleshooting
logLevel=info
; Reader LED brightness, from 0 to 255
brightness=255
; Automatic DLL updates: 0 to disable, 1 to enable
autoUpdate=1
```

Launch the game from the directory containing `Taiko.exe`; the plugin looks for configuration in the working directory. `hinata.ini` takes priority over the file specified by `SEGATOOLS_CONFIG_PATH` and over `segatools.ini`. The `[aimeio]` section is also supported, but `[hinata]` takes priority for matching keys. You do not need `path=hinata.dll`.

#### Optional: Remote Card Swiping

Add the following to the same `[hinata]` section in `hinata.ini`:

```ini
; Replace REPLACEME with your own room name
serverUrl=wss://aime-ws.neri.moe/REPLACEME
```

Connect [AimeIO Sender](https://aime-portal.neri.moe/) to the same room and send a 20-digit Access Code, or send a card using [HINATA Go](/en/go/). For an encrypted remote channel, add `remotePassword=YOUR_PASSWORD` under `[hinata]` and use the same password on the sender. These settings are unnecessary if you only use a local reader.

### 4. Start the Game

Connect your reader, start the game, and swipe when prompted. TAL mode only uses the HINATA reader and remote backends; it does not read `aime.txt` or `felica.txt`, or use `dllMux`.
