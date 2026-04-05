# PN532 Passthrough Mode

::: tip
It is recommended to update the card reader firmware to the **latest version** before using this feature to get the best compatibility and stability.
:::

All HINATA series devices support **PN532 Passthrough Mode**.

In this mode, the card reader can act as a **PN532 device to connect directly into a third-party host computer software ecosystem**,
which is commonly used for **IC card analyzing, debugging, and writing operations**.

## Usage Instructions

- **No additional settings are required**
- The card reader will **automatically identify the usage scenario** based on the currently connected host computer software.
- Automatically enable `PN532 Passthrough Mode` when needed.

::: warning
When using PN532 Passthrough Mode, please ensure:
- Games or other programs that occupy the card reader are not running in the background.
- Only one host computer software is connected to the card reader at the same time.
Otherwise, the device may not be able to communicate normally.
:::

## Recommended Host Computer Software

The following software has been confirmed to work correctly with PN532 Passthrough Mode:

- [Mifare One Tool](https://github.com/xcicode/MifareOneTool)
- [NFCToolsGUI](https://github.com/GSWXXN/NFCToolsGUI)
