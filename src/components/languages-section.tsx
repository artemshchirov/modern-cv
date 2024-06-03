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
          <Button variant='lang'>HE</Button>
        </li>
        <li>
          <Button variant='lang'>EN</Button>
        </li>
        <li>
          <Button variant='lang'>UA</Button>
        </li>
        <li>
          <Button variant='lang'>RU</Button>
        </li>
      </ul>
    </Section>
  );
}
