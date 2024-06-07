'use client';

import Head from 'next/head';
import '@/lib/env';

import Copyright from '@/components/copyright';

import Bio from '@/grid/bio';
import Contacts from '@/grid/contacts';
import Cv from '@/grid/cv';
import Experience from '@/grid/experience/experience';
import Portfolio from '@/grid/portfolio';
import Profile from '@/grid/profile';
import Projects from '@/grid/projects';
import Showcases from '@/grid/showcases';
import Skills from '@/grid/skills/skills';
import Template from '@/grid/template';
import Years from '@/grid/years';
import Header from '@/layouts/header';
import Section from '@/layouts/section';

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
    <main className='py-9 px-3 flex flex-col gap-y-6 '>
      <Head>
        <title>Hi</title>
      </Head>

      <Section className='grid-main mx-auto'>
        <Header />

        <Profile />
        <Bio />
        <Experience />

        <Skills />
        <Cv />
        <Years />
        <Projects />
        <Contacts />
        <Portfolio />
        <Showcases />
        <Template />
      </Section>

      <Copyright />
    </main>
  );
}
