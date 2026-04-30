import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: "HINATA Manual",
  description: "General-purpose Multifunctional Arcade Game Card Reader",

  themeConfig: {
    nav: [
      { text: 'Download Center', link: '/en/downloads' },
      { text: 'QQ Group', link: 'https://qm.qq.com/q/uKIsTeNXyw' }
    ],

    sidebar: [
      {
        text: 'Quick Start',
        collapsed: false,
        items: [
          { text: 'Contents', link: '/en/guide' },
          { text: 'Usage', link: '/en/usage' },
          { text: 'Download Center', link: '/en/downloads' }
        ]
        
      },
      {
        text: 'Configure Games',
        collapsed: false,
        items: [
              { text: 'Contents', link: '/en/game-setting/' },
              {
                text: 'SEGA Games',
                collapsed: true,
                items: [
                  { text: 'GUI Configuration (Recommended)', 
                    collapsed: false,
                    items: [
                      { text: 'Configuration Instructions', link:'/en/game-setting/sega/hinata-client/' },
                      { text: 'Advanced Settings', link: '/en/game-setting/sega/hinata-client/advanced' }
                    ]
                  },
                  { text: 'Manual Configuration', 
                    collapsed: true,
                    items: [
                      { text: 'Configuration Instructions', link:'/en/game-setting/sega/manual/'},
                      { text: 'Official Serial Protocol', 
                        collapsed: true,
                        items: [
                          { text: 'Usage Instructions', link: '/en/game-setting/sega/manual/serial/'},
                          { text: 'Modify Required Game Port', link: '/en/game-setting/sega/manual/serial/com_port'}
                        ]
                      },
                      { text: 'AimeIO',
                        collapsed: true,
                        items: [
                          { text: 'Usage Instructions', link: '/en/game-setting/sega/manual/aimeio/' },
                          { text: 'Extension Features', link: '/en/game-setting/sega/manual/aimeio/extension' }
                        ] 
                      },
                    ] 
                  },
                  { text: 'In-Game Card Reader Test', link: '/en/game-setting/sega/in_game_test' },
                  { text: 'FAQ', link: '/en/game-setting/sega/qa' },
                  { text: 'Connect to KDX', link: '/en/kdx' }
                ]

              },
              { text: 'KONAMI Games', link: '/en/game-setting/konami/' },
              { text: 'Bandai Namco Games', link: '/en/game-setting/bandai-namco/' }
            ]
        },
        { text: 'HINATA Go', 
          collapsed: false,
          items: [
            { text: 'Get Started', link: '/en/go/' },
            { text: 'Features', 
              collapsed: true,
              items: [
                { text: 'Read Card Information', link: '/en/go/features/read-card-info' },
                { text: 'Connect to Arcade Games as a Card Reader', link: '/en/go/features/game-connection' },
                { text: 'Card Management', link: '/en/go/features/cards' }
              ]
            },
          ]
        },
        { text: 'Change Configuration', link: '/en/configuration' },
        {
            text: 'Firmware Update',
            collapsed: true,
            items: [
              { text: 'Update Instructions', link: '/en/update/' },
              { text: 'Changelog', link: '/en/update/CHANGELOG' }
            ]
        },
        { text: 'Ecosystem',
          collapsed: true,
          items: [
            { text: 'PN532 Passthrough Ecosystem', link: '/en/integration/pn532/' },
            { text: 'Rust HINATA Library', link: '/en/integration/rustlib/' }
          ]
        },
      { text: 'Purchase & Support', link: '/en/purchase_contact' }
    ],

    docFooter: {
      prev: 'Previous page',
      next: 'Next page'
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

    langMenuLabel: 'Languages',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Theme',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode'
  }
})
