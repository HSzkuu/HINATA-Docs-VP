# Firmware Update

If the reader is currently **working normally and stably**, and you **have no need for new features**, you can choose not to update the firmware.  
However, if you encounter exceptions, compatibility issues, or known bugs during use, **updating the firmware can usually resolve some problems**, so it is still recommended to update when needed.

## Using HINATA Control Center for Updates

::: warning
This update method only supports the following conditions:
- Firmware version **2025040400 and above**
- Only supports **macOS / Linux / ChromeOS**
- Linux requires **pre-configured udev rules**
:::

You can perform online updates by accessing the HINATA Control Center via browser:

[Using HINATA Control Center for Updates](/HCC/#firmware-update)

This method requires no additional tools and is suitable for non-Windows users.

## Using Updater for Updates (Windows)

On Windows systems, you need to use the **HINATAUT** tool to update the firmware.

- **Windows 11**: Can run the updater directly
- **Windows 10**: May need to install Windows Terminal from Microsoft Store first

::: warning
If there is no response or it crashes directly on Windows 10, please install  
[Windows Terminal](https://apps.microsoft.com/detail/9n0dx20hk701) first.
:::

### Download Updater

- [Click to Download (International)](https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinataut-rs.exe)
- [Click to Download (Mainland China)](https://gitee.com/nerimoe/hinata-pub/raw/master/hinataut-rs.exe)
