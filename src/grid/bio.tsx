import About from '@/grid/about';
import Languages from '@/grid/languages';
import Section from '@/layouts/section';

export default function Bio() {
  return (
    <Section className='bio shadow-section-outer flex flex-col gap-y-5 justify-between rounded-xl px-5 pt-3.5 pb-5'>
      <About />
      <Languages />
    </Section>
  );
}
