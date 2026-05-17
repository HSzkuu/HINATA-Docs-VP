# Using HINATA

HINATA can be used in many ways, not only as a game card reader.

## Connect the Card Reader

Use a data cable to connect HINATA to a Windows, macOS, Android, Linux, or other supported device.

![connection](</assets/connection.jpg>)

![scan-card-by-hinata](go/features/assets/scan-card-by-hinata.png)

## Test the Card Reader

Before formal use, **test the card reader first** for later use.

1. Open [HINATA Go](go/index.md)
2. Connect the card reader in HINATA Go and swipe a card to check whether the device is working normally
3. If no abnormal behavior appears, you can start using it

::: tip A note on the HINATA Lite antenna
Since HINATA Lite uses an off-the-shelf RF antenna module, it may not be a perfect match for the current use case of placing cards directly on the reader. The optimal reading position for some cards is not when they are placed right against the reader, but rather a few centimeters higher. If you encounter very unstable issues when scanning some compatible cards, please first go to [HINATA Go](go/index.md) to test the card reading stability, then appropriately raise the card a few centimeters when swiping in-game or use a non-metallic object of appropriate thickness as a cushion. Alternatively, you can use a copper foil sticker and apply a piece to the area on the back of the HINATA Lite that glows red. The specific size is recommended to be tested on the webpage. **HINATA Lite units shipped after July 20, 2025, will come with a copper foil sticker of a suitable size.**
:::

## Usage Methods

<HCard title="🕹️ Connect HINATA to Games" link="game-setting/" cols="1">
  HINATA can be connected to arcade games from vendors such as SEGA, KONAMI, and Bandai Namco.
</HCard>

<HCard title="⭕ Connect to Kanade DX" link="kdx" cols="2">
  HINATA can be connected to Kanade DX and used as a card reader.
</HCard>
<HCard title="🛠️ Use as a Standard PN532" link="integration/pn532/" cols="2">
  HINATA can also be used directly as a standard PN532 with third-party host software.
</HCard>
