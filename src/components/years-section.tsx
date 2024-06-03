import { cn } from '@/lib/utils';

import Typography from '@/components/typography';

import Section from '@/layouts/section';

interface Props {
  className?: string;
}

export default function YearsSection({ className }: Readonly<Props>) {
  return (
    <Section
      className={cn(
        'years item7 w-full flex flex-col outline outline-1 rounded-xl px-5 pt-3.5 pb-5',
        className
      )}
    >
      <Typography variant='h2' size='sm'>
        Years
      </Typography>
      <p className='max-w-max m-auto'>4</p>
    </Section>
  );
}
