import educationData from '@/components/experience/education-data';
import experienceData from '@/components/experience/experience-data';
import Typography from '@/components/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Section from '@/layouts/section';

import CheckIcon from '~/svg/check.svg';

export default function ExperienceSection() {
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
    <ScrollArea className='experience shadow-section-outer rounded-xl'>
      <Section className='flex flex-col gap-y-4 px-4 pt-3.5 pb-5'>
        <Typography variant='h2' size='sm' className='ml-1'>
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
          <TabsTrigger key={item.value} value={item.value}>
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
    <Accordion type='single' collapsible className='flex flex-col gap-y-3'>
      {items.map((item) => (
        <AccordionItem key={item.id} value={item.id}>
          <AccordionTrigger>
            <div className='flex items-center gap-x-6'>
              <Typography className='w-min min-[430px]:w-max'>
                {item.date}
              </Typography>
              <div className='flex flex-col items-start'>
                <Typography variant='h3'>{item.title}</Typography>
                <Typography size='sm' color='#60656E'>
                  {item.subtitle}
                </Typography>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <Typography variant='h4' size='sm'>
              Achievements/Tasks
            </Typography>
            <ul className='flex flex-col gap-y-2.5'>
              {item.achievements.map((ach, idx) => (
                <li key={idx} className='flex gap-x-4'>
                  <CheckIcon className='w-[18px] h-[18px] shrink-0' />
                  <Typography>{ach.text}</Typography>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
