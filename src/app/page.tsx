'use client';

import Head from 'next/head';
import '@/lib/env';

import AvatarComponent from '@/components/avatar-component';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Header from '@/layouts/header';
import Section from '@/layouts/section';

// NOTE: You can import SVGs as React Components
import MapPinIcon from '~/svg/map-pin.svg';

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
    <main className='py-9 px-3 flex flex-col gap-y-7'>
      <Head>
        <title>Hi</title>
      </Head>

      <Header />

      <div className='grid grid-cols-[160px_auto] gap-4'>
        <Section
          aria-label='Profile Image'
          className='flex justify-center items-center outline outline-1 rounded-xl'
        >
          <div className='w-[120px] h-[120px] flex justify-center items-center rounded-full outline outline-1 outline-gray-500'>
            <AvatarComponent />
          </div>
        </Section>
        <div className='grid gap-y-3'>
          <Section className='flex flex-col outline outline-1 rounded-xl pl-[15px] py-[15px]'>
            <h1 className='text-base text-[#29303E] whitespace-nowrap'>
              Artem Shchirov
            </h1>
            <p className='text-sm text-[#60656E] whitespace-nowrap'>
              Full-Stack Developer
            </p>
          </Section>
          <Section className='flex flex-col gap-y-1 outline outline-1 rounded-xl px-[17px] pt-3.5 pb-3'>
            <h2 className='text-sm text-[#95A3B6] pl-[3px] whitespace-nowrap'>
              Location
            </h2>
            <div className='flex items-center gap-x-1'>
              <MapPinIcon className='w-[22px] h-[22px]' fill='#29303E' />
              <p className='text-base text-[#60656E] whitespace-nowrap'>
                Israel
              </p>
            </div>
          </Section>
        </div>
        <Section className='col-span-2 flex flex-col gap-y-5 outline outline-1 rounded-xl px-4 pt-3.5 pb-5'>
          <Section aria-label='About Artem' className='flex flex-col gap-y-3'>
            <h2 className='pl-1 text-sm text-[#95A3B6]'>About</h2>
            <p>
              Hi, I am Artem. Web developer with a strong passion for
              innovation, creativity, and the transformation of more ideas into
              remarkable web applications. My background in various programming
              languages and frameworks equips me to take on challenging. Hi, I
              am Artem. Web developer with a strong passion for innovation,
              creativity, and the transformation of more ideas into remarkable
              web applications. My background in various programming languages
              and frameworks equips me to take on challenging
            </p>
          </Section>

          <Section
            aria-label='Language Proficiency'
            className=' flex flex-col gap-y-3'
          >
            <h2 className='pl-1 text-sm text-[#95A3B6]'>Languages</h2>
            <ul className='flex gap-x-3'>
              <li>
                <Button>HE</Button>
              </li>
              <li>
                <Button>EN</Button>
              </li>
              <li>
                <Button>UA</Button>
              </li>
              <li>
                <Button>RU</Button>
              </li>
            </ul>
          </Section>
        </Section>
        <Section className='col-span-2 flex flex-col gap-y-4 outline outline-1 rounded-xl px-4 pt-3.5'>
          <h2 className='pl-1 text-sm text-[#95A3B6]'>
            Experience & Education
          </h2>
          <Tabs defaultValue='experience' className=''>
            <TabsList>
              <TabsTrigger value='experience'>Account</TabsTrigger>
              <TabsTrigger value='education'>Password</TabsTrigger>
            </TabsList>
            <TabsContent value='experience'>
              <ul className='flex flex-col gap-y-3'>
                <li>
                  <article>Ex1</article>
                </li>
                <li>
                  <article>Ex2</article>
                </li>
                <li>
                  <article>Ex3</article>
                </li>
                <li>
                  <article>Ex4</article>
                </li>
              </ul>
            </TabsContent>
            <TabsContent value='education'>
              <ul className='flex flex-col gap-y-3'>
                <li>
                  <article>Ed1</article>
                </li>
                <li>
                  <article>Ed2</article>
                </li>
                <li>
                  <article>Ed3</article>
                </li>
                <li>
                  <article>Ed4</article>
                </li>
              </ul>
            </TabsContent>
          </Tabs>
        </Section>
      </div>
    </main>
  );
}
