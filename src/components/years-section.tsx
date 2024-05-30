import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function YearsSection() {
  return (
    <Section className='col-span-1 flex flex-col outline outline-1 rounded-xl px-[20px] pt-3.5 pb-5'>
      <Typography variant='h2' size='sm'>
        Years
      </Typography>
      <p className='max-w-max m-auto'>4</p>
    </Section>
  );
}
