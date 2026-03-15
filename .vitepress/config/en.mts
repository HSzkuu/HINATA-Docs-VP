import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
  lang: 'en-US',
  title: "HINATA Manual",
  description: "General-purpose Multifunctional Arcade Game Card Reader",

  themeConfig: {
    nav: [
    ],

    sidebar: [
      {
        text: 'Quick Start',
        collapsed: false,
        items: [
          { text: 'Introduction & First Use', link: '/en/quickstart' }
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
                  { text: 'Configuration Instructions', link: '/en/game-setting/sega/' },
                  { text: 'Official Serial Protocol', 
                    collapsed: true,
                    items: [
                      { text: 'Usage Instructions', link: '/en/game-setting/sega/serial/'},
                      { text: 'Modifying Required COM Port', link: '/en/game-setting/sega/serial/com_port'}
                    ]
                  },
                  { text: 'AimeIO',
                    collapsed: true,
                    items: [
                      { text: 'Usage Instructions', link: '/en/game-setting/sega/aimeio/' },
                      { text: 'Extension Features', link: '/en/game-setting/sega/aimeio/extension' }
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
        { text: 'Ecosystem',
          collapsed: true,
          items: [
            { text: 'PN532 Passthrough Ecosystem', link: '/en/integration/pn532/' },
            { text: 'For Developer', link: '/en/integration/rustlib/' }
          ]
        },
      { text: 'Purchase & Support', link: '/en/purchase_contact' }
    ]
  }
})
