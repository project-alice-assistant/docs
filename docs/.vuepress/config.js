module.exports = {
  plugins: [
      'fulltext-search'
  ],
  base: '',
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
      description: 'A smart voice assistant that guarantees your privacy',
    }
  },
  head: [
    ['meta', { 'http-equiv': 'Content-Security-Policy', 'content': "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self'; base-uri 'none'; form-action 'none'; frame-ancestors 'none'" }],
    ['meta', { name: 'referrer', content: 'no-referrer'}],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `/icons/apple-touch-icon.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/icons/favicon-32x32.png` }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/icons/favicon-16x16.png` }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'ProjectAlice' }],
    ['meta', { name: 'application-name', content: 'ProjectAlice Docs' }]
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
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
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
                'glossary'
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
                'preinstalled',
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
                ''
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
          ]
        }
      },
      '/de/': {
        selectText: ' Sprachen',
        label: 'Deutsch',
        ariaLabel: 'Sprachen',
        editLinkText: 'Help us improve this page!',
        repoLabel: 'Contribute!',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: [
          {
            text: 'About Alice',
            link: '/de/about-alice/'
          },
          {
            text: 'Setup',
            items: [
              {
                text: 'Main unit setup',
                link: '/de/setup/'
              },
              {
                text: 'Satellite setup',
                link: '/de/satsetup/'
              }
            ]
          },
          {
            text: 'Usage',
            items: [
              {
                text: 'Using Alice',
                link: '/de/usage/'
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
                link: '/de/contribute/'
              },
              {
                text: 'Skill development',
                link: '/de/skill-development/'
              },
              {
                text: 'Core development',
                link: '/de/core-development/'
              },
              {
                text: 'API',
                link: 'https://documenter.getpostman.com/view/7504420/SW7W59r7'
              },
            ]
          },
          {
            text: 'Sponsors',
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
              title: 'About Alice',
              collapsable: false,
              children: [
                '',
                'glossary'
              ]
            }
          ],
          '/de/setup/': [
            {
              title: 'Setup',
              collapsable: false,
              children: [
                '',
                'requirements',
                'preinstalled',
                'troubleshooting',
                'wakeword'
              ]
            }
          ],
          '/de/satsetup/': [
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
          '/de/usage/': [
            {
              title: 'Using Alice',
              collapsable: false,
              children: [
                ''
              ]
            }
          ],
          '/de/contribute/': [
            {
              title: 'Contribute',
              collapsable: false,
              children: [
                '',
                'code-guidelines'
              ]
            }
          ],
          '/de/skill-development/': [
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
                'publishing-to-skill-store',
                'new-language-support',
                'database-access'
              ]
            }
          ],
          '/de/core-development/': [
            {
              title: 'Core Development',
              collapsable: false,
              children: [
                ''
              ]
            }
          ]
        }
      }
    }
  }
};
