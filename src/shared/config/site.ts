export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Gesh Helper',
  description: 'Gesh Helper',
  navItems: [
    { label: 'Подъемники', href: '/' },
    { label: 'Бары', href: '/pubs' },
  ],
  links: {
    sponsor: 'а тут потом будет спонсор',
  },
};
