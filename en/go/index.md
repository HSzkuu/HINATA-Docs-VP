# HINATA Go

<Links
  :items="[
    {
      name: 'HINATA Go Repository',
      link: 'https://github.com/Project-HINATA/hinata_go',
      linkText: 'Click to Visit'
    }
  ]"
/>

## What is HINATA Go?

HINATA Go is a multi-platform NFC card tool that supports card information viewing (Normal Mode) and card reader mode (Sender Mode):
* **Card Information Viewer (Normal Mode)**: Scan cards via the built-in NFC or a connected HINATA Card Reader to check balances, transaction histories, and detailed card info for transit cards (Japanese transit cards, China T-Union) and various arcade/amusement cards.
* **Card Reader Mode (Sender Mode)**: Configure and select a game instance to automatically send swiped card numbers to target games, supporting SEGA games (AimeIO), Konami games (SpiceAPI), and more.
* **Card Management**: Organize your cards using folders, keep track of swipe history, and import or export card data.
* **Hardware Management**: Connect to a physical HINATA card reader to [configure settings and perform OTA firmware updates](/en/configuration).

## OpenSource
<Links
  :items="[
    {
      name: 'Github',
      link: 'https://github.com/Project-HINATA/hinata_go',
      linkText: 'Project-HINATA/hinata_go'
    }
  ]"
/>

## Downloads & Access

<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin: 16px 0;">
  <a href="https://apps.apple.com/app/id6760301105" target="_blank" rel="noopener noreferrer">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style="height: 40px;" />
  </a>
  <a href="https://github.com/nerimoe/hinata_go/releases" target="_blank" rel="noopener noreferrer">
    <img src="/assets/download-on-android.svg" alt="Download APK for Android" style="height: 40px;" />
  </a>
  <a href="https://go.neri.moe" target="_blank" rel="noopener noreferrer">
    <img src="/assets/open-on-web.svg" alt="Launch App on Web Browser" style="height: 40px;" />
  </a>
</div>

## Interface

![hinata-go-ui](assets/ui.jpg)

As shown in the figure, after installing and opening the application, the UI interface should look like this.

## Features

<Links
  :items="[
    {
      name: 'Card Information Viewer (Normal Mode)',
      link: 'features/read-card-info',
    }
  ]"
/>
<Links
  :items="[
    {
      name: 'Card Reader Mode (Sender Mode)',
      link: 'features/game-connection',
    }
  ]"
/>
<Links
  :items="[
    {
      name: 'Configure & Update HINATA Card Reader',
      link: '/en/configuration',
    }
  ]"
/>
<Links
  :items="[
    {
      name: 'Card Management',
      link: 'features/cards',
    }
  ]"
/>
