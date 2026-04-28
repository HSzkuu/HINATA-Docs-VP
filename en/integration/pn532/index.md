# PN532 Passthrough Mode

::: tip
It is recommended to update the card reader firmware to the **latest version** before using this feature for the best compatibility and stability.
:::

All HINATA series devices support **PN532 passthrough mode**.

In this mode, the card reader can act as a **PN532 device passthrough to third-party host software ecosystems**, commonly used for **IC card analysis, debugging, and writing**.

## Usage

- **No additional setup is required**
- The card reader automatically identifies the current host software use case
- `PN532 passthrough mode` is enabled automatically when needed

::: warning
When using PN532 passthrough mode, make sure:
- Games or other programs that occupy the card reader are not running in the background
- Only one host software application is connected to the card reader at a time  
Otherwise, the device may fail to communicate normally.
:::

## Recommended Host Software

The following software has been confirmed to work normally with PN532 passthrough mode:

*   [Mifare One Tool](https://github.com/xcicode/MifareOneTool)
*   [NFCToolsGUI](https://github.com/GSWXXN/NFCToolsGUI)
