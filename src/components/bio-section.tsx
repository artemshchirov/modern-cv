import AboutSection from '@/components/about-section';
import LanguagesSection from '@/components/languages-section';

import Section from '@/layouts/section';

export default function BioSection() {
  return (
    <Section className='item4 flex flex-col gap-y-5 outline outline-1 rounded-xl px-5 pt-3.5 pb-5'>
      <AboutSection />
      <LanguagesSection />
    </Section>
  );
}
