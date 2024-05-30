'use client';

import Head from 'next/head';
import '@/lib/env';

import GridAside from '@/components/grid-aside';
import GridMain from '@/components/grid-main';

import Header from '@/layouts/header';

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

      <div className='grid-container'>
        <GridAside />

        <GridMain />
      </div>
    </main>
  );
}
