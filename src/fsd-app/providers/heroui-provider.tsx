'use client';

import { HeroUIProvider as ComponentsProvider } from '@heroui/system';
import { ThemeProvider, type ThemeProviderProps } from 'next-themes';
import { useRouter } from 'next/navigation';

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function HeroUIProvider({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <ComponentsProvider navigate={router.push}>
      <ThemeProvider {...themeProps}>{children}</ThemeProvider>
    </ComponentsProvider>
  );
}
