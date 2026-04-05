import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: "HINATA Manual",
  description: "General-purpose Multifunctional Arcade Game Card Reader",

  themeConfig: {
    nav: [
      { text: 'Download Center', link: '/en/downloads' }
    ],

    sidebar: [
      {
        text: 'Quick Start',
        collapsed: false,
        items: [
          { text: 'Introduction & First Use', link: '/en/quickstart' },
          { text: 'Download Center', link: '/en/downloads' }
        ]

      },
      {
        text: 'Configure Games',
        collapsed: false,
        items: [
          {
            text: 'SEGA Games',
            collapsed: true,
            items: [
              {
                text: 'GUI Configuration (Recommended)',
                collapsed: false,
                items: [
                  { text: 'Configuration Instructions', link: '/en/game-setting/sega/hinata-client/' },
                  { text: 'Advanced Settings', link: '/en/game-setting/sega/hinata-client/advanced' }
                ]
              },
              {
                text: 'Manual Configuration',
                collapsed: true,
                items: [
                  { text: 'Configuration Instructions', link: '/en/game-setting/sega/manual/' },
                  {
                    text: 'Official Serial Protocol',
                    collapsed: true,
                    items: [
                      { text: 'Usage Instructions', link: '/en/game-setting/sega/manual/serial/' },
                      { text: 'Modifying Required COM Port', link: '/en/game-setting/sega/manual/serial/com_port' }
                    ]
                  },
                  {
                    text: 'AimeIO',
                    collapsed: true,
                    items: [
                      { text: 'Usage Instructions', link: '/en/game-setting/sega/manual/aimeio/' },
                      { text: 'Extension Features', link: '/en/game-setting/sega/manual/aimeio/extension' }
                    ]
                  },
                ]
              },
              { text: 'In-Game Card Reader Test', link: '/en/game-setting/sega/in_game_test' },
              { text: 'Q&A', link: '/en/game-setting/sega/qa' }
            ]

          },
          { text: 'KONAMI Games', link: '/en/game-setting/konami/' },
          { text: 'Bandai Namco Games', link: '/en/game-setting/bandai-namco/' }
        ]
      },
      {
        text: 'Modify Card Reader Settings',
        collapsed: false,
        items: [
          { text: 'HINATA Control Center', link: '/en/hcc/' }
        ]
      },
      {
        text: 'Firmware Update',
        collapsed: true,
        items: [
          { text: 'Update Instructions', link: '/en/update/' },
          { text: 'Changelog', link: '/en/update/changelog' }
        ]
      },
      {
        text: 'Ecosystem',
        collapsed: true,
        items: [
          { text: 'PN532 Passthrough Ecosystem', link: '/en/integration/pn532/' },
          { text: 'For Developer', link: '/en/integration/rustlib/' }
        ]
      },
      { text: 'Purchase & Support', link: '/en/purchase_contact' }
    ],

    docFooter: {
      prev: 'Previous Page',
      next: 'Next Page'
    },

    outline: {
      label: 'On this page'
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: 'Language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode'
  }
})
