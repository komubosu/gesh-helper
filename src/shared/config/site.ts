export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Gesh Helper',
  description: 'Gesh Helper',
  navItems: [
    { label: 'Подъемники', href: '/' },
    { label: 'Бары', href: '/pubs' },
    { label: 'О нас', href: '/about' },
  ],
  links: {
    sponsor: 'а тут потом будет спонсор',
  },
};
