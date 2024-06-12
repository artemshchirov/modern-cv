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

const menuLinks = [
  { href: '#about', text: 'About' },
  { href: '#experience', text: 'Experience & Education' },
  { href: '#skills', text: 'Skills' },
  { href: '#cv', text: 'CV' },
  { href: '#years', text: 'Years' },
  { href: '#projects', text: 'Projects' },
  { href: '#portfolio', text: 'Latest Work' },
  { href: '#contacts', text: 'Contacts' },
];

export default function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => setIsMenuOpen(false);

  return (
    <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
      <SheetTrigger className='md:hidden'>
        <MenuIcon className='w-[26px] h-[26px] cursor-pointer stroke-[#29303E] dark:stroke-white' />
      </SheetTrigger>
      <SheetContent
        side='top'
        className='md:hidden min-h-full bg-menu dark:bg-menu-dark backdrop-blur-[4px] flex flex-col gap-y-[54px] pt-9 pb-6 px-3'
        isShowOverlay={false}
      >
        <SheetHeader className='flex flex-row justify-between items-center'>
          <ThemeSwitch className='bg-section md:hidden' />
          <SheetClose className='m-0'>
            <CloseIcon className='w-6 h-6 stroke-[#29303E] dark:stroke-white' />
          </SheetClose>
        </SheetHeader>
        <MenuLinks onClose={handleClose} />
        <SheetFooter className='mt-auto flex flex-col gap-y-6'>
          <Button className='text-base shadow-menu-btn-outer-dark dark:shadow-btn-outer'>
            <span className='py-1 mx-auto font-medium '>Contact me</span>
          </Button>
          <Copyright />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}

interface MenuLinksProps {
  onClose: () => void;
}

const MenuLinks = ({ onClose }: Readonly<MenuLinksProps>) => {
  return (
    <ul className='flex flex-col gap-y-2.5'>
      {menuLinks.map((link) => (
        <MenuLink key={link.href} href={link.href} onClose={onClose}>
          {link.text}
        </MenuLink>
      ))}
    </ul>
  );
};

interface MenuLinkProps {
  href: string;
  children: React.ReactNode;
  onClose: () => void;
}

const MenuLink = ({ href, children, onClose }: Readonly<MenuLinkProps>) => {
  return (
    <li className='flex text-end text-[#585D66] dark:text-[#D5D5D5] rounded-xl transition-all hover:bg-[#95A3B6]/30 dark:hover:bg-menu-active-dark active:opacity-90'>
      <Link className='w-full py-2 pr-5' href={href} onClick={() => onClose()}>
        {children}
      </Link>
    </li>
  );
};
