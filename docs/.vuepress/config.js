module.exports = {
	base: '/docs/',
	lang: 'en-US',
	title: 'ProjectAlice',
	description: 'A frontend library to develop zoomable user interfaces',
	head: [
		['link', { rel: 'apple-touch-icon', sizes: '180x180', href: `/icons/apple-touch-icon.png` }],
		['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: `/icons/favicon-32x32.png` }],
		['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: `/icons/favicon-16x16.png` }],
		['meta', { name: 'apple-mobile-web-app-title', content: 'ProjectAlice' }],
		['meta', { name: 'application-name', content: 'ProjectAlice Docs' }],
	  ],
	serviceWorker: true,
	themeConfig: {
	  repo: 'project-alice-powered-by-snips/ProjectAlice',
	  docsRepo: 'project-alice-powered-by-snips/docs',
	  docsDir: 'docs',
	  editLinks: true,
	  sidebarDepth: 2,
	  nav: [
		{
		  text: 'Contributing',
		  link: '/contribute/'
		},
		{
			text: 'Module Development',
			link: '/module-development/'
		  }
	  ],
	  sidebar: {
		'/contribute/': [
			{
			  title: 'Contribute',
			  collapsable: false,
			  children: [
				''
			  ]
			}
		  ],
		'/module-development/': [
			{
			  title: 'Module Development',
			  collapsable: false,
			  children: [
				'',
				'logging'
			  ]
			}
		  ],
		}
	}
  }
