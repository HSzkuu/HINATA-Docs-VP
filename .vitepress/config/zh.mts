import { defineConfig, type DefaultTheme } from 'vitepress'

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: "HINATA 使用文档",
  description: "泛用多功能街机游戏读卡器",

  themeConfig: {
    nav: [
      { text: '下载中心', link: '/downloads' }
    ],

    sidebar: [
      {
        text: '快速开始',
        collapsed: false,
        items: [
          {text: '开始使用', link: '/quickstart'},
          {text: '下载中心', link: '/downloads'}
        ]
        
      },
      {
        text: '配置游戏',
        collapsed: false,
        items: [
              {
                text: 'SEGA 游戏',
                collapsed: true,
                items: [
                  { text: 'GUI 配置（推荐）', 
                    collapsed: false,
                    items: [
                      { text: '配置说明', link:'/game-setting/sega/hinata-client/' },
                      { text: '高级设置', link: '/game-setting/sega/hinata-client/advanced' }
                    ]
                  },
                  { text: '手动配置', 
                    collapsed: true,
                    items: [
                      { text: '配置说明', link:'/game-setting/sega/manual/'},
                      { text: '官方串口协议', 
                        collapsed: true,
                        items: [
                          { text: '使用方法', link: '/game-setting/sega/manual/serial/'},
                          { text: '修改游戏所需的端口号', link: '/game-setting/sega/manual/serial/com_port'}
                        ]
                      },
                      { text: 'AimeIO',
                        collapsed: true,
                        items: [
                          { text: '使用方法', link: '/game-setting/sega/manual/aimeio/' },
                          { text: '扩展功能', link: '/game-setting/sega/manual/aimeio/extension' }
                        ] 
                      },
                    ] 
                  },
                  { text: '游戏内测试读卡器', link: '/game-setting/sega/in_game_test' },
                  { text: '常见问题', link: '/game-setting/sega/qa' }
                ]

              },
              { text: 'KONAMI 游戏', link: '/game-setting/konami/' },
              { text: 'Bandai Namco 游戏', link: '/game-setting/bandai-namco/' }
            ]
        },
        { text: 'HINATA Go', 
          collapsed: false,
          items: [
            { text: '开始使用 HINATA Go', link: '/go/' },
            { text: '功能', 
              collapsed: true,
              items: [
                { text: '读取卡片信息', link: '/go/features/read-card-info' },
                { text: '连接游戏作为读卡器', link: '/go/features/game-connection' },
                { text: 'HINATA 读卡器配置 & 更新', link: '/go/features/hinata-card-reader' },
                { text: '卡片管理', link: '/go/features/cards' }
              ]
            },
          ]
        },
        {
            text: '固件更新',
            collapsed: true,
            items: [
              { text: '更新方法', link: '/update/' },
              { text: '更新日志', link: '/update/changelog' }
            ]
        },
        { text: '生态',
          collapsed: true,
          items: [
            { text: 'PN532 直通生态', link: '/integration/pn532/' },
            { text: '二次开发', link: '/integration/rustlib/' }
          ]
        },
      { text: '购买 & 售后', link: '/purchase_contact' }
    ],

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})