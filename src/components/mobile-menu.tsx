'use client';

import Link from 'next/link';
import { useState } from 'react';

import Copyright from '@/components/copyright';
import ThemeSwitch from '@/components/theme-switch';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

import CloseIcon from '~/svg/close.svg';
import MenuIcon from '~/svg/menu.svg';

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => setIsMenuOpen(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger className='md:hidden'>
        <MenuIcon
          className='w-[26px] h-[26px] cursor-pointer'
          stroke='#29303E'
        />
      </SheetTrigger>
      <SheetContent
        side='top'
        className='min-h-full bg-menu backdrop-blur-[2px] flex flex-col gap-y-[54px] pt-9 pb-6 px-3'
      >
        <SheetHeader className='flex flex-row justify-between items-center'>
          <ThemeSwitch className='bg-section md:hidden' />

          <SheetClose className='m-0'>
            <CloseIcon className='w-6 h-6' stroke='#29303E' />
          </SheetClose>
        </SheetHeader>
        <ul className='flex flex-col gap-y-2.5'>
          <MenuItem href='#about' onClose={handleClose}>
            About
          </MenuItem>
          <MenuItem href='#experience' onClose={handleClose}>
            Experience & Education
          </MenuItem>
          <MenuItem href='#skills' onClose={handleClose}>
            Skills
          </MenuItem>
          <MenuItem href='#cv' onClose={handleClose}>
            CV
          </MenuItem>
          <MenuItem href='#years' onClose={handleClose}>
            Years
          </MenuItem>
          <MenuItem href='#projects' onClose={handleClose}>
            Projects
          </MenuItem>
          <MenuItem href='#portfolio' onClose={handleClose}>
            Latest Work
          </MenuItem>
          <MenuItem href='#contacts' onClose={handleClose}>
            Contacts
          </MenuItem>
        </ul>
        <SheetFooter className='mt-auto flex flex-col gap-y-6'>
          <Button className='text-base'>
            <span className='py-1 mx-auto'>Contact me</span>
          </Button>
          <Copyright />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

interface MenuItemProps {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}

const MenuItem = ({ href, children, onClose }: Readonly<MenuItemProps>) => {
  return (
    <li
      className='w-full text-end py-2 pr-5 rounded-xl transition-all hover:bg-[#95A3B6] hover:bg-opacity-30 active:opacity-90'
      onClick={() => onClose()}
    >
      <Link className='text-[#585D66]' href={href}>
        {children}
      </Link>
    </li>
  );
};
