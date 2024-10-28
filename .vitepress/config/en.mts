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
      { text: 'Coming Soon...', link: '/en/comingsoon/' },
    ]
  }
})
