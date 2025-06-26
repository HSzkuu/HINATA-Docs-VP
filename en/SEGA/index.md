
# SEGA Game Configuration Guide  

**HINATA** and **HINATA Lite** support two connection methods for games (choose one):  
* [SEGA Official Serial Protocol](serial.md)  
* [AimeIO (Segatools-based)](aimeio.md)  

Both methods have distinct advantages and disadvantages. For firmware version **2025040400+**, **AimeIO** is currently recommended.  

Ensure you have a **normally networked** game ready beforehand.  

## Differences Between the Two Methods:  

### SEGA Official Serial Protocol  
When using the **SEGA Official Serial Protocol**, all behaviors are consistent with official card readers. However:  
* Configuration is cumbersome, requiring troubleshooting against Windows' quirky issues.  
* Many servers do not integrate with SEGA’s official AimeDB. This causes scans of `Amusement IC` cards to return incorrect card numbers (starting with 0008) when using the serial protocol. If you require fully accurate card numbers for `Amusement IC` scans, use **AimeIO** and ensure **your card reader firmware version is ≥ 2025040400**.  

### AimeIO  
Advantages of using **AimeIO**:  
* Supports hot-swapping card readers during gameplay.  
* Slightly faster card reading compared to the serial protocol.  
* Compatible with keyboard emulation card swiping.  
* Easy setup—no need to troubleshoot serial port configurations in Windows; plug in and configure the game.  
* Exclusive feature: **Supports bypassing the server to directly read and transmit the correct card number of `Amusement IC` cards to the game**.  

**However, certain behaviors cannot be correctly implemented due to Segatools limitations:**  
* **Cannot log into SEGA official servers** (SDGA, SDGS, etc.) when using `Amusement IC` cards.  
  * Local servers and private servers are not affected.  
* Currently cannot read non-`Amusement IC` `Banapass` cards (those without the Amusement IC logo or with English/Korean/Chinese text on the back).  
* Some Segatools versions fail to read all [Felica](https://en.wikipedia.org/wiki/FeliCa) cards (including `Amusement IC`) correctly. If you encounter issues scanning `Amusement IC` or other Felica cards in-game, try switching to another Segatools build or use the **Serial Protocol** instead.  