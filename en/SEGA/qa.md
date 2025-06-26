
# Frequently Asked Questions (SEGA)  

---

**Q: Why does the game lose network connection after I start using the card reader?**  
**A:** When Segatools' emulated card reader is disabled, the game disconnects from the network if no physical reader is detected. Verify that the card reader is properly connected and configured.  

---

**Q: The card reader appears connected (LEDs respond), but cards won’t scan.**  
**A:** Ensure the card is not placed directly against the ADX surface or metallic objects. Elevate the reader with non-metallic materials or reposition it.  

---

**Q: Official cards show incorrect numbers (starting with 0008) in-game instead of the printed ID.**  
**A:** When using the **Serial Protocol**, `Amusement IC` card numbers depend on the server’s AimeDB implementation. This works correctly only on servers with proper AimeDB support (e.g., Rin Server, official SEGA servers). Solutions:  
- Switch to a compatible server.  
- Use **AimeIO (firmware ≥ 2025040400)** to bypass server limitations.  

---

**Q: How do I request new features or report bugs?**  
**A:** Submit feature requests or bug reports directly in the support group or via private message. Software issues will be prioritized for fixes.  

---

**Q: How to troubleshoot card scanning failures?**  
**A:** Check in-game error messages:  

1. **筐体のデータが古いバージョンです** (Cabinet data is outdated):  
   - Confirm your game version matches the server’s supported version (e.g., in Rin Server’s dashboard):  
     ![rin_ver](assets/rin_ver.png)  
   - Adjust the version number in settings to match or fall below the server’s requirement.  

2. **このモードでは本バージョンのプレイデータが存在しない Aime は使用できません** (Aime accounts without play data cannot be used in this mode):  
   - Disable **Event Mode** (e.g., in CHUNITHM NEW+):  
     ![event_mode](assets/event_mode.png)  
     → Set **イベントモード** (Event Mode) to **通常モード** (Normal Mode).  

3. **通信に失敗しました** (Communication failed):  
   - Verify network connectivity and correct **KeychipID** entry (e.g., in `segatools.ini`):  
     ![keychip](assets/keychip.png)  
     - Retrieve KeychipID from your server dashboard (e.g., Rin Server):  
       ![keychip_rin](assets/keychip_rin.png)  
   - **Card/connection compatibility**:  
     - Most unofficial cards fail on **official AimeDB servers**.  
     - For AimeIO issues: [See troubleshooting](aimeio.md#important-notes).  

---