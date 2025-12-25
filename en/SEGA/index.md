# SEGA Game Configuration Instructions

**HINATA** and **HINATA Lite** support connecting to SEGA games through the following two methods. Please choose based on your needs:

- [SEGA Official Serial Protocol](serial.md)
- [AimeIO (Based on Segatools)](aimeio.md)

Both methods have their own advantages and disadvantages.  
In the current **2025040400 firmware version**, the **SEGA Official Serial Protocol** is more recommended.

Before starting configuration, please ensure you have a **game environment that can connect to the network and run properly**.

## Differences Between the Two Methods

### SEGA Official Serial Protocol

When using the **SEGA Official Serial Protocol**, all behavior logic of the reader is consistent with official devices.

However, note the following issues:

::: warning
- The configuration process is relatively complex and often requires handling serial port-related issues on Windows  
- If the reader fails to communicate with the game for any reason, the game will directly disconnect from the network  
- Many servers do not connect to SEGA's official AimeDB. When using the serial protocol to scan `Amusement IC` cards, you may obtain incorrect card numbers (usually starting with `0008`)

If you need to obtain **completely correct card numbers** when scanning `Amusement IC` cards, please switch to **AimeIO** method for connection and ensure the **reader firmware version ≥ 2025040400**
:::

### AimeIO (Based on Segatools)

Advantages of using **AimeIO** method for connection:

- Supports hot-plugging the reader during gameplay  
- Slightly faster reading speed compared to serial protocol  
- Can coexist with Enter key swiping  
- Simple configuration process, no need to handle Windows serial settings, can be configured and used after connection  
- Exclusive feature:  
  **Supports bypassing the server and directly reading the correct card number of `Amusement IC` cards and passing it to the game**

However, due to Segatools limitations, the following behaviors cannot be correctly implemented:

::: warning
- When using `Amusement IC` cards, **cannot log into SEGA official servers** (such as SDGA, SDGS, etc.)  
  Local servers and private servers are not affected
- Currently cannot read **non-`Amusement IC` `Bandai Namco Passport` or `BANA PASSPORT` cards**, how to identify:
  - Cards do not have Amusement IC logo  
  - Card numbers are **20-digit numbers starting with 3**  
  - Card backs are in English, Korean, or Chinese
- Some Segatools have incomplete support or implementation issues for all [FeliCa](https://en.wikipedia.org/wiki/FeliCa) cards including `Amusement IC`  

If various abnormal reading issues occur when swiping `Amusement IC`, `Hime`, or other FeliCa cards, it is recommended to replace the Segatools, or directly switch to **SEGA Official Serial Protocol** for connection
:::
