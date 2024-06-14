import About from '@/components/grid/bio/about';
import Languages from '@/components/grid/bio/languages';

import Section from '@/layouts/section';

export default function Bio() {
  return (
    <Section className='bio bg-page dark:bg-section-dark 2xl:bg-section-dark 2xl:dark:bg-page shadow-section-outer dark:shadow-section-outer-dark 2xl:shadow-section-outer-dark 2xl:dark:shadow-section-outer flex flex-col gap-y-5 justify-between rounded-xl px-5 pt-3.5 pb-5'>
      <About />
      <Languages />
    </Section>
  );
}
