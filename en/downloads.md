# Download Center

Here you can find all the download links and web tools included in this documentation.

## HINATA Client

HINATA Client is a Windows desktop tool that helps deploy HINATA AimeIO or serial configurations quickly. See [Configure SEGA Games Using HINATA Client](/en/game-setting/sega/hinata-client/) for detailed instructions.

<Links
  :grid="2"
  :items="[
    {
      name: 'HINATA Client Mainland China Download',
      link: 'https://gh-proxy.org/https://github.com/nerimoe/hinata_client-pub/releases/latest/download/hinata_client-win-setup.exe',
      linkText: 'Download Now'
    },
    {
      name: 'HINATA Client Global Download',
      link: 'https://github.com/nerimoe/hinata_client-pub/releases/latest/download/hinata_client-win-setup.exe',
      linkText: 'Download Now'
    }
  ]"
/>

## HINATA Go

HINATA Go is a cross-platform NFC card tool for viewing and managing cards, using card reader mode, and managing HINATA devices. See [HINATA Go documentation](/en/go/) for details.

<div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; margin: 16px 0;">
  <a href="https://apps.apple.com/app/id6760301105" target="_blank" rel="noopener noreferrer">
    <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" style="height: 40px;" class="no-zoom" />
  </a>
  <a href="https://github.com/nerimoe/hinata_go/releases" target="_blank" rel="noopener noreferrer">
    <img src="/assets/download-on-android.svg" alt="Download APK for Android" style="height: 40px;" class="no-zoom" />
  </a>
  <a href="https://go.neri.moe" target="_blank" rel="noopener noreferrer">
    <img src="/assets/open-on-web.svg" alt="Launch App on Web Browser" style="height: 40px;" class="no-zoom" />
  </a>
</div>

## Files and Links for SEGA Games

### AimeIO DLL

The HINATA AimeIO DLL lets compatible SEGA games use a HINATA card reader through Segatools. See the [AimeIO configuration guide](/en/game-setting/sega/manual/aimeio/) for details.

<Links
  :grid="2"
  :items="[
    {
      name: 'hinata.dll Mainland China Download',
      desc: 'HINATA AimeIO DLL',
      link: 'https://gitee.com/nerimoe/hinata-pub/raw/master/hinata.dll',
      linkText: 'Download Now'
    },
    {
      name: 'hinata.dll Global Download',
      desc: 'HINATA AimeIO DLL',
      link: 'https://github.com/nerimoe/hinata-neo-pub/raw/refs/heads/master/hinata.dll',
      linkText: 'Download Now'
    }
  ]"
/>

### Supported Segatools (banafix)

If you are not using `fufubot_segatools`, download supported Segatools here to support some Banapass-compatible cards. See the [AimeIO configuration guide](/en/game-setting/sega/manual/aimeio/) for usage instructions.

<Links
  :items="[
    {
      name: 'Project-HINATA/segatools-banafix',
      link: 'https://github.com/Project-HINATA/segatools-banafix/releases',
      linkText: 'Open Releases'
    }
  ]"
/>

### Remote Card Swiping Service Webpage

AimeIO Sender works with the AimeIO extension to swipe remotely by entering an Access Code on the webpage. See [AimeIO Extension Features](/en/game-setting/sega/manual/aimeio/extension) for details.

<Links
  :items="[
    {
      name: 'AimeIO Sender',
      link: 'https://aime-portal.neri.moe/',
      linkText: 'Click to Visit'
    }
  ]"
/>

## Files for Bandai Namco Games

### CardIO

`cardio.dll` is used in Bandai Namco game environments that support the CardIO protocol, primarily Taiko no Tatsujin. See the [Bandai Namco game configuration guide](/en/game-setting/bandai-namco/) for details.

<Links
  :items="[
    {
      name: 'cardio.dll',
      link: 'https://github.com/AkaiiKitsune/tal-cardreader/releases/download/0.1.0/cardio.dll',
      linkText: 'Download Now'
    }
  ]"
/>

## libhinata-rs

libhinata-rs is a Rust library for communicating with HINATA and HINATA Lite. See the [libhinata-rs usage guide](/en/integration/rustlib/) for details.

<Links
  :items="[
    {
      name: 'libhinata-rs Repository',
      link: 'https://github.com/nerimoe/hinata-rs',
      linkText: 'Click to Visit'
    }
  ]"
/>
