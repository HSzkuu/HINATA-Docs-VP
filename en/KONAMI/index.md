# KONAMI Game Configuration Instructions

## CardIO Card Reading Settings

1. Some older firmware versions require binding the HID light for card reading to function properly.
2. Open *spicecfg*, select **Advanced** at the top, find `CardIO HID Reader Support (-cardio)`, and check the box.  
   ![spicecardio](/assets/spicecardio.png)

3. If the card reader does not work after checking `CardIO HID Reader Support (-cardio)` (this may occur in older versions of Spice or non-Windows 10 and above versions), try checking `HID SmartCard`. Please confirm that it is not working before checking this option; do not check it unless necessary.
4. If you find that the card swiping slot is incorrect (for example, in games like IIDX that have 1P and 2P), check the `xxx Order Flip` option below.

By default, CardIO is set for maximum compatibility, and the following card types can be read:

| Card Type                          | Can Read Cards |
| :--------------------------------- | :------------- |
| Amusement IC             | ✅             |
| Any ISO14443-A                    | ✅             |
| Any Felica card (Suica, AIC, Osaifu-Keitai) | ✅       |
| Any Aime card                     | ✅             |
| ISO15693 (old version epass)     | ❌             |

You can control the range of readable cards (ISO14443A, Aime) in the [HINATA Control Panel](../HCP/index.md).

## HID Light Binding
When SDVX is in Valkyrie cabinet mode or IIDX is in Thunder cabinet mode, the game will output light signals to the card reader. Here’s how to bind it:

1. Open *spicecfg*, select **Lights** at the top, and find `IC Card Reader *`.
2. Bind it as shown in the image below:  
   ![spicelight](/assets/spicelight.png)

3. Games like IIDX that have 2P positions will be divided into 1P and 2P, totaling six channels. Bind the channel corresponding to the player position you are using, or bind both if using two card readers.
4. Adjust light brightness: In *spicecfg* > **Advanced** > `Light Brightness Adjustment`, you can make adjustments.  
   ![spicebrightness](/assets/spicebrightness.png)

## Other Resources
* [Adjusting CardIO Reading Limits](../HCP/index.md#cardio-settings)
* [SEGA Game Configuration Instructions](../SEGA/index.md)