// import { Button } from '@heroui/button';
// import { Link } from '@heroui/link';
import { NavbarBrand, NavbarContent, Navbar as NextUINavbar } from '@heroui/navbar';
import NextLink from 'next/link';

// import { ThemeSwitch } from '@/features/switch-theme';
// import { siteConfig } from '@/shared/config/site';
// import { HeartFilledIcon } from '@/shared/ui/icons';
import { title } from '@/shared/ui/primitives';

export const Header = () => {
  return (
    <NextUINavbar maxWidth='full' position='static'>
      <NavbarContent>
        <NavbarBrand as='li' className='max-w-fit gap-3'>
          <NextLink className={title({ color: 'violet' })} href='/'>
            Gesh Helper
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      {/* <NavbarContent className='basis-1 pl-4' justify='end'>
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
      </NavbarContent> */}
    </NextUINavbar>
  );
};
