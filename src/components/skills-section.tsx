import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function SkillsSection() {
  return (
    <Section className='skills flex flex-col gap-y-6 outline outline-1 rounded-xl px-5 pt-3.5 pb-8'>
      <Typography variant='h2' size='sm'>
        Skills
      </Typography>
      <p>Skills List</p>
    </Section>
  );
}
