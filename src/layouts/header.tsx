import { DialogTrigger } from '@radix-ui/react-dialog';

import ContactDialog from '@/components/contact-dialog';
import MobileMenu from '@/components/mobile-menu';
import Status from '@/components/status';
import ThemeSwitch from '@/components/theme-switch';

import EditIcon from '~/svg/edit.svg';

export default function Header() {
  return (
    <header className='header flex justify-between items-center pb-2'>
      <div>
        <Status />
      </div>
      <div className='flex gap-x-4'>
        <ThemeSwitch className='hidden md:flex' />
        <ContactDialog>
          <DialogTrigger>
            <EditIcon className='w-[26px] h-[26px] md:hidden stroke-[#29303E] dark:stroke-white' />
          </DialogTrigger>
        </ContactDialog>
        <MobileMenu />
      </div>
    </header>
  );
}
