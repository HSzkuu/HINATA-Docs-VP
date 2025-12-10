# KONAMI Game Configuration Instructions
**This feature is limited to the Standard Edition | The Lite version can be unlocked for CN¥49.**

## CardIO Card Reading Settings

1. Some older firmware versions require binding HID lights to read cards.
2. Open *spicecfg*, select **Advanced** at the top (in **Options** for older Spice versions, and you may need to show hidden options), find `CardIO HID Reader Support (-cardio)` and check it.  
As shown in the figure:
   
   ![spicecardio](/assets/spicecardio.png)

3. If the card reader does not work after checking `CardIO HID Reader Support (-cardio)` (this may occur on ancient versions of Spice or non-Windows 10 and above versions), please try checking `HID SmartCard`. Please only check this if it is confirmed not to work; do not check it unless necessary.
4. If you find that the card swipe slot is incorrect (for games like IIDX with 1P and 2P),  
Please check the `xxx Order Flip` below.

By default, CardIO prioritizes maximum compatibility. Cards that can be swiped include:

|                  Card Type                   | Can be swiped |
| :---------------------------------------: | :------: |
|           Amusement IC           |    ✅     |
|              Any ISO14443-A              |    ✅     |
| Any Felica Card (Suica, AIC, Osaifu-Keitai) |    ✅     |
|               Any Aime Card                |    ✅     |
|           ISO15693 (old epass)           |    ❌     |

You can control the range of readable cards (ISO14443A, Aime) in the [HINATA Control Center](../HCC/index.md).


## HID Light Binding
When SDVX is in Valkyrie model mode or IIDX is in Lightning model mode, the game will output light to the card reader. Here is how to bind it:
1. Open *spicecfg* , select **Lights** at the top, find `IC Card Reader *`
2. Bind as shown in the figure below:
   
   ![spicelight](/assets/spicelight.png)

3. Games like IIDX with a 2P position will be divided into six channels for 1P and 2P. Bind the P position you play, or you can bind both when using two card readers.
4. Adjust light brightness: You can adjust it in *spicecfg* > **Advanced** > `Light Brightness Adjustment`.
![spicebrightness](/assets/spicebrightness.png)


## Other Pages
* [Adjust CardIO reading restrictions](../HCC/index.md)
* [SEGA Game Settings](../SEGA/index.md)