module.exports = {
  siteName: `Gridsome Starter Blog`,
  titleTemplate: `%s - Gridsome`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        modulePath: `src/admin/index.js` 
      }
    } 
  ]
}
