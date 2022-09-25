module.exports = {
  siteMetadata: {
    title: `YajaDoc`,
    siteUrl: `https://yoursite.com`,
    description: `Política de privacidad, términos y condiciones`,
    components: {
      appbar: {
        position: "sticky",
        links: [
          {
            title: "Política de privacidad",
            url: "/doc1",
          },
          {
            title: "Términos y condiciones",
            url: "/doc2",
          },
        ],
      },
      footer: {
        copyright: "www.yajaxal.com",
        columns: [
          {
            heading: "Column 1",
            links: [
              {
                title: "Link 1",
                url: "#",
              },
              {
                title: "Link 2",
                url: "#",
              },
              {
                title: "Link 3",
                url: "#",
              },
            ],
          },
          {
            heading: "Column 2",
            links: [
              {
                title: "Link A",
                url: "#",
              },
              {
                title: "Link B",
                url: "#",
              },
              {
                title: "Link C",
                url: "#",
              },
            ],
          },
          {
            heading: "Column 3",
            links: [
              {
                title: "Link x",
                url: "#",
              },
              {
                title: "Link y",
                url: "#",
              },
              {
                title: "Link z",
                url: "#",
              },
            ],
          },
        ],
      },
    },
    templates: {
      home: {
        totalPosts: 3,
        template: "home",
      },
      pages: {
        path: "/content/pages/",
        template: "page",
      },
      posts: {
        path: "/content/posts/",
        pathPrefix: "posts",
        template: "post",
        filters: {
          tag: {
            pathPrefixTag: "tag",
            template: "tag",
            totalPosts: 3,
            pagination: {
              template: "resultsTag",
              resultsPerPage: 6,
            },
          },
        },
        pagination: {
          template: "resultsAll",
          resultsPerPage: 6,
        },
      },
    },
  },
  plugins: [
    { resolve: `gatsby-theme-sky-lite` },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Sky Lite`,
        short_name: `SkyLite`,
        start_url: `/`,
        background_color: `rebeccapurple`,
        theme_color: `rebeccapurple`,
        display: `standalone`,
        icon: `src/images/favicon.png`,
      },
    },
  ],
};
