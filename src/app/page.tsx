'use client';

import Head from 'next/head';
import Link from 'next/link';
import '@/lib/env';

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
// import MapPinIcon from '~/svg/map-pin.svg';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <section className='min-h-screen bg-gray-200 py-[36px] px-[12px]'>
        <header className='flex justify-between items-center'>
          <div className='max-w-max flex items-center gap-x-6 rounded-[100px] border-2 border-black py-[4px] pr-[28px] pl-[22px]'>
            <div className='w-[13px] h-[13px] rounded-full bg-lime-500 border border-white' />{' '}
            <p className='text-[16px] leading-[24px]'>Available</p>
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
                className='min-h-full flex flex-col pt-[36px] pb-[24px] px-[12px]'
              >
                <SheetHeader className='flex flex-row justify-between items-center'>
                  <div className='max-w-max py-[7px] px-[10px]  rounded-[100px] flex items-center gap-x-[12px] border-2 '>
                    <div className='w-[17px] h-[17px] rounded-full bg-[#4E565F] border border-black' />
                    <div className='w-[17px] h-[17px] rounded-full bg-white border border-gray-300' />
                  </div>
                  <SheetClose className='m-0'>
                    <CloseIcon className='w-[24px] h-[24px]' stroke='#29303E' />
                  </SheetClose>
                </SheetHeader>
                <div className=' flex flex-col gap-y-[10px] pt-[44px]'>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    About
                  </Link>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    Experience & Education
                  </Link>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    Skills
                  </Link>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    CV
                  </Link>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    Years
                  </Link>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    Projects
                  </Link>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    Latest Work
                  </Link>
                  <Link
                    href='#'
                    className='w-full text-[#585D66] text-end py-[10px] pr-[20px] transition rounded-[12px] hover:bg-[#95A3B6] active:opacity-80'
                  >
                    Contacts
                  </Link>
                </div>
                <SheetFooter className='mt-auto flex flex-col gap-y-[24px]'>
                  <Button type='submit'>Contact me</Button>
                  <p className='text-[#A5A9B0]'>© 2024 Ɐrtem</p>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        {/* <MapPinIcon className='w-[22px] h-[22px]' fill='#29303E' /> */}
      </section>
    </main>
  );
}
