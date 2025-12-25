# Common Questions (SEGA)

## Q: Why can the game connect to the network before using the reader, but cannot connect after using it?
**A:**  
After closing Segatools' simulated reader (Aime hook), if the game fails to detect a real reader, it will directly determine this as an abnormality and disconnect from the network.  
Please check if the reader is correctly connected, and whether configurations such as port and mode are correct.

## Q: I have confirmed the reader is connected (lights can be controlled normally), but cannot swipe cards?
**A:**  
Please check if the reader is pressed against the surface of the ADX panel, or if the bottom is touching metal.  
If the above situation exists, please use **non-metallic materials** to raise the reader, or move it to another position before trying again.

## Q: The card number read in the game (starting with 0008) is different from the number printed on the back of the official card?
**A:**  
When using the **SEGA official serial protocol**, the card number obtained when swiping `Amusement IC` cards depends on whether the server correctly implements AimeDB.

- Official servers or servers that correctly implement AimeDB (such as Rin server) can normally obtain card numbers  
- Servers that do not correctly access AimeDB will return incorrect card numbers starting with `0008`

Solutions:
- Change servers  
- Or switch to the **new AimeIO connection method**

## Q: What should I do if the reader has too few features / has bugs?
**A:**  
Functional suggestions or bug feedback should be directly raised in the support group or via private chat.  
After confirming it is a software issue, it will be repaired as soon as possible.

## Q: What should I do if I cannot swipe cards?
**A:**  
Please troubleshoot according to the game's prompt messages:

### 1. `筐体のデータが古いバージョンです` (Cabinet data is from an older version)

Please confirm if you have played **higher version** games before.  
You can also enter the server dashboard interface to check (taking Rin server as an example):

![rin_ver](assets/rin_ver.png)

Please ensure the game version matches the server configuration. If necessary, modify the version number to the corresponding version or lower.

### 2. `このモードでは本バージョンのプレイデータが存在しない Aime は使用できません` (Aime with no play data for this version cannot be used in this mode)

Please confirm if **Event Mode** is enabled.  
New accounts cannot be registered in Event Mode.

Taking SDHD (after CHUNITHM NEW version) as an example:

![event_mode](assets/event_mode.png)

Please change **イベントモード** to **通常モード**.

### 3. `通信に失敗しました` (Communication failed)

Please confirm the following:

- Whether the game has correctly connected to the network  
- Whether the KeychipID is filled in correctly  

![keychip](assets/keychip.png)

For KeychipID acquisition method, please check the dashboard page of the server you are using. The following is an example of Rin server:

![keychip_rin](assets/keychip_rin.png)

Additionally, you need to confirm whether **the card type used matches the connection method**.

**Note**: Most compatible cards cannot be used when using **official server AimeDB**.  
If you cannot swipe cards when using the **AimeIO connection method**, please refer to:  
[AimeIO Usage Notes](aimeio.md#usage-notes)
