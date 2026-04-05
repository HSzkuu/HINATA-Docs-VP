# HINATA Client Advanced Settings

## Advanced Settings in AimeIO Mode

![aimeio-advanced](<assets/aimeio-advanced.png>)

### Remote Swiping Server Address (serverUrl)

Used to enable the **Remote Swiping Feature**.

#### What is the Remote Swiping Feature?

When you don't have a card reader or a physical Aime / BANA PASSPORT / Amusement IC card, setting this up allows you to swipe a card using only the card number. This is suitable for situations where there is no card reader or someone forgot their card and needs to log in to their account.

#### How to Use

1. Enter the following in **Remote Swiping Server Address (serverUrl)**:

```
wss://aime-ws.neri.moe/REPLACEME
```

2. Change `REPLACEME` to your preferred string, for example:

```
wss://aime-ws.neri.moe/cerisebouquet
```

3. Click **Apply Changes**.

After configuring, you can visit:

[https://aime-portal.neri.moe](https://aime-portal.neri.moe)

![aime-portal](</assets/aime-portal.png>)

Change the ReplaceME in the URL to the same string as your configuration, for example:

```
https://aime-ws.neri.moe/cerisebouquet
```

Then enter the **20-digit Access Code** and click **Send** to swipe remotely.

### Third-party AimeIO DLL Multiplexing (dllMux)

If you need to simultaneously use **built-in card readers on some controllers or other card readers/services that use AimeIO**, you can add DLLs here.

How to do it:

1. Click **Add DLL**.
2. Select the DLL file to be loaded.

For example, you can mount:

* `MU3Input.dll`
* `amnet.dll`
* `mageki.dll`
* `yubideck.dll`

Once added, HINATA will **load these AimeIO devices simultaneously** at runtime.


## Advanced Settings in COM Serial Mode

![serial-advanced](<assets/serial-advanced.png>)

### Specify Game COM Port

Used to specify the **card reader port number used by the game**.

If you need to switch between playing multiple SEGA rhythm games (such as **maimai DX / ONGEKI / CHUNITHM**),
you can manually specify the COM port recognized by the game here, for example: `COM7`.

After clicking **Apply Changes**, the game will communicate with the card reader through this port.

::: tip
It is recommended to use ports that are not occupied by official devices, such as `COM5` ~ `COM9`.
:::
