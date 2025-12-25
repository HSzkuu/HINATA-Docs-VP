# PN532 Passthrough Mode

::: tip
It is recommended to update the reader firmware to the **latest version** before using this feature to achieve the best compatibility and stability.
:::

All HINATA devices support **PN532 Passthrough Mode**.

In this mode, the reader can be used as a **PN532 device** to connect directly to third-party host software ecosystems,  
commonly used for **IC card analysis, debugging, and writing operations**.

## Usage Instructions

- **No additional settings required**
- The reader will **automatically detect the usage scenario** based on the currently connected host software
- Automatically enable `PN532 Passthrough Mode` when needed

::: warning
When using PN532 Passthrough Mode, please ensure:
- Games or other programs that occupy the reader are not running in the background
- Only one host software is connected to the reader at the same time  
Otherwise, the device may not communicate properly.
:::

## Recommended Host Software

The following software has been confirmed to work normally with PN532 Passthrough Mode:

- [Mifare One Tool](https://github.com/xcicode/MifareOneTool)
- [NFCToolsGUI](https://github.com/GSWXXN/NFCToolsGUI)
