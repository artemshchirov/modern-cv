import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

import Typography from '@/components/typography';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
} from '@/components/ui/carousel';

import Section from '@/layouts/section';

// TODO : rename section because its not a one swiper section
export default function Portfolio() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Section
        id='portfolio'
        className='swiper bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark min-h-full min-w-full flex flex-col outline outline-transparent rounded-xl pt-3.5 pb-5'
      >
        <Typography isThemeRevert variant='h2' size='sm' className='pl-5'>
          Latest Work
        </Typography>
        <Carousel
          className='w-full h-full flex flex-col'
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className='-ml-0 pt-4 pb-7'>
            {Array.from({ length: 8 }).map((_, index) => {
              return (
                <CarouselItem key={index} className={cn('pl-0 basis-auto')}>
                  <Card
                    className={cn(
                      'w-[238px] h-[238px] md:w-[622px] md:h-[622px] 2xl:w-[306px] 2xl:h-[306px] transition-transform duration-300 shadow-section-outer border-none ',
                      {
                        'scale-[.828] md:scale-[.9] 2xl:scale-[.88]':
                          current !== index + 1,
                      }
                    )}
                  >
                    <CardContent className='flex aspect-square items-center justify-center p-0'>
                      <span className='text-2xl font-semibold'>
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselDots className='absolute inset-x-0 bottom-0' />
        </Carousel>

        {/* <div className='w-full h-full rounded-3xl overflow-hidden relative'>
        <Image
          src='https://ik.imagekit.io/webbuilder/nadia-websito/404_Noxhtwjpl.webp?updatedAt=1712312206270'
          alt='Swiper Image'
          width={0}
          height={0}
          sizes='100vw'
          className='mx-auto w-[236px] md:w-[620px] xl:w-[304px]'
        />
      </div> */}
      </Section>
    </>
  );
}
