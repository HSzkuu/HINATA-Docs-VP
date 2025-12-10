# SEGA Game Configuration Instructions

**HINATA** and **HINATA Lite** support connecting to the game in two ways, please choose one:
* [SEGA Official Serial Protocol](serial.md)
* [AimeIO (based on Segatools)](aimeio.md)

Each of the two methods has its own advantages and disadvantages. Currently (with firmware version 2025040400), I recommend using **AimeIO**.

Please prepare a game that can **connect to the network normally** first.

## Differences between the two methods:

### SEGA Official Serial Protocol
When using the **SEGA Official Serial Protocol**, all behavioral logic is consistent with the official card reader, but:
* Configuration is more troublesome, and you have to wrestle with Windows' esoteric issues.
* If the card reader fails to communicate with the game for various reasons, the game will disconnect from the network.
* Many servers are not connected to SEGA's official AimeDB, which will cause users to get an incorrect card number (starting with 0008) when using the serial protocol and scanning an `Amusement IC` card. If you need to get the completely correct card number when scanning an `Amusement IC` card, please use the **AimeIO** method to connect to the game, and ensure that the **card reader firmware version is ≥ 2025040400**.

### AimeIO
Advantages of using **AimeIO**:
* Supports hot-plugging the card reader in-game.
* The card reading speed is slightly faster than the serial protocol.
* Can coexist with enter-to-swipe.
* Convenient configuration, no need to fight with Windows to set the serial port, just plug it in and configure the game to use it.
* Exclusive feature: **Supports bypassing the server to directly read the correct card number of an `Amusement IC` card and pass it to the game.**

**However, some behaviors are limited by Segatools and cannot be implemented correctly:**
* **Cannot log in to the official SEGA server** (SDGA, SDGS, etc.) when using an `Amusement IC` card.  
Local servers and private servers are not affected.
* Currently unable to read non-`Amusement IC` `Bandai Namco Passport` cards (cards without the Amusement IC logo, or with a 20-digit number starting with **3**, or with English, Korean, or Chinese on the back).
* A small number of Segatools cannot use all [Felica](https://en.wikipedia.org/wiki/FeliCa) cards, including `Amusement IC`, or the implementation is incorrect. If you encounter various card swiping problems in the game when swiping Felica cards such as `Amusement IC` or `Hime`, please replace your Segatools, or switch to the **serial protocol** connection.