import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub, faTwitter, faStackExchange } from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  {
    faIcon: faEnvelope,
    alt: "Email",
    url: "mailto:leopold.talirz@gmail.com",
  },
  {
    faIcon: faLinkedin,
    alt: "Linkedin",
    url: "https://www.linkedin.com/in/leopold-talirz-85a4937a/",
  },
  {
    faIcon: faTwitter,
    alt: "Twitter",
    url: "https://twitter.com/ltalirz",
  },

  {
    faIcon: faGithub,
    alt: "GitHub",
    url: "https://github.com/ltalirz",
  },

  {
    label: 'Google Scholar',
    href: 'https://scholar.google.ch/citations?user=iTS-CHwAAAAJ',
  },
  {
    faIcon: faStackExchange,
    alt: 'Stack Exchange',
    url: 'https://mattermodeling.stackexchange.com/users/873/leopold-talirz',
  },
];

export default socialLinks;
