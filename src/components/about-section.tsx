import Typography from '@/components/typography';

import Section from '@/layouts/section';

export default function AboutSection() {
  return (
    <Section aria-label='About Artem' className='flex flex-col gap-y-3'>
      <Typography variant='h2' size='sm'>
        About
      </Typography>
      <Typography>
        Hi, I am Artem. Web developer with a strong passion for innovation,
        creativity, and the transformation of more ideas into remarkable web
        applications. My background in various programming languages and
        frameworks equips me to take on challenging. Hi, I am Artem. Web
        developer with a strong passion for innovation, creativity, and the
        transformation of more ideas into remarkable web applications. My
        background in various programming languages and frameworks equips me to
        take on challenging
      </Typography>
    </Section>
  );
}
