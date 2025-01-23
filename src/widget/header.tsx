// import { Button } from '@heroui/button';
// import { Link } from '@heroui/link';
import { NavbarBrand, NavbarContent, Navbar as NextUINavbar } from '@heroui/navbar';

// import { ThemeSwitch } from '@/features/switch-theme';
// import { siteConfig } from '@/shared/config/site';
// import { HeartFilledIcon } from '@/shared/ui/icons';
import { title } from '@/shared/ui/primitives';
import { MountainSnowIcon } from 'lucide-react';

export const Header = () => {
  return (
    <NextUINavbar maxWidth='full' position='static'>
      <NavbarContent>
        <NavbarBrand as='li' className='max-w-fit gap-3'>
          <MountainSnowIcon className='text-[#b249f8]' size={32} />
          <span className={title({ color: 'violet', size: 'sm' })}>GeshHelper</span>
        </NavbarBrand>
      </NavbarContent>
    </NextUINavbar>
  );
};
