# Changelog

## HINATA & HINATA Lite 2025110700-72515d2e
* Added support for high-speed card reading in SEGA game serial port mode. This needs to be manually enabled in the control center after updating. When enabled, the card reading speed in SEGA serial mode is significantly improved.

## HINATA & HINATA Lite 2025100121-af106a7b
* Fixed a potential startup failure issue.

## HINATA & HINATA Lite 2025093016-d770c302
* Added compatibility with the native protocol of Bandai Namco games (Wangan Midnight, Taiko no Tatsujin, Gundam, etc.)
* `PN532 Passthrough Mode` and `Bandai Namco Native Protocol` are now available on HINATA Lite
* Added a low-power mode. The RF module and LED lights will be turned off when the computer is shut down and will automatically recover when the computer is turned on
* Fixed an issue from the 2025040400 version where the `SEGA Serial Protocol` would occasionally fail to connect and require re-plugging
* Optimized the default rainbow light effect on power-on and provided a fixed light effect mode for subsequent adjustments
* The light brightness adjustment in `SEGA Serial Protocol` has been restored
* Reserved some setting items for future use by the HINATA Control Center

## HINATA & HINATA Lite 2025052505-40e67bd6
* A line of test code was accidentally left in the previous version (which could cause abnormal operation in SEGA serial mode)

## HINATA & HINATA Lite 2025052106-3915f44d
* Fixed an issue with abnormal PN532 passthrough mode
* Fixed an occasional packet error when placing a card with aimeio
* (The above two issues were because yesterday's update did not completely solve them)
* Preliminarily added multi-card selection

## HINATA & HINATA Lite 2025052019-b75d2083
* Fixed an issue with abnormal PN532 passthrough mode
* Fixed an occasional packet error when placing a card under aimeio

## HINATA & HINATA Lite 2025051301-c4fea99b
* Refactored some modules
* Fixed an issue where some special sak cards could not be read
* Implemented the `thincaled` command for SEGA games
* Optimized card reading speed and stability
* Optimized the success rate of reading iPhone's Pasmo
* Reserved more interfaces for future use by the control center
* The light effect after power-on has been changed to a rainbow light. If a card is detected, the brightness will increase

## HINATA & HINATA Lite 2025040400

2025/4/4:  
Refactored reader firmware, currently supports:
* SEGA official protocol reading (possibly more stable than before)
* Revolutionary new AimeIO
* CardIO for Konami games and Taiko no Tatsujin (Standard Edition Only)
* Fully automatic PN532 Passthrough (Standard Edition Only)
* Future firmware updates will all be online web updates

New AimeIO features:
* Backward compatible with old firmware, and can now coexist with enter-to-swipe
* Exclusive feature: Bypasses the server and sends the correct Amusement IC card number directly to the game, ensuring correct card numbers on any server

Mac and Linux users can visit https://cc.neri.moe to update firmware, Windows users need to download firmware package from group files

## HINATA-2024093002

2024/9/30:  
Rewrote SEGA serial port packet receiving logic, fixed game attempting to update reader firmware again. Changed hw/fw version passed to game to 837-15396 94

2024/9/28:  
Actually fixed the game firmware flashing bug. Since no other changes, version is 2024091401

2024/9/14:  
Fixed bug where SEGA games constantly tried to flash reader firmware when entering test mode  
Added global low-power mode (enabled after 10 minutes of no card reading and no game connection)  
SEGA serial mode added multi-card selection (not yet open)

## HINATA-2024090500

2024/9/5:  
Reader lights yellow on power-on, gradually changes to blue after USB handshake success  
Optimized mode switching logic again  
Fixed aimeio dll rejection in some segatools  
Included older update script for old firmware

## HINATA-2024090400

2024/9/4:  
Fixed cardio not working properly

## HINATA-2024090300

**Contains bugs, flash with caution**

2024/9/3:  
Removed Felica compatibility mode (disguising Felica cards as Felica Lite-S)  
Blocked sak20 tag at bottom layer (affects Mobile Felica)  
Optimized Mobile Felica reading stability

2024/9/2.2:  
Optimized felica card reading speed with extended security verification

## HINATA-2024090201

**Contains bugs, flash with caution**

2024/9/2.1:  
Fixed bug preventing card reading in Sept 2 firmware

2024/9/2:  
Implemented official reader additional verification, can now connect to official aimedb  
(Some code changes may cause instability)

2024/8/31:  
Happy 33rd birthday to Hatsune Miku  
Officially supports aimeio (small bugs in old firmware fixed)

Under aimeio:
* Hot-plugging supported in game
* Network stays connected when unplugged
* Light brightness adjustable in segatools.ini
* Plug and play, no Windows port configuration needed
* Better support for Initial D and niche SEGA games
* Does not support old banapass (non-Amusement IC)
* May have card number issues on servers with official aimedb (RIN server contacted, others self-resolve)
* No impact on aqua/artemis local servers, deer network, nageki network

Recommended to use native protocol (serial) first  
Optimized automatic mode switching  
Reserved APIs for next-gen control center

## HINATA-2024050400

2024/5/4:  
Click to copy card number in control center  
CardIO works without light binding after power-on (needs binding if SEGA game started)  
Should not crash Taiko after card swipe  
Fixed HINATA showing in spicecfg Analog tab  
Optimized control center card reading speed

2024/5/2:  
! Major changes, roll back if encountering new bugs  
! Do not use old config.json for control center  
Optimized CardIO and SEGA serial switching  
Fixed two HINATAs showing in spicecfg  
Fixed control center not syncing settings to reader on startup  
Removed Felica compatibility mode button (enabled by default)  
Cardio can now read Aime Access Code instead of UID (default off for compatibility)  
Added cardio settings page: M1 UID reading (default on), Aime Access Code reading (default off)
