import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function YearsSection() {
  return (
    <Section className='years shadow-section-inner item7 w-full flex flex-col rounded-xl px-5 pt-3.5 pb-5'>
      <Typography variant='h2' size='sm'>
        Years
      </Typography>
      <p className='max-w-max m-auto'>4</p>
    </Section>
  );
}
