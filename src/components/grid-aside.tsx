import AboutSection from '@/components/about-section';
import AvatarSection from '@/components/avatar-section';
import ExperienceSection from '@/components/experience-section';
import LanguagesSection from '@/components/languages-section';
import LocationSection from '@/components/location-section';
import ProfileSection from '@/components/profile-section';

import Section from '@/layouts/section';

export default function GridAside() {
  return (
    <>
      {/* <div className='grid grid-cols-[160px_auto] gap-4'> */}
      <AvatarSection />
      <div className='grid gap-y-3'>
        <ProfileSection />
        <LocationSection />
      </div>

      <Section className='col-span-2 flex flex-col gap-y-5 outline outline-1 rounded-xl px-5 pt-3.5 pb-5'>
        <AboutSection />

        <LanguagesSection />
      </Section>

      <ExperienceSection />
      {/* </div> */}
    </>
  );
}
