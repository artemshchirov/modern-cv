import MobileMenu from '@/components/mobile-menu';
import Status from '@/components/status';
import ThemeSwitch from '@/components/theme-switch';

import EditIcon from '~/svg/edit.svg';

export default function Header() {
  return (
    <header className='header flex justify-between items-center pb-2'>
      <Status />
      <div className='flex gap-x-4'>
        <ThemeSwitch className='hidden md:flex' />
        <EditIcon className='w-[26px] h-[26px] md:hidden' stroke='#29303E' />
        <MobileMenu />
      </div>
    </header>
  );
}
