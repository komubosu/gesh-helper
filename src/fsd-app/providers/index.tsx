import { HeroUIProvider } from './heroui-provider';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <HeroUIProvider themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>{children}</HeroUIProvider>;
};
