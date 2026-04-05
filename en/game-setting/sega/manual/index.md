# Manually Configure SEGA Games

**HINATA** and **HINATA Lite** support connecting to SEGA games via the following two methods. Please choose one based on your needs:

- [Official SEGA Serial Protocol](serial/index.md)
- [AimeIO (Based on Segatools)](aimeio/index.md)

Both methods have their pros and cons.
In the current **firmware version 2025040400**, it is more recommended to use the **Official SEGA Serial Protocol**.

Before starting the configuration, please make sure you have prepared a **game environment that can run normally with network connectivity**.

## Differences Between the Two Methods

### Official SEGA Serial Protocol

When using the **Official SEGA Serial Protocol**, the logical behavior of the card reader remains identical to the official device.

However, please be aware of the following issues:

::: warning
- The configuration process is relatively complicated, often requiring troubleshooting serial port related issues on Windows.
- If the card reader fails to communicate successfully with the game for any reason, the game will directly disconnect from the network.
- Many private servers are not connected to the official SEGA AimeDB. When scanning `Amusement IC` cards using the serial protocol, you might get an incorrect card number (usually starting with `0008`).

If you need to get the **completely correct card number** when scanning `Amusement IC` cards, please switch to the **AimeIO** method and ensure that the **card reader firmware version is ≥ 2025040400**.
:::

### AimeIO (Based on Segatools)

The advantages of using the **AimeIO** method to connect to the game include:

- Supports hot-swapping the card reader while the game is running.
- Slightly faster card reading speed compared to the serial protocol.
- Can coexist with the Enter key swiping method.
- The configuration process is simple, requiring no handling of Windows serial port settings. It can be configured and used immediately after connection.
- Exclusive feature:
  **Supports bypassing the server to directly read the correct card number of an `Amusement IC` card and pass it into the game.**

However, due to the inherent limitations of Segatools, the following behaviors cannot be properly implemented:

::: warning
- When using `Amusement IC` cards, **you cannot log in to official SEGA servers** (such as SDGA, SDGS, etc.).
  Local and private servers are not affected.
- Only a portion of Segatools support reading **non-`Amusement IC` `Bandai Namco Passport`, `BANA PASSPORT` cards**. How to distinguish:
  - There is no Amusement IC logo on the card.
  - The card number is a **20-digit number starting with 3**.
  - The back of the card is in English, Korean, or Chinese.
- Some Segatools have incomplete support or implementation issues for all [FeliCa](https://en.wikipedia.org/wiki/FeliCa) cards, including `Amusement IC`.

If various abnormal card reading issues occur in the game when swiping FeliCa cards like `Amusement IC`, `Hime`, etc., it is recommended to use a different set of Segatools or simply switch to the **Official SEGA Serial Protocol** for connection.
:::