
# KONAMI Game Configuration Guide  
**Applies to Standard Edition Only**  

## CardIO Reader Setup  
1. Older firmware versions require binding HID lights for card reading functionality.  
2. Open **spicecfg** → Select **Advanced** (or **Options** in older Spice versions with hidden options enabled).  
   → Enable `CardIO HID Reader Support (-cardio)` as shown:  
   ![spicecardio](/assets/spicecardio.png)  
3. If card reading fails after enabling `-cardio` (common on legacy Spice/non-Windows 10+ systems), try enabling `HID SmartCard`. **Only enable this if necessary!**  
4. For incorrect slot assignment (e.g., 1P/2P in IIDX):  
   → Enable the corresponding `xxx Order Flip` option below.  

**Default Card Compatibility (optimized for maximum support):**  
| Card Type                      | Supported |  
| :----------------------------- | :-------: |  
| Amusement IC (Multi-company)   | ✅        |  
| Any ISO14443-A                 | ✅        |  
| Any Felica (Suica/AIC/Osaifu-Keitai) | ✅ |  
| Any Aime                       | ✅        |  
| ISO15693 (Legacy e-pass)       | ❌        |  

*Adjust card restrictions via [HINATA Control Center](../HCP/index.md).*  

## HID Light Binding  
*Required for lighting effects in:*  
- SDVX **Valkyrie Model cabinets**  
- IIDX **Lightning Model cabinets**  

1. Open **spicecfg** → Select **Lights** → Locate `IC Card Reader *`.  
2. Bind channels as shown:  
   ![spicelight](/assets/spicelight.png)  
3. For multi-player games (e.g., IIDX):  
   - Bind channels for your player position (1P/2P).  
   - Use two readers for simultaneous 1P+2P operation.  
4. Adjust brightness: **Advanced** → `Light Brightness Adjustment`:  
   ![spicebrightness](/assets/spicebrightness.png)  

## Related Guides  
* [Configure CardIO Restrictions](../HCP/index.md#cardio-settings)  
* [SEGA Game Setup](../SEGA/index.md)