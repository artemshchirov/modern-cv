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
          <Button variant='lang' size='md'>
            HE
          </Button>
        </li>
        <li>
          <Button variant='lang' size='md'>
            EN
          </Button>
        </li>
        <li>
          <Button variant='lang' size='md'>
            UA
          </Button>
        </li>
        <li>
          <Button variant='lang' size='md'>
            RU
          </Button>
        </li>
      </ul>
    </Section>
  );
}
