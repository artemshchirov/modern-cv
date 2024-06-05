import skillsData from '@/components/skills/skills-data';
import Typography from '@/components/typography';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import Section from '@/layouts/section';

import NextImage from '../next-image';

const SKILLS_PER_SLIDE = 6;

export default function SkillsSection() {
  const groupedSkills = [];
  for (let i = 0; i < skillsData.length; i += SKILLS_PER_SLIDE) {
    groupedSkills.push(skillsData.slice(i, i + SKILLS_PER_SLIDE));
  }

  return (
    <Section className='skills shadow-section-inner flex flex-col gap-y-6 rounded-xl px-5 pt-3.5 pb-8'>
      <Typography variant='h2' size='sm'>
        Skills
      </Typography>
      <Carousel className='max-w-[220px] mx-auto'>
        <CarouselContent className='p-0'>
          {groupedSkills.map((group, index) => (
            <CarouselItem
              key={index}
              className='grid grid-cols-[repeat(3,60px)] grid-rows-2 gap-5'
            >
              {group.map((skill) => (
                <SkillCard key={skill.id} src={skill.src} name={skill.name} />
              ))}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </Section>
  );
}

interface SkillCardProps {
  src: string;
  name: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ src, name }) => (
  <div className='max-w-max flex flex-col gap-y-2.5'>
    <NextImage
      className='rounded-full overflow-hidden'
      src={src}
      alt={name}
      width={57.7}
      height={57.7}
    />
    <Typography className='mx-auto' size='sm'>
      {name}
    </Typography>
  </div>
);
