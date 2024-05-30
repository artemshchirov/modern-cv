import ContactsSection from '@/components/contacts-section';
import CvSection from '@/components/cv-section';
import ProjectsSection from '@/components/projects-section';
import SkillsSection from '@/components/skills-section';
import YearsSection from '@/components/years-section';

export default function GridMain() {
  return (
    <>
      {/* <div className='grid grid-cols-2 gap-4'> */}
      <SkillsSection />

      <CvSection />

      <YearsSection />

      <ProjectsSection />

      <ContactsSection />
      {/* </div> */}
    </>
  );
}
