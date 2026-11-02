# Emulate a Card

HINATA Go can hand a saved card to a HINATA card reader and emulate it: while emulating, the reader stops reading cards and answers as a card instead, so a phone, game, or another reader sees the same information as the original.

::: tip Use Cases
* **NDEF dataset**: open its links or text on a phone by holding the phone to the reader, without preparing a physical tag.
* **FeliCa card / Amusement IC**: present the same card number as the original, and the saved blocks when a reader asks for them, for testing or verification.
:::

::: warning ⚠️ Emulated cards cannot be used with official servers
Emulation only replays the information saved with the card. It does not include anything that needs authentication, and it cannot replace an official card on official networks.
:::

## What Emulation Gives You

| Emulated card | What works | What does not |
| :--- | :--- | :--- |
| NDEF dataset | Hold a phone to the reader to open the links in the dataset or read its text, with no physical tag needed. The tag is read-only, so a phone cannot write to it | Nothing: the whole dataset is presented |
| FeliCa card (including transit cards such as Suica and PASMO) | A reader sees the same card number as the original, and the blocks saved from the card, such as the balance and transaction history | Blocks that need authentication; blocks that were not saved when the card was read come back as zeros |
| Amusement IC | A reader sees the same card number (Access Code) and saved blocks as swiping the original card | Blocks that need authentication; blocks that were not saved come back as zeros |

Emulation replays **the data saved when the card was read**. To make it as close to the real card as possible, keep the card on the reader until reading finishes: if it leaves early, the remaining blocks are missing and emulate as empty.

## Supported Card Types

* **NDEF dataset**: create a new one, or save a scanned physical tag; an empty or oversized dataset cannot be emulated.
* **FeliCa card**: any FeliCa card, including transit cards such as Suica and PASMO. The card number must have been saved completely.
* **Amusement IC**: requires a completely saved Access Code.

::: info Note
Old Aime cards, China T-Union cards, NESiCA cards, and other similar types cannot be emulated yet.
:::

You can create an NDEF dataset from the add menu on the **Cards** page with **New NDEF dataset**; a scanned physical tag works too once it has been saved.

::: tip Reading an emulated NDEF dataset on iPhone
iPhone background reading mainly handles links; text and other content need an NFC app.
:::

## Requirements

| Requirement | Description |
| :--- | :--- |
| Reader | A connected HINATA / HINATA Lite card reader (USB, or WebHID in the browser) |
| Platform | Not available on iOS, which cannot drive a reader; the Android app and the web version (WebHID) are supported |
| Firmware | Reader firmware with emulation support. Older firmware reports an emulation failure, so [update the firmware](/en/update/) first |
| Card | A **saved** card of one of the supported types above |
| Version | HINATA Go 2.8.0 or later |

## Step-by-Step Instructions

### Step 1: Connect the Reader

Connect the HINATA reader in HINATA Go and confirm the device shows as connected. The reader does all the emulation work; the phone's own NFC is not involved. On Windows, macOS, and Linux use the [web version](https://go.neri.moe); on Android use the app.

### Step 2: Open the Card Details

Switch to the **Cards** section and open the saved card you want to emulate. The emulation entry only appears on saved cards.

### Step 3: Tap Emulate

Tap the **Emulate** button (contactless icon) in the bottom action bar. That bar also holds Save, Write, and Send, and wraps to two rows when there are many buttons.

The dialog is titled **Emulate NDEF tag** for an NDEF dataset and **Emulate card** for a FeliCa card or an Amusement IC.

### Step 4: Let the Other Device Read It

The dialog first shows "Preparing the reader", then:

* NDEF dataset: "Hold a phone to the reader", followed by "Phone connected, reading" once the phone connects.
* FeliCa card / Amusement IC: "Waiting for a reader", followed by "A reader is reading the card" once a reader starts.

Hold the phone or other reader against the HINATA reader.

* The reader pauses its normal card reading while emulating and resumes when emulation stops.
* Once the card has been read, the dialog shows how many times it was read. A reader that only reads the card number shows no reading state.
* Emulation keeps running until you tap **Stop**.

### Step 5: Stop Emulation

Tap **Stop** (the button shows "Stopping" meanwhile), then **Done** when it becomes available. The dialog cannot be dismissed by accident while emulating, and a back gesture stops emulation.

## When the Emulation Is Incomplete

Two warnings in the dialog explain how the emulated card differs from the real one:

* **This card was not fully read, so the emulation is incomplete: blocks that were not read return zeros.** The card was not saved in full, so the missing blocks read as zeros. Scan the card again and keep it on the reader until reading finishes to fill them in.
* **A reader's challenge (MAC, MAC_A) cannot be answered, so readers that authenticate the card reject it.** The MAC of a FeliCa Lite / Lite-S card (including an Amusement IC) cannot be forged, so a reader that verifies it will refuse the emulated card.

## Troubleshooting

| Message | What to do |
| :--- | :--- |
| Emulation requires a connected HINATA reader | No reader is connected, or the connection dropped. Reconnect the reader and reopen the card details |
| This card cannot be emulated | This type of card is not supported (see the note above), or its information was not saved completely |
| This dataset cannot be emulated | The dataset is empty, or its content is too large |
| This card was not fully read, so the emulation is incomplete: blocks that were not read return zeros | Scan the card again and keep it on the reader until reading finishes, so every block is saved |
| A reader's challenge (MAC, MAC_A) cannot be answered, so readers that authenticate the card reject it | A limit of Lite / Lite-S cards that shows up in the emulation dialog as expected; a reader that verifies the MAC cannot use an emulated card |
| The reader was disconnected | Emulation ends with the reader. Reconnect the reader and start again |
| Emulation failed. Check that the reader firmware supports emulation | The firmware lacks emulation support. [Update the firmware](/en/update/) and retry |
