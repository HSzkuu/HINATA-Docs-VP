// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { 
  NolebaseEnhancedReadabilitiesMenu, 
  NolebaseEnhancedReadabilitiesScreenMenu, 
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'
import { 
  NolebaseInlineLinkPreviewPlugin, 
} from '@nolebase/vitepress-plugin-inline-link-preview/client'
import '@nolebase/vitepress-plugin-inline-link-preview/client/style.css'

import {  
  NolebaseHighlightTargetedHeading,  
} from '@nolebase/vitepress-plugin-highlight-targeted-heading/client'

import '@nolebase/vitepress-plugin-highlight-targeted-heading/client/style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu), 
      // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
      'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu), 
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
      'layout-top': () => [ 
        h(NolebaseHighlightTargetedHeading), 
      ],
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.use(NolebaseInlineLinkPreviewPlugin) 
    // ...
  }
} satisfies Theme
