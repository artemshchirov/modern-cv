import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';

import Section from '@/layouts/section';

export default function LanguagesSection() {
  return (
    <Section
      aria-label='Language Proficiency'
      className='flex flex-col gap-y-3'
    >
      <Typography variant='h2' size='sm'>
        Languages
      </Typography>
      <ul className='flex gap-x-3'>
        <li>
          <Button>HE</Button>
        </li>
        <li>
          <Button>EN</Button>
        </li>
        <li>
          <Button>UA</Button>
        </li>
        <li>
          <Button>RU</Button>
        </li>
      </ul>
    </Section>
  );
}
