import type { Viewport } from 'next';
import { Balsamiq_Sans } from 'next/font/google';

import '@/fsd-app/styles/globals.css';
import { Providers } from '@/fsd-app/providers';
import { cn } from '@/shared/lib/cn';
import { Navbar } from '@/widget/navbar';

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
            <Navbar />
            <main className='container mx-auto max-w-7xl flex-grow px-6 pt-16'>{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
