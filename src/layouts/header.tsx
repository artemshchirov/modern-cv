import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';

// NOTE: You can import SVGs as React Components
import CloseIcon from '~/svg/close.svg';
import EditIcon from '~/svg/edit.svg';
import MenuIcon from '~/svg/menu.svg';

export default function Header() {
  return (
    <header className='header flex justify-between items-center pb-2'>
      <div className='max-w-max flex items-center gap-x-6 rounded-[100px] outline outline-2 outline-black py-1.5 pr-[30px] pl-6'>
        <div className='animate-pulse w-3.5 h-3.5 rounded-full bg-lime-400 outline outline-1 outline-white' />
        <p className='text-base'>Available</p>
      </div>
      <div className='flex gap-x-4'>
        <EditIcon className='w-[26px] h-[26px]' stroke='#29303E' />

        <Sheet>
          <SheetTrigger>
            <MenuIcon
              className='w-[26px] h-[26px] cursor-pointer'
              stroke='#29303E'
            />
          </SheetTrigger>
          <SheetContent
            side='top'
            className='min-h-full flex flex-col pt-9 pb-6 px-3'
          >
            <SheetHeader className='flex flex-row justify-between items-center'>
              <div className='max-w-max py-[9px] px-3  rounded-[100px] flex items-center gap-x-3 outline outline-2 outline-gray-500'>
                <div className='w-[18px] h-[18px] rounded-full bg-[#4E565F] outline outline-1 outline-black' />
                <div className='w-[18px] h-[18px] rounded-full bg-white outline outline-1 outline-gray-500' />
              </div>
              <SheetClose className='m-0'>
                <CloseIcon className='w-6 h-6' stroke='#29303E' />
              </SheetClose>
            </SheetHeader>
            <div className=' flex flex-col gap-y-2.5 pt-11'>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                About
              </Link>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                Experience & Education
              </Link>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                Skills
              </Link>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                CV
              </Link>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                Years
              </Link>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                Projects
              </Link>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                Latest Work
              </Link>
              <Link
                href='#'
                className='w-full text-[#585D66] text-end py-2.5 pr-5 transition rounded-xl hover:bg-[#95A3B6] active:opacity-80'
              >
                Contacts
              </Link>
            </div>
            <SheetFooter className='mt-auto flex flex-col gap-y-6'>
              <Button type='submit'>Contact me</Button>
              <p className='text-[#A5A9B0]'>© 2024 Ɐrtem</p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
