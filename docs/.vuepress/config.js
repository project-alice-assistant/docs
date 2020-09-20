module.exports = {
  base: '',
  lang: 'en-US',
  title: 'ProjectAlice',
  description: 'A smart voice assistant that guarantees your privacy',
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
  themeConfig: {
    repo: 'project-alice-assistant/ProjectAlice',
    docsRepo: 'project-alice-assistant/docs',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 2,
    algolia: {
      apiKey: '831c5fdecb500d055d0646d921dd6b2b',
      indexName: 'ProjectAliceDocs'
    },
    nav: [
      {
        text: 'About Alice',
        link: '/about-alice/'
      },
      {
        text: 'Setup',
        link: '/setup/'
      },
      {
        text: 'Satellite setup',
        link: '/satsetup/'
      },
      {
        text: 'Using Alice',
        link: '/usage/'
      },
      {
        text: 'Skill Development',
        link: '/skill-development/'
      },
      {
        text: 'Core Development',
        link: '/core-development/'
      },
      {
        text: 'API',
        link: 'https://documenter.getpostman.com/view/7504420/SW7W59r7'
      },
      {
        text: 'Skill store',
        link: 'https://store.projectalice.io'
      },
      {
        text: 'Contributing',
        link: '/contribute/'
      },
      {
        text: 'Sponsors',
        link: '/sponsors/'
      },
      {
        text: 'Useful links',
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
  }
};
