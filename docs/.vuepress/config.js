module.exports = {
  plugins: {
    'fulltext-search': {},
    'vuepress-plugin-glossary': {},
    '@vuepress/pwa': {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: "New content is available",
          buttonText: "Refresh"
        },
        '/de/': {
          message: "Neue Inhalte sind verfügbar!",
          buttonText: "Aktualisieren"
        }
      }
    }
  },
  dest: '.dist',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'ProjectAlice',
      description: 'A smart voice assistant that guarantees your privacy',
    },
    '/de/': {
      lang: 'de-DE',
      title: 'ProjectAlice',
      description: 'Ein intelligenter Sprachassistent der dein Privatsphäre garantiert',
    }
  },
  head: [
    ['meta', { 'http-equiv': 'Content-Security-Policy', 'content': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self'; base-uri 'none'; form-action 'none';" }],
    ['link', { rel: 'apple-touch-icon', sizes: '144x144', href: `/icons/favicon-152x152.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '144x144', href: `/icons/favicon-144x144.png` }],
    ['link', { rel: 'mask-icon', href: '/icons/maskable_icon.png', color: '#000' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'referrer', content: 'no-referrer'}],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ProjectAlice' }],
    ['meta', { name: 'application-name', content: 'ProjectAlice Docs' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/favicon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000' }],
    ['meta', { name: 'theme-color', content: '#000' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  serviceWorker: true,
  theme: 'yuu',
  themeConfig: {
    yuu: {
      defaultDarkTheme: true,
      defaultColorTheme: 'blue'
    },
    logo: '/images/umbrella.png',
    repo: 'project-alice-assistant/ProjectAlice',
    docsRepo: 'project-alice-assistant/docs',
    docsDir: 'docs',
    editLinks: true,
    smoothScroll: true,
    sidebarDepth: 2,
    locales: {
      '/': {
        selectText: ' Languages',
        label: 'English',
        ariaLabel: 'Languages',
        editLinkText: 'Help us improve this page!',
        repoLabel: 'Contribute!',
        lastUpdated: 'Last Updated',
        nav: [
          {
            text: 'About Alice',
            link: '/about-alice/'
          },
          {
            text: 'Setup',
            items: [
              {
                text: 'Main unit setup',
                link: '/setup/'
              },
              {
                text: 'Satellite setup',
                link: '/satsetup/'
              }
            ]
          },
          {
            text: 'Usage',
            items: [
              {
                text: 'Using Alice',
                link: '/usage/'
              },
              {
                text: 'Using satellites',
                link: ''
              },
              {
                text: 'Skill store',
                link: 'https://store.projectalice.io'
              },
            ]
          },
          {
            text: 'Learn more',
            items: [
              {
                text: 'Contributing',
                link: '/contribute/'
              },
              {
                text: 'Get started with Pycharm',
                link: '/community-made/getting-started-pycharm'
              },
              {
                text: 'Skill development',
                link: '/skill-development/'
              },
              {
                text: 'Core development',
                link: '/core-development/'
              },
              {
                text: 'API',
                link: 'https://documenter.getpostman.com/view/7504420/SW7W59r7'
              },
            ]
          },
          {
            text: 'Sponsors',
            link: '/sponsors/'
          },
          {
            text: 'Links',
            link: '/links/'
          }
        ],
        sidebar: {
          '/about-alice/': [
            {
              title: 'About Alice',
              collapsable: false,
              children: [
                '',
                ['GLOSSARY', 'Glossary']
              ]
            }
          ],
          '/setup/': [
            {
              title: 'Setup',
              collapsable: false,
              children: [
                '',
                'requirements',
                'manual-install',
                'image-install',
                'preinstalled',
                'docker',
                'troubleshooting',
                'wakeword'
              ]
            }
          ],
          '/satsetup/': [
            {
              title: 'Satellite setup',
              collapsable: false,
              children: [
                '',
                'preinstalled',
                'manual-install',
                'troubleshooting'
              ]
            }
          ],
          '/usage/': [
            {
              title: 'Using Alice',
              collapsable: false,
              children: [
                '',
                'web-interface'
              ]
            }
          ],
          '/contribute/': [
            {
              title: 'Contribute',
              collapsable: false,
              children: [
                '',
                'code-guidelines'
              ]
            }
          ],
          '/skill-development/': [
            {
              title: 'Skill Development',
              collapsable: false,
              children: [
                '',
                'your-first-skill',
                'missing-slot-info',
                'talk-file',
                'dialog-template',
                'builtin-slots',
                'builtin-intents',
                'logging',
                'events',
                'widgets',
                'skill-configuration-file',
                'skill-download-suggestion',
                'publishing-to-skill-store',
                'new-language-support',
                'database-access'
              ]
            }
          ],
          '/core-development/': [
            {
              title: 'Core Development',
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          '/community-made/': [
            {
              title: 'By the community for the community',
              collapsable: false,
              children: [
                '',
                'getting-started-pycharm'
              ]
            }
          ]
        }
      },
      '/de/': {
        selectText: ' Sprachen',
        label: 'Deutsch',
        ariaLabel: 'Sprachen',
        editLinkText: 'Hilf uns diese Seite zu verbessern!',
        repoLabel: 'Mitwirken!',
        lastUpdated: 'Zuletzte aktualisiert',
        nav: [
          {
            text: 'Über Alice',
            link: '/de/about-alice/'
          },
          {
            text: 'Setup',
            items: [
              {
                text: 'Installation Haupteinheit',
                link: '/de/setup/'
              },
              {
                text: 'Installation Satellit',
                link: '/de/satsetup/'
              }
            ]
          },
          {
            text: 'Verwendung',
            items: [
              {
                text: 'Alice verwenden',
                link: '/de/usage'
              },
              {
                text: 'Satelliten verwenden',
                link: ''
              },
              {
                text: 'Skill Store',
                link: 'https://store.projectalice.io'
              },
            ]
          },
          {
            text: 'Learn more',
            items: [
              {
                text: 'Mitwirken',
                link: '/de/contribute/'
              },
              {
                text: 'Lege los mit Pycharm',
                link: '/de/community-made/getting-started-pycharm'
              },
              {
                text: 'Skill Entwicklung',
                link: '/de/skill-development/'
              },
              {
                text: 'Core Entwicklung',
                link: '/de/core-development/'
              },
              {
                text: 'API',
                link: 'https://documenter.getpostman.com/view/7504420/SW7W59r7'
              },
            ]
          },
          {
            text: 'Sponsoren',
            link: '/de/sponsors/'
          },
          {
            text: 'Links',
            link: '/de/links/'
          }
        ],
        sidebar: {
          '/de/about-alice/': [
            {
              title: 'Über Alice',
              collapsable: false,
              children: [
                '',
                ['GLOSSARY', 'Glossar']
              ]
            }
          ],
          '/de/setup/': [
            {
              title: 'Installation',
              collapsable: false,
              children: [
                '',
                'requirements',
                'manual-install',
                'image-install',
                'preinstalled',
                'docker',
                'troubleshooting',
                'wakeword'
              ]
            }
          ],
          '/de/satsetup/': [
            {
              title: 'Installation Satellit',
              collapsable: false,
              children: [
                '',
                'preinstalled',
                'manual-install',
                'troubleshooting'
              ]
            }
          ],
          '/de/usage/': [
            {
              title: 'Alice verwenden',
              collapsable: false,
              children: [
                '',
                'web-interface'
              ]
            }
          ],
          '/de/contribute/': [
            {
              title: 'Mitwirken',
              collapsable: false,
              children: [
                '',
                'code-guidelines'
              ]
            }
          ],
          '/de/skill-development/': [
            {
              title: 'Skill Entwicklung',
              collapsable: false,
              children: [
                '',
                'your-first-skill',
                'missing-slot-info',
                'talk-file',
                'dialog-template',
                'builtin-slots',
                'builtin-intents',
                'logging',
                'events',
                'widgets',
                'skill-configuration-file',
                'skill-download-suggestion',
                'publishing-to-skill-store',
                'new-language-support',
                'database-access'
              ]
            }
          ],
          '/de/core-development/': [
            {
              title: 'Core Entwicklung',
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          '/de/community-made/': [
            {
              title: 'Von der Community für die Community',
              collapsable: false,
              children: [
                '',
                'getting-started-pycharm'
              ]
            }
          ]
        }
      }
    }
  }
};
