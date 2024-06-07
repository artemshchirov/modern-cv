import { cn } from '@/lib/utils';

import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function About() {
  return (
    <Section aria-label='About Artem' className='flex flex-col gap-y-2.5'>
      <Typography variant='h2' size='sm'>
        About
      </Typography>
      <div
        className={cn(
          'relative overflow-hidden transition-max-height duration-300 ease-in-out'
        )}
      >
        <Typography>
          Hi, I am Artem. Web developer with a strong passion for innovation,
          creativity, and the transformation of more ideas into remarkable web
          applications. My background in various programming languages and
          frameworks
        </Typography>
      </div>
    </Section>
  );
}
