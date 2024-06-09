import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function Role() {
  return (
    <Section className='bg-page col-span-1 shadow-section-outer flex flex-col rounded-xl px-[11px] py-[15px] md:px-3.5 md:pb-4'>
      <Typography variant='h1'>Artem Shchirov</Typography>
      <Typography color='#60656E' size='sm'>
        Full-Stack Developer
      </Typography>
    </Section>
  );
}
