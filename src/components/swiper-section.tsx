import Image from 'next/image';

import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function ContactsSection() {
  return (
    <Section className='swiper min-h-full min-w-full flex flex-col gap-y-[17px] outline outline-1 rounded-xl px-5 pt-3.5 pb-8'>
      <Typography variant='h2' size='sm'>
        Latest Work
      </Typography>
      {/* <div className='max-w-max max-h-max m-auto '> */}
      <div className='w-full h-full rounded-3xl overflow-hidden relative'>
        <Image
          src='https://ik.imagekit.io/webbuilder/nadia-websito/404_Noxhtwjpl.webp?updatedAt=1712312206270'
          alt='Swiper Image'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto w-[236px] md:w-[620px] xl:w-[304px]'
        />
      </div>
      {/* </div> */}
    </Section>
  );
}
