# Modifying the port number required by the game

**If you don't need to switch between CHUNITHM and maimai/ONGEKI, and have no other special needs, you can ignore this section.**

This article is only for users who connect using the official serial protocol. If you modify some configuration files according to the tutorial below, but want to use `Virtual Reader (Enter)` or `AimeIO`, please restore the configuration files to their default configuration, otherwise they will not work.

## Introduction
   | Game | Default Port |
   | :---: | :---: |
   |maimai DX | COM1 |
   |ONGEKI | COM1 |
   |CHUNITHM | COM4 |

The above are the default port numbers for the three rhythm games, but they are **not fixed**. Users can modify the port number required by the game by modifying the configuration file.

Imagine a scenario where you only have one computer and one card reader, but you want to play multiple games. Since ONGEKI and maimai have the same game port number, you can set it up once and play by default. But since CHUNITHM's card reader port number is different from other games, this tutorial was born.

Currently, most SEGA games use `amdaemon`. The card reader related settings are controlled by `amdaemon`. Players can modify the card reader port number required by the game in the configuration file passed to `amdaemon`.

## File Modification
### File Introduction
The following are all the configuration files for `amdaemon` that will appear in a normal game file:
![amdcfg](assets/amdaemon_cfg.png)

* `config_client.json` and `config_server.json` are both related to the content delivery server settings and can be ignored in this article.
* `config_hook.json` is included with segatools and is used to forcibly overwrite some settings.
* `config_cvt.json` and `config_sp.json` are configuration files unique to **CHUNITHM**.
* `config_common.json` is a configuration file that all games have.

The port number setting we are looking for is stored in `config_common.json`, but for **CHUNITHM**, you need to edit `config_cvt.json` and `config_sp.json` depending on the cabinet model used at startup.

### Modification
Open `config_common.json` or `config_cvt/sp.json`, scroll down and you will find the `aime` entry:

![amdcfg2](assets/amdaemon_cfg2.png)

The `4` after `"port": 4` is what we need to modify. We can change it to another port number that is not the same as **other port numbers used by the official setup**.

### What are "other port numbers used by the official setup"?

For example, in **CHUNITHM**, SEGA officially uses `COM1` to connect the *Ground Slider* (ground touch panel), so you cannot use `COM1` when modifying the card reader port number.

The following are the officially used port numbers (excluding the card reader) for common games:

   | Game | Occupied Port and Purpose |
   | :---: | :---: |
   |maimai DX | COM2: VFD screen<br>COM3 & COM4: 1P & 2P touch screen<br>COM21 & COM23: Light panels |
   |ONGEKI | COM2: VFD screen<br>COM3: Light panel |
   |CHUNITHM<br>( SP mode ) | COM1: Touch panel<br>COM2: VFD screen<br>COM20 & COM21: Light panels |
   |CHUNITHM<br>( CVT mode ) | COM1: Touch panel<br>COM2 & COM3: Light panels |

The above port numbers cannot be used for the card reader port.

## Use Case

I only have one card reader and one computer, but I want to switch between CHUNITHT and maimai.
Then you can:
1. Edit maimai's `config_common.json` and change the card reader port number to `COM7`. 
2. Open CHUNITHM's `config_cvt/sp.json` and change the card reader port number to `COM7` as well.
3. Finally, go to the device manager, change the actual port number of the card reader to `COM7`, and re-plug it.

This way, you don't need to switch the card reader port number when switching between the two games.