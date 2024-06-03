import AboutSection from '@/components/about-section';
import LanguagesSection from '@/components/languages-section';

import Section from '@/layouts/section';

export default function BioSection() {
  return (
    <Section className='bio shadow-section-outer flex flex-col gap-y-5 justify-between rounded-xl px-5 pt-3.5 pb-5'>
      <AboutSection />
      <LanguagesSection />
    </Section>
  );
}
