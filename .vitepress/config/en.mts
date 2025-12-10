import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
const pkg = require('vitepress/package.json')

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
        items: [
          { text: 'Introduction & First Use', link: '/en/quickstart' },
          {
            text: 'Configure Games',
            items: [
              {
                text: 'SEGA Games',
                items: [
                  { text: 'Configuration Instructions', link: '/en/SEGA/' },
                  { text: 'Official Serial Protocol', link: '/en/SEGA/serial' },
                  { text: 'Modifying Required COM Port for Games', link: '/en/SEGA/com_port'},
                  { text: 'AimeIO', link: '/en/SEGA/aimeio' },
                  { text: 'In-Game Card Reader Test', link: '/en/SEGA/in_game_test' },
                  { text: 'Q&A', link: '/en/SEGA/qa' }
                ]
                
              },
              { text: 'KONAMI Games', link: '/en/KONAMI/' },
              { text: 'Bandai Namco Games', link: '/en/BANA/' }
            ]
          },
          { text: 'HINATA Control Center', link: '/en/HCC/' },
          { text: 'PN532 Passthrough Ecosystem', link: '/en/PN532/' },
          {
            text: 'Firmware Update',
            items: [
              { text: 'Update Instructions', link: '/en/Update/' },
              { text: 'Changelog', link: '/en/Update/CHANGELOG' }
            ]
          }
        ]
        
      },
      { text: 'Purchase & Support', link: '/en/purchase_contact' }
    ]
  }
})
