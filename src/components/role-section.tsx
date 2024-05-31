import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function RoleSection() {
  return (
    <Section className='col-span-1 flex flex-col outline outline-1 rounded-xl px-[11px] py-[15px]'>
      <Typography variant='h1'>Artem Shchirov</Typography>
      <Typography color='#60656E' size='sm'>
        Full-Stack Developer
      </Typography>
    </Section>
  );
}
