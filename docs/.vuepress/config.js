module.exports = {
  title: "Beast",
  description: "The official website of MIT East Campus 2E. Welcome!",
  head: [
    ["link", { rel: "icon", href: `/beast-logo.png` }]
  ],
  dest: "./dist",
  base: "@",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Meet the Beasties", link: "/beasties/" },
      { text: "Murphy Book", link: "/murphy/" },
    ],
    sidebar: {
      '/murphy/': genSidebarConfig('Menu')
    },
    lastUpdated: 'Last Updated'
  },

  markdown: {
    anchor: { permalink: false },
    config: md => {
      md.use(require("markdown-it-katex"));
    }
  },

  resolve: {
    alias: {
      '@': resolve('TODO')
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        '',
        'traditions',
        'recipes',
        'playlists',
        'gallery',
      ]
    }
  ]
}
