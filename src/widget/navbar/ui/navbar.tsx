import { Button } from '@heroui/button';
import { Link } from '@heroui/link';
import { NavbarBrand, NavbarContent, Navbar as NextUINavbar } from '@heroui/navbar';
import NextLink from 'next/link';

import { ThemeSwitch } from '@/features/switch-theme';
import { siteConfig } from '@/shared/config/site';
import { HeartFilledIcon, Logo } from '@/shared/ui/icons';

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth='xl' position='sticky'>
      <NavbarContent className='basis-1/5' justify='start'>
        <NavbarBrand as='li' className='max-w-fit gap-3'>
          <NextLink className='flex items-center justify-start gap-1' href='/'>
            <Logo />
            <p className='font-bold text-inherit'>ACME</p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='basis-1 pl-4' justify='end'>
        <ThemeSwitch />
        <Button
          isExternal
          as={Link}
          className='bg-default-100 font-normal text-default-600 text-sm'
          href={siteConfig.links.sponsor}
          startContent={<HeartFilledIcon className='text-danger' />}
          variant='flat'
          isIconOnly
        />
      </NavbarContent>
    </NextUINavbar>
  );
};
