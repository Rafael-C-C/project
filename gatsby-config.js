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
            url: "/posts/blog-post-3",
          },
          {
            title: "Términos y condiciones",
            url: "/posts/blog-post-2",
          },
        ],
      },
      footer: {
        copyright: "www.yajaxal.com",
        columns: [
          {
            heading: "Redes sociales",
            links: [
              {
                title: "Facebook",
                url: "https://www.facebook.com/Yajadoc",
              },
              {
                title: "Twitter",
                url: "https://twitter.com/IMAC_AC",
              },
              {
                title: "Youtube",
                url: "https://www.youtube.com/channel/UCFNb73tmtkYArn_DpGyyX3A",
              },
              {
                title: "LinkedIn",
                url: "https://www.linkedin.com/company/2609786/"
              }
            ],
          },
          {
            heading: "Sitios asociados",
            links: [
              {
                title: "IMAC",
                url: "https://imac.org.mx/",
              },
              {
                title: "Contacto",
                url: "https://imac.org.mx/home/contacto/",
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
        icon: `src/images/YAJALOGO.png`,
      },
    },
  ],
};
