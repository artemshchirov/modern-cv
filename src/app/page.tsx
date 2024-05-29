'use client';

import Head from 'next/head';
import '@/lib/env';

import AvatarComponent from '@/components/avatar-component';

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

      <div className='grid grid-cols-2 gap-4'>
        <Section
          aria-label='Profile Image'
          className='min-w-[160px] min-h-[160px] flex justify-center items-center outline outline-1 rounded-xl'
        >
          <div className='w-[120px] h-[120px] flex justify-center items-center rounded-full bg-white outline outline-1 outline-gray-500'>
            <AvatarComponent />
          </div>
        </Section>
        <div className='w-full grid gap-y-3'>
          <Section className='w-full flex flex-col outline outline-1 rounded-xl pl-[15px] py-[15px]'>
            <h1 className='text-base text-[#29303E] whitespace-nowrap'>
              Artem Shchirov
            </h1>
            <p className='text-sm text-[#60656E] whitespace-nowrap'>
              Full-Stack Developer
            </p>
          </Section>
          <Section className='w-full flex flex-col gap-y-1 outline outline-1 rounded-xl px-[17px] pt-3.5 pb-3'>
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
        <Section className='col-span-2'>
          <Section aria-label='About Artem'>
            <h2>About</h2>
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

          <Section aria-label='Language Proficiency'>
            <h2>Languages</h2>
            <ul>
              <li>
                <button>HE</button>
              </li>
              <li>
                <button>EN</button>
              </li>
              <li>
                <button>UA</button>
              </li>
              <li>
                <button>RU</button>
              </li>
            </ul>
          </Section>

          <Section>
            <h2>Experience & Education</h2>
            <ul>
              <li>
                <article>1</article>
              </li>
              <li>
                <article>2</article>
              </li>
              <li>
                <article>3</article>
              </li>
              <li>
                <article>4</article>
              </li>
            </ul>
          </Section>
        </Section>
      </div>
    </main>
  );
}
