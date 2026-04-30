# KONAMI Game Configuration Instructions

::: tip
- This feature is **limited to the Standard Edition**.
- The Lite Edition can unlock this feature for **CN¥49**.
:::

## CardIO Card Reading Settings

1. Some older firmware versions require binding **HID lights** before card reading can work.

2. Open *spicecfg*, select **Advanced** at the top.  
   For older Spice versions, this is under **Options**, and you may need to show hidden options.  
   Find `CardIO HID Reader Support (-cardio)` and check it, as shown below:
   
   ![spicecardio](/assets/spicecardio.png)

3. If the card reader does not work after checking `CardIO HID Reader Support (-cardio)`, which commonly happens with older Spice versions or systems older than Windows 10, **try** checking `HID SmartCard` as well.  
   Please only check it after confirming that the reader truly does not work, and **do not enable it unless necessary**.

4. If the card swipe slot is incorrect, for example in games like IIDX with 1P / 2P slots, check the corresponding `xxx Order Flip` option below to adjust it.

By default, CardIO runs in **maximum compatibility** mode. The readable card types are:

| Card Type | Readable |
| :--: | :--: |
| Amusement IC | Yes |
| Any ISO14443-A | Yes |
| Any Felica card (Suica / AIC / Osaifu-Keitai) | Yes |
| Any Aime card | Yes |
| ISO15693 (legacy e-amusement pass) | No |

You can further control the range of readable cards, such as ISO14443-A and Aime, in [HINATA Go](/en/configuration).


## HID Light Binding

The game outputs light signals to the card reader when the following conditions are met:

- SDVX is in **Valkyrie cabinet mode**
- IIDX is in **Lightning cabinet mode**

Bind the lights as follows:

1. Open *spicecfg*, select **Lights** at the top, and find `IC Card Reader *`.
2. Bind as shown in the figure below:
   
   ![spicelight](/assets/spicelight.png)

3. For games like IIDX that have a 2P side, the reader is split into **six channels for 1P / 2P**.  
   Bind the side you play on. If you use two card readers, you can bind all channels.

4. Adjust light brightness in *spicecfg* -> **Advanced** -> `Light Brightness Adjustment`.

   ![spicebrightness](/assets/spicebrightness.png)


## Other Pages
- [Adjust CardIO reading restrictions](/en/configuration)
- [SEGA Game Settings](../sega/hinata-client/index.md)
