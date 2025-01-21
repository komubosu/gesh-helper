import type { Viewport } from 'next';
import { Balsamiq_Sans } from 'next/font/google';

import '@/fsd-app/styles/globals.css';
import { Providers } from '@/fsd-app/providers';
import { cn } from '@/shared/lib/cn';
import { BottomNavbar } from '@/widget/bottom-navbar';
import { Header } from '@/widget/header';

export const balsamiqSans = Balsamiq_Sans({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-balsamiq-sans',
  weight: ['400', '700'],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang='ru'>
      <body className={cn('min-h-screen bg-background font-balsamiq-sans antialiased', balsamiqSans.variable)}>
        <Providers>
          <div className='relative flex h-screen flex-col'>
            <Header />
            <main className='flex-grow px-4'>{children}</main>
            <BottomNavbar />
          </div>
        </Providers>
      </body>
    </html>
  );
}
