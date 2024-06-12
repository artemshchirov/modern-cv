import Typography from '@/components/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import educationData from '@/grid/experience/education-data';
import experienceData from '@/grid/experience/experience-data';
import Section from '@/layouts/section';

import CheckIcon from '~/svg/check.svg';

export default function Experience() {
  const tabsItems = [
    {
      value: 'experience',
      label: 'Experience',
      content: <AccordionComponent items={experienceData} />,
    },
    {
      value: 'education',
      label: 'Education',
      content: <AccordionComponent items={educationData} />,
    },
  ];

  return (
    <ScrollArea className='experience bg-page dark:bg-section-dark shadow-section-outer dark:shadow-section-outer-dark 2xl:bg-section-dark 2xl:dark:bg-page 2xl:shadow-section-outer-dark 2xl:dark:shadow-section-outer rounded-xl'>
      <Section
        id='experience'
        className='flex flex-col gap-y-4 px-4 pt-3.5 pb-5'
      >
        <Typography isThemeRevert variant='h2' size='sm' className='ml-1'>
          Experience & Education
        </Typography>
        <TabsComponent defaultValue='experience' items={tabsItems} />
      </Section>
    </ScrollArea>
  );
}

type TabItem = {
  value: string;
  label: string;
  content: JSX.Element;
};

type TabsProps = {
  defaultValue: string;
  items: TabItem[];
};

export const TabsComponent: React.FC<TabsProps> = ({ defaultValue, items }) => {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger isThemeRevert key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.value} value={item.value}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

type AccordionProps = {
  items: {
    id: string;
    date: string;
    title: string;
    subtitle: string;
    achievements: Array<{ text: string }>;
  }[];
};

export const AccordionComponent: React.FC<AccordionProps> = ({ items }) => {
  return (
    <Accordion
      type='single'
      defaultValue='widegamut'
      collapsible
      className='flex flex-col gap-y-3'
    >
      {items.map((item) => (
        <AccordionItem isThemeRevert key={item.id} value={item.id}>
          <AccordionTrigger>
            <div className='flex items-center gap-x-6'>
              <Typography isThemeRevert className='w-min min-[430px]:w-max'>
                {item.date}
              </Typography>
              <div className='flex flex-col items-start'>
                <Typography isThemeRevert variant='h3'>
                  {item.title}
                </Typography>
                <Typography
                  isThemeRevert
                  size='sm'
                  className='text-[#60656E] dark:text-[#D5D5D5] 2xl:text-[#D5D5D5] 2xl:dark:text-[#60656E]'
                >
                  {item.subtitle}
                </Typography>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Typography isThemeRevert variant='h4' size='sm'>
              Achievements/Tasks
            </Typography>
            <ul className='flex flex-col gap-y-2.5'>
              {item.achievements.map((ach, idx) => (
                <li key={idx} className='flex gap-x-4'>
                  <CheckIcon className='w-[18px] h-[18px] shrink-0 fill-[#29303E] dark:fill-white' />
                  <Typography isThemeRevert>{ach.text}</Typography>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
