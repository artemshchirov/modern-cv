import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function ContactsSection() {
  return (
    <Section className='h-[336px] flex flex-col gap-y-[17px] outline outline-1 rounded-xl px-5 pt-3.5 pb-8'>
      <Typography variant='h2' size='sm'>
        Latest Work
      </Typography>
      <div className='max-w-max m-auto '>Swiper</div>
    </Section>
  );
}
