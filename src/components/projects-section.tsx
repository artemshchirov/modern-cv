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

export default function ProjectsSection() {
  return (
    <ScrollArea className='projects shadow-section-inner rounded-xl'>
      <Section className='flex flex-col gap-y-4 px-4 pt-3.5 pb-5'>
        <Typography variant='h2' size='sm' className='ml-1'>
          Projects
        </Typography>

        <Tabs defaultValue='experience'>
          <TabsList>
            <TabsTrigger value='experience'>Projects</TabsTrigger>
            <TabsTrigger value='education'>Side Projects</TabsTrigger>
          </TabsList>
          <TabsContent value='experience'>
            <Accordion
              type='single'
              collapsible
              className='flex flex-col gap-y-3'
            >
              <AccordionItem value='widegamut'>
                <AccordionTrigger>
                  <div className='flex items-center gap-x-6 '>
                    <Typography className='w-min min-[430px]:w-max'>
                      2023-2024
                    </Typography>

                    <div className='flex flex-col items-start '>
                      <Typography variant='h3'>Widegamut</Typography>
                      <Typography size='sm' color='#60656E'>
                        Full-Stack Developer
                      </Typography>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Typography variant='h4' size='sm'>
                    Achievements/Tasks
                  </Typography>
                  <ul className='flex flex-col gap-y-2.5'>
                    <li className='flex gap-x-4'>
                      <CheckIcon className='w-[18px] h-[18px] shrink-0' />
                      <Typography>
                        Created 4 apps with a focus on creating an exceptional
                        user experience.
                      </Typography>
                    </li>
                    <li className='flex gap-x-4'>
                      <CheckIcon className='w-[18px] h-[18px] shrink-0' />
                      <Typography>
                        Wrote frontend & backend code, and self-integrated 2+
                        APIs. For example, fetching data to dashboard.
                      </Typography>
                    </li>
                    <li className='flex gap-x-4'>
                      <CheckIcon className='w-[18px] h-[18px] shrink-0' />
                      <Typography>
                        Resolved critical bugs to resolve issues and improve
                        performance to ensure ongoing operations.
                      </Typography>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='butcher'>
                <AccordionTrigger>
                  <div className='flex items-center gap-x-6 '>
                    <Typography className='w-min min-[430px]:w-max'>
                      2023-2024
                    </Typography>

                    <div className='flex flex-col items-start '>
                      <Typography variant='h3'>Be`eri Print</Typography>
                      <Typography size='sm' color='#60656E'>
                        Frontend Developer
                      </Typography>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <h4 className='text-sm text-[#A5A9B0]'>Achievements/Tasks</h4>
                  <ul className='flex flex-col gap-y-2.5'>
                    <li className='flex gap-x-4'>
                      <CheckIcon className='w-[18px] h-[18px] shrink-0' />
                      <p>
                        Created 4 apps with a focus on creating an exceptional
                        user experience.
                      </p>
                    </li>
                    <li className='flex gap-x-4'>
                      <CheckIcon className='w-[18px] h-[18px] shrink-0' />
                      <p>
                        Wrote frontend & backend code, and self-integrated 2+
                        APIs. For example, fetching data to dashboard.
                      </p>
                    </li>
                    <li className='flex gap-x-4'>
                      <CheckIcon className='w-[18px] h-[18px] shrink-0' />
                      <p>
                        Resolved critical bugs to resolve issues and improve
                        performance to ensure ongoing operations.
                      </p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
          <TabsContent value='education'>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>Widegamut</AccordionTrigger>
                <AccordionContent>
                  1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ea, dolor obcaecati. Debitis at nobis atque? Dolorum
                  recusandae dolorem, ab aperiam architecto, dolore, rerum
                  minima itaque saepe laboriosam fuga tenetur facilis.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>Widegamut</AccordionTrigger>
                <AccordionContent>
                  1 Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ea, dolor obcaecati. Debitis at nobis atque? Dolorum
                  recusandae dolorem, ab aperiam architecto, dolore, rerum
                  minima itaque saepe laboriosam fuga tenetur facilis.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </TabsContent>
        </Tabs>
      </Section>
    </ScrollArea>
  );
}
