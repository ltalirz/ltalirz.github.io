const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const repoName = 'ltalirz.github.io';
const repoUrl = `https://github.com/ltalirz/${repoName}`;
const homePageURL = 'https://ltalirz.github.io';

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Leopold Talirz',
  tagline: 'Computational Materials Scientist',
  url: homePageURL,
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ltalirz', // Usually your GitHub org/user name.
  projectName: repoName, // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        // },
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl:
            repoUrl + '/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Leopold',
        logo: {
          alt: 'Leopold Talirz',
          src: 'img/logo.jpeg',
        },
        items: [
          { to: "projects/", label: "Projects", position: "left" },
          { to: "talks/", label: "Talks", position: "left" },
          { to: "https://scholar.google.ch/citations?user=iTS-CHwAAAAJ", label: "Publications", position: "left" },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: "https://drive.google.com/file/d/1pHJydcaijzC3NMDQpE_3Hh9zSorglciV/view?usp=sharing",
            label: "CV",
            position: "right",
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contact',
            items: [
              {
                label: 'Email',
                href: 'mailto:leopold.talirz@gmail.com',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/leopold-talirz-85a4937a/',
              },

              {
                label: 'Twitter',
                href: 'https://twitter.com/ltalirz',
              },
            ],
          },
          {
            title: 'Profiles',
            items: [
              {
                label: 'Google Scholar',
                href: 'https://scholar.google.ch/citations?user=iTS-CHwAAAAJ',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ltalirz',
              },

              {
                label: 'Stack Exchange',
                href: 'https://mattermodeling.stackexchange.com/users/873/leopold-talirz',
              },
            ],
          },
          {
            title: 'Miscellaneous',
            items: [
              {
                href: repoUrl,
                label: 'PageSource',
                position: 'right',
              },
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Leopold Talirz. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
