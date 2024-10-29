# SEGA Game Configuration Instructions

**HINATA** supports two methods for connecting to games:
* [SEGA Official Serial Protocol](serial.md)
* [AimeIO (based on Segatools)](aimeio.md)

Please prioritize using the **SEGA Official Serial Protocol**.

Make sure you have a **game that can connect to the internet**.

## Differences Between the Two Methods:

When using the **SEGA Official Serial Protocol**, all behavior logic is consistent with the official card reader.

Using **AimeIO** allows for hot-swapping card readers in-game, and the reading speed is slightly faster compared to the serial protocol. However, some behaviors are limited by Segatools and may not be implemented correctly:

* When using `Amusement IC` cards, you **cannot log into SEGA's official servers** (such as SDGA, SDGS, etc.). This does not affect local servers or private servers.
* Currently, it cannot read `Banapass` cards that do not start with the number **510**:
  * Old versions issued in Japan (non `Amusement IC` versions).
  * All versions issued overseas, including those in China.
* Some Segatools may not be able to use any [Felica](https://zh.wikipedia.org/wiki/FeliCa) cards, including `Amusement IC`. If this occurs, please replace your Segatools.

Please choose the appropriate connection method based on your needs and ensure that the cards and game versions are compatible with the selected protocol.