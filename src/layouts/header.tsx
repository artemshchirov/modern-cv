import ContactDialog from '@/components/contact-dialog';
import MobileMenu from '@/components/mobile-menu';
import Status from '@/components/status';
import ThemeSwitch from '@/components/theme-switch';
import { Button } from '@/components/ui/button';
import { DialogTrigger } from '@/components/ui/dialog';

import EditIcon from '~/svg/edit.svg';

export default function Header() {
  return (
    <header className='header flex justify-between items-center pb-2'>
      <div className='flex gap-x-[18px]'>
        <Status />
        <ContactDialog>
          <DialogTrigger asChild>
            <Button className='w-full dark:shadow-cv-btn-outer'>
              Contact me
            </Button>
          </DialogTrigger>
        </ContactDialog>
      </div>
      <div className='flex gap-x-4'>
        <ThemeSwitch />
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
