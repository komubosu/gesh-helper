'use client';

import { Button } from '@heroui/button';
import { BeerIcon, CableCarIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { siteConfig } from '@/shared/config/site';

const mapIcons = {
  '/': <CableCarIcon className='flex-shrink-0' size={24} />,
  '/pubs': <BeerIcon className='flex-shrink-0' size={24} />,
};

export const BottomNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-4 p-4 mobile:pb-8'>
      {siteConfig.navItems.map(({ label, href }) => (
        <Button
          key={href}
          className='h-16 flex-col gap-2 p-2'
          as={Link}
          href={href}
          variant={pathname === href ? 'solid' : 'light'}
          fullWidth
        >
          {mapIcons[href as keyof typeof mapIcons] || null}
          {label}
        </Button>
      ))}
    </nav>
  );
};
