import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function Role() {
  return (
    <Section className='bg-section-dark shadow-section-outer-dark dark:bg-page dark:shadow-section-outer col-span-1 flex flex-col rounded-xl px-[11px] py-[15px] md:px-3.5 md:pb-4'>
      <Typography variant='h1' isThemeRevert>
        Artem Shchirov
      </Typography>
      <Typography size='sm' className='text-[#D5D5D5] dark:text-[#60656E]'>
        Full-Stack Developer
      </Typography>
    </Section>
  );
}
