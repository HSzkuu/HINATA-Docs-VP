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
          { text: 'Introduction & First Use', link: '/quickstart' },
          {
            text: 'Configuring the Game',
            items: [
              {
                text: 'SEGA Games',
                items: [
                  { text: 'Configuration Instructions', link: '/SEGA/' },
                  { text: 'Official Serial Protocol', link: '/SEGA/serial' },
                  { text: 'AimeIO', link: '/SEGA/aimeio' },
                  { text: 'In-Game Card Reader Test', link: '/SEGA/in_game_test' },
                  { text: 'Q & A', link: '/SEGA/qa' }
                ]
                
              },
              { text: 'KONAMI Games', link: '/KONAMI/' },
              { text: 'HINATA Control Panel', link: '/HCP/' },
              { text: 'Firmware Update', link: '/Update/' }
            ]
            
          }
        ]
        
      },
      { text: 'Purchase & Support', link: '/purchase_contact' }
    ]
  }
})
