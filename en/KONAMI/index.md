# KONAMI Game Configuration Instructions

::: info
- This feature **only for Standard Edition**
- Lite Edition can unlock this feature by paying **CN¥49**
:::

## CardIO Reader Settings

1. Some older firmware versions require binding **HID lights** first to enable reading.

2. Open *spicecfg*, select **Advanced** at the top  
   (If the Spice version is older, it will be in **Options**, and you need to "Show Hidden Options"),  
   find `CardIO HID Reader Support (-cardio)` and check it, as shown below:

   ![spicecardio](/assets/spicecardio.png)

3. If the reader does not work after checking `CardIO HID Reader Support (-cardio)`  
   (common in older versions of Spice, or non-Windows 10+ systems),  
   please **also try** checking `HID SmartCard`.  
   Please confirm it really doesn't work before checking. **Do not check unless necessary**.

4. If the card swipe slot position is incorrect (for example, IIDX games with 1P/2P slots),  
   please check the `xxx Order Flip` option below to adjust.

By default, CardIO runs in **maximum compatibility** mode, and can read the following card types:

| Card Type | Can Read |
| :--: | :--: |
| Amusement IC (Four-platform compatible) | ✅ |
| Any ISO14443-A | ✅ |
| Any FeliCa card (Suica / AIC / Osaifu-Keitai) | ✅ |
| Any Aime card | ✅ |
| ISO15693 (Old e-amusement pass) | ❌ |

You can further control the range of readable cards in the [HINATA Control Center](../HCC/index.md) (such as ISO14443-A, Aime).

## HID Light Binding

When the following conditions are met, the game will output light signals to the reader:
- SDVX is in **Valkyrie Cabinet Mode**
- IIDX is in **Lightning Cabinet Mode**

Binding method:

1. Open *spicecfg*, select **Lights** at the top, find `IC Card Reader *`
2. Bind according to the method shown in the figure below:

   ![spicelight](/assets/spicelight.png)

3. For games with 2P positions like IIDX, they will be divided into **1P/2P with a total of six channels**.  
   Please select the P position you play for binding;  
   If using two readers, you can also bind all.

4. Adjust light brightness:  
   In *spicecfg* → **Advanced** → `Light Brightness Adjustment` to adjust.

   ![spicebrightness](/assets/spicebrightness.png)

## Other Pages
- [Adjust CardIO Reading Restrictions](../HCC/index.md)
- [SEGA Game Settings](../SEGA/index.md)
