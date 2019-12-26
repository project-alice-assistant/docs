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
    nav: [
      {
        text: 'About Alice',
        link: '/about-alice/'
      },
      {
        text: 'Set Up',
        link: '/set-up/'
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
        text: 'Contributing',
        link: '/contribute/'
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
      '/set-up/': [
        {
          title: 'Set Up',
          collapsable: false,
          children: [
            '',
            'requirements',
            'preinstalled'
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
            'logging',
            'events'
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
}
