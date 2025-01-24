'use client';

import { NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar } from '@heroui/navbar';
import { CloudAlertIcon, MountainSnowIcon, ThermometerIcon } from 'lucide-react';
import useSWR from 'swr';

import { fetcher } from '@/shared/api/fetcher';
import { baseApiURL } from '@/shared/model/env';
import { title } from '@/shared/ui/primitives';
import { Skeleton } from '@heroui/skeleton';

export const Header = () => {
  const { data, isLoading, error } = useSWR(baseApiURL, fetcher);

  return (
    <NextUINavbar maxWidth='full' position='static'>
      <NavbarContent className='!justify-between'>
        <NavbarBrand as='li' className='max-w-fit gap-3'>
          <MountainSnowIcon className='text-[#b249f8]' size={32} />
          <span className={title({ color: 'violet', size: 'sm' })}>GeshHelper</span>
        </NavbarBrand>

        <NavbarItem>
          {isLoading ? (
            <Skeleton className='w-14 rounded-lg'>
              <div className='h-8' />
            </Skeleton>
          ) : (
            <span className='inline-flex gap-1 font-bold text-[24px] text-base text-slate-300'>
              {error ? <CloudAlertIcon className='text-red-500' /> : data?.temp}
              <ThermometerIcon />
            </span>
          )}
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};
