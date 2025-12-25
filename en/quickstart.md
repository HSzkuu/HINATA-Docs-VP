# Quick Start | Please Read the Manual Carefully

## Unboxing

### Standard Edition
Standard edition users will receive the following items:

- **HINATA × 1**
- USB Type-C data cable × 1
- Mifare Classic 1k (sak:0x08) blank card × 1

### Lite Edition
Lite edition users will receive:

- **HINATA Lite × 1**

## Usage Instructions

::: tip Note on HINATA Lite Antenna Performance
HINATA Lite uses a ready-made RF antenna module, which may not provide optimal reading performance in scenarios requiring cards to be held close to the reader.

The optimal reading position for some cards is not completely flush with the reader, but rather a few centimeters above. If you experience unstable reading when scanning certain compatible cards, first test card reading stability in the [HINATA Control Center](HCC/index.md), then try holding the card a few centimeters higher during gameplay, or use a suitable non-metallic item as a spacer.

Additionally, you can apply a copper foil sticker to the red light area on the back of HINATA Lite. The recommended size can be determined through testing on the control center webpage.

**HINATA Lite units shipped after July 20, 2025 will include a copper foil sticker of appropriate size.**
:::

### 0. Join Support Group & Notes

::: info
Support Group:  
[362419355](https://qm.qq.com/q/uKIsTeNXyw)

If you encounter any issues during use, you can ask questions in the group; I can also provide remote assistance when appropriate.
:::

After receiving the reader, it is recommended to check the firmware version and update to the latest version, see:  
[Firmware Update](Update/index.md)

### 1. Connect to Computer

Use a USB Type-C data cable to connect HINATA to your computer.

- **HINATA**: Lights up yellow when powered on, gradually turns blue after successful USB handshake with computer  
- **HINATA Lite**: Red light on the back stays on when powered on, this is normal

![connection](</assets/connection.jpg>)

After successful connection, you should see the HINATA device in Windows **Device Manager**:

![devmgr0](<assets/devmgr0.png>)
![devmgr1](<assets/devmgr1.png>)

### 2. Write Aime Card Number to Included Card

This step only applies to the blank card included with the standard edition.

Blank cards need to have a card number written to them before they can be used in SEGA games. If you already have an `Aime` card, `Bandai Namco Passport` card, `BANA PASSPORT` card, or `Amusement IC` (four-platform compatible) card, and don't intend to use the included blank card, you can skip this step.

For writing methods, please refer to:

- [Card Read/Write](HCC/index.md#card-read-write)

### 3. Start Game Configuration

::: tip
SEGA and KONAMI game configurations can coexist. When adjusting KONAMI game settings, you don't need to worry about SEGA game port settings; the reader status will switch automatically.
:::

- [SEGA Games](SEGA/index.md)
- [KONAMI Games](KONAMI/index.md)
