import Typography from '@/components/typography';
import { Button } from '@/components/ui/button';

import Section from '@/layouts/section';

export default function ContactsSection() {
  return (
    <Section className='contacts flex flex-col gap-y-4 outline outline-1 rounded-xl px-5 pt-3.5 pb-8'>
      <Typography variant='h2' size='sm'>
        Contacts
      </Typography>
      <ul className='max-w-max mx-auto flex gap-x-5'>
        <li>
          <Button>G</Button>
        </li>
        <li>
          <Button>L</Button>
        </li>
        <li>
          <Button>W</Button>
        </li>
        <li>
          <Button>E</Button>
        </li>
      </ul>
    </Section>
  );
}
