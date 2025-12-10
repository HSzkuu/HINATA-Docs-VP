# Changelog

## HINATA & HINATA Lite 2025110700-72515d2e
* Added support for high-speed card reading in SEGA game serial port mode. This needs to be manually enabled in the control center after updating. When enabled, the card reading speed in SEGA serial mode is significantly improved.

## HINATA & HINATA Lite 2025100121-af106a7b
* Fixed a potential startup failure issue.

## HINATA & HINATA Lite 2025093016-d770c302
* Added compatibility with the native protocol of Bandai Namco games (Wangan Midnight, Taiko no Tatsujin, Gundam, etc.).
* `PN532 Passthrough Mode` and `Bandai Namco Native Protocol` are now available on HINATA Lite.
* Added a low-power mode. The RF module and LED lights will be turned off when the computer is shut down and will automatically recover when the computer is turned on.
* Fixed an issue from the 2025040400 version where the `SEGA Serial Protocol` would occasionally fail to connect and require re-plugging.
* Optimized the default rainbow light effect on power-on and provided a fixed light effect mode for subsequent adjustments.
* The light brightness adjustment in `SEGA Serial Protocol` has been restored.
* Reserved some setting items for future use by the HINATA Control Center.

## HINATA & HINATA Lite 2025052505-40e67bd6
* A line of test code was accidentally left in the previous version (which could cause abnormal operation in sega serial mode).

## HINATA & HINATA Lite 2025052106-3915f44d
* Fixed an issue with abnormal PN532 passthrough mode.
* Fixed an occasional packet error when placing a card with aimeio.
* (The above two issues were because yesterday's update did not completely solve them)
* Preliminarily added multi-card selection.

## HINATA & HINATA Lite 2025052019-b75d2083
* Fixed an issue with abnormal PN532 passthrough mode.
* Fixed an occasional packet error when placing a card under aimeio.

## HINATA & HINATA Lite 2025051301-c4fea99b

* Refactored some modules.
* Fixed an issue where some special sak cards could not be read.
* Implemented the `thincaled` command for sega games.
* Optimized card reading speed and stability.
* Optimized the success rate of reading iPhone's Pasmo.
* Reserved more interfaces for future use by the control center.
* The light effect after power-on has been changed to a rainbow light. If a card is detected, the brightness will increase.


## HINATA & HINATA Lite 2025040400

2025/4/4:
Refactored reader firmware:
Currently supports:
A possibly more stable SEGA official protocol reading than before.
A revolutionary new AimeIO.
CardIO for Konami games and Taiko no Tatsujin (Standard Edition Only).
Fully automatic PN532 Passthrough (Standard Edition Only).
Future firmware updates will all be online web updates.
Todo:
Bandai Namco native protocol.
New control center to be improved.
Brand new AimeIO:
Backward compatible with old firmware, and can now coexist with enter-to-swipe!

Exclusive new features only available with the 2025 new firmware:
As we all know, the card number of an Amusement IC card normally needs to send the card serial number to the game server, which then returns the card number.
However, many servers are not compatible with this, causing the card number swiped by the player to become a card number converted from a serial number starting with 0008.
So now there is this version of AimeIO, which bypasses the server and sends the card number on the back of the Amusement IC card directly to the game, ensuring you can read the correct card number on any server.
Mac and Linux users can visit https://cc.neri.moe to update the firmware.
Windows users need to download the firmware package in the group files to update.


## HINATA-2024093002

2024/9/30:
Rewrote the SEGA serial port packet receiving logic to once again fix the issue of the game trying to update the reader firmware.
The hw/fw version passed to the game has been changed to 837-15396 94.

2024/9/28:
This time the game firmware flashing bug is really fixed. Since there are no other changes, this version is called 2024091401.

2024/9/14:
Fixed a bug where SEGA games would constantly try to flash the reader firmware when entering test mode.
Added a global low-power mode, which is enabled when no card is read within 10 minutes and not connected to any game. It automatically turns off when connected to a game or a card is read.
SEGA serial mode has added multi-card selection, which is not yet open and will be available in the future.

## HINATA-2024090500

2024/9/5:
The reader will light up yellow when powered on, and will gradually change to blue light after a successful USB handshake, which can visually determine whether the reader is successfully connected to the computer.
Optimized the mode switching logic again.
Fixed the issue where the aimeio dll was rejected in some segatools.
An older update script for old firmware is included in the compressed package.

## HINATA-2024090400

2024/9/4:
Fixed an issue where cardio was not working properly.

## HINATA-2024090300

**Contains bugs, please flash with caution.**

2024/9/3:
Since the complete card reading logic of the official reader has been implemented, the Felica compatibility mode (disguising various Felica cards as Felica Lite-S to trick the game) has been temporarily removed.
The sak20 tag is blocked at the bottom layer (because it affects Mobile Felica). Now swiping Pixel and various Japanese Mobile Felica should be more stable.

2024/9/2.2:
Optimized the reading speed of felica cards with extended security verification.

## HINATA-2024090201

**Contains bugs, please flash with caution.**

2024/9/2.1:
Fixed a bug introduced in the September 2nd firmware that prevented card reading.

2024/9/2:
Implemented the official reader's additional verification, now you can directly connect to the official aimedb to swipe cards.
(Some parts of the code have been greatly changed, which may be unstable)

2024/8/31:
Today is Hatsune Miku's 33rd birthday, happy birthday to her.
Officially supports aimeio. Although the old firmware can also use my aimeio, there is a small bug, so this firmware was released first.

Under aimeio, the reader can be hot-plugged in the game. The network will not be disconnected after the reader is unplugged, and it can be plugged back in at any time. The light brightness can also be adjusted in segatools.ini.
Plug and play, no need to fight with Windows to set the port number.
Compared to the native serial protocol, aimeio has better support for games like Initial D or other niche sega games.

Under aimeio, old banapass (non-Amusement IC version) is not supported for now.
And due to some abstract implementations of segatools, the card number may still be incorrect after swiping a four-company card on some servers that have implemented the official aimedb. The RIN server has been contacted to solve this problem, for other servers, you are on your own.
If you are using an aqua/artemis local server, or a deer network, nageki network or other servers that have not implemented the official aimedb, this will not affect you.

It is recommended to use the native protocol mode (serial port) first.

Optimized the fully automatic mode switching logic again.
Reserved some apis for the next generation control center.

## HINATA-2024050400

2024/5/4:
Click to copy the card number when reading the card in the control center.
CardIO can be used without binding lights after HINATA is powered on, but if a SEGA game is started after power-on, you need to bind the lights or re-plug the reader.
It should no longer crash the game after swiping a card once on Taiko.
Fixed a bug where HINATA was displayed in the Analog tab of spicecfg.
Optimized card reading speed in the control center.

2024/5/2:
! This version has major changes in various senses. If you encounter bugs that you have not encountered before, please roll back the version.
! Please do not use the old config.json for the control center.
Optimized the switching logic of CardIO and SEGA serial port.
Fixed a bug where two HINATAs were displayed in spicecfg.
Fixed a bug where the control center would not synchronize settings to the reader on startup.
Removed the Felica compatibility mode button in the control center and enabled it by default.
Cardio can now read the Access Code of Aime cards instead of the UID (this function is disabled by default to be compatible with previous user accounts).
Added a page to adjust cardio settings in the control center: M1 card UID reading (default on), [new]Aime card Access Code reading (default off)
