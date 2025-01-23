'use client';

import { Button } from '@heroui/button';
import { BeerIcon, CableCarIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const BottomNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className='flex items-center gap-4 p-4 mobile:pb-8'>
      <Button
        className='h-16 flex-col gap-0 p-2'
        as={Link}
        href='/'
        variant={pathname === '/' ? 'solid' : 'light'}
        fullWidth
      >
        <CableCarIcon className='flex-shrink-0' size={24} />
        Подъемники
      </Button>
      <Button
        className='h-16 flex-col gap-0 p-2'
        as={Link}
        href='/bars'
        variant={pathname === '/bars' ? 'solid' : 'light'}
        fullWidth
      >
        <BeerIcon size={24} />
        Бары
      </Button>
    </nav>
  );
};
