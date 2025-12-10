# Connecting to the game via SEGA Official Serial Protocol

## Important Notes
Using the SEGA official serial card reader protocol requires disabling the reader hook in Segatools.  
If the game fails to connect to the card reader after disabling the hook (e.g., due to incorrect settings somewhere), the game will disconnect from the network. You need to fix the issue and restart the game.

## Reader Port Configuration

   |   Game    | Default Port |
   | :-------: | :--------: |
   | maimai DX |    COM1    |
   |  ONGEKI   |    COM1    |
   | CHUNITHM  |    COM4    |

1. First, confirm the **port number** of the game you are playing and write it down. The above are the default port numbers for common games. For other games that use amdaemon, you can [view or modify](com_port.md) it in `config_common.json`.

2. Next, we need to ensure that the port number for connecting the game to the card reader is not occupied by other devices.
   1. Open the Windows `Device Manager`. By default, devices are listed by type. As shown in the figure, check `Show hidden devices`:
   
   ![devmgr4](assets/devmgr4.png)
   
   2. **Unplug the card reader** and look for the `Ports` drop-down menu.

   ![devmgr3](assets/devmgr3.png)

   3. If you don't see the `Ports` drop-down menu, you can proceed to the next step.  
   If you do, expand it and check if any device is occupying the target port.
   4. If a device is occupying the port, right-click the device and select `Properties → Port Settings → Advanced`.
   
   ![devmgr2](assets/devmgr2.png)
   
   5. Change the COM port number **to another port** (e.g., COM255).
3. **Plug in the card reader** and go to the menu shown in the figure below (**View devices by container**).
   
   ![devmgr0](<../assets/devmgr0.png>)

4. Find **HINATA**.
   
   ![devmgr1](<../assets/devmgr1.png>)

5. Right-click `USB Serial Device`, and select `Properties → Port Settings → Advanced`.
6. Change the `COM Port Number` to the port number required by the corresponding game. Since the card reader uses the *USB CDC* class for serial communication, you normally do not need to modify the baud rate settings.
7. After completion, it is recommended to go back to listing devices by type, find the `Ports` drop-down menu, and check if the card reader port conflicts with other devices.
8. **After making changes, be sure to unplug and plug the card reader back in once. If this is your first time setting it up, please restart your computer once**, or disable and then re-enable the card reader's `USB Serial Device` in the Device Manager.


## Game Configuration
1. First, please make sure your game is **already connected to the network**. After entering the game, a **green globe icon** should be displayed. Otherwise, please set up the game's network connection first, which is not discussed in this article.
2. Open `segatools.ini` and modify it as follows:
   ```ini
   ;If there is no [aime] entry, please add it and its contents manually
   [aime]
   enable=0
   ;The purpose of enable=0 is to disable the segatools reader hook and use the official serial IO. Please be sure to set it this way.**

   ;If there is an [aimeio] entry (e.g., using hinata's aimeio mode, as well as mageki or nageki)
   ;Add ";" in front to comment it out, or delete the entire section
   ;[aimeio]
   ;path=hinata.dll
   ;If the above entry exists, please be sure to delete it
   ```
3. Since the card reader uses the *USB CDC* class for serial communication, you normally do not need to modify the baud rate settings.
4. Start the game.

## Other Pages
* [Adjust light brightness in serial mode](../HCC/index.md)
* [Connecting to SEGA games via AimeIO](aimeio.md)
* [In-game card reader test](in_game_test.md)
* [KONAMI Game Settings](../KONAMI/index.md)