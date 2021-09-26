const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'Leopold Talirz',
  tagline: 'Computational Materials Scientist',
  url: 'https://ltalirz.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ltalirz', // Usually your GitHub org/user name.
  projectName: 'ltalirz.github.io', // Usually your repo name.

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
            'https://github.com/ltalirz/ltalirz.github.io/edit/main/website/blog/',
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
          // { to: "projects/", label: "Projects", position: "left" },
          { to: "presentations/", label: "Presentations", position: "left" },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/ltalirz/ltalirz.github.io',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: "https://drive.google.com/file/d/0B7lz1BqbSo58aHY4X004VDNObDA/view?resourcekey=0-nkoC7Sk1isZb0Hpffo3vQg",
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
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Leopold Talirz. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
