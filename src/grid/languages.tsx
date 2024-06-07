import Typography from '@/components/typography';
import { Badge } from '@/components/ui/badge';

import Section from '@/layouts/section';
// TODO: Add hover tooltip with language name and proficiency level
export default function Languages() {
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
          <Badge variant='lang' className='bg-page shadow-btn-lang rounded-xl'>
            HE
          </Badge>
        </li>
        <li>
          <Badge variant='lang' className='bg-page shadow-btn-lang rounded-xl'>
            EN
          </Badge>
        </li>
        <li>
          <Badge variant='lang' className='bg-page shadow-btn-lang rounded-xl'>
            UA
          </Badge>
        </li>
        <li>
          <Badge variant='lang' className='bg-page shadow-btn-lang rounded-xl'>
            RU
          </Badge>
        </li>
      </ul>
    </Section>
  );
}
