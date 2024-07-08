'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Game2048 from '@/components/grid/showcases/2048/components/2048';
import GameProvider from '@/components/grid/showcases/2048/context/game-context';
import Section from '@/layouts/section';

export default function Showcases() {
  return (
    <Section className='showcases bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark rounded-xl'>
      <Carousel
        className='select-none'
        opts={{
          loop: true,
          watchDrag: false,
        }}
      >
        <CarouselContent className='!overflow-visible' isShowcasesSection>
          <CarouselItem className='flex justify-center items-center'>
            <GameProvider>
              <Game2048 />
            </GameProvider>
          </CarouselItem>
          <CarouselItem className='flex justify-center items-center'>
            <p className='whitespace-nowrap text-[#95A3B6] opacity-60'>
              Coming soon...
            </p>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className='max-w-max absolute top-[calc(100%-32px)] left-[calc(50%-48px)] 2xl:top-1/2 2xl:left-1.5' />
        <CarouselNext className='max-w-max absolute top-[calc(100%-32px)] right-[calc(50%-48px)] 2xl:top-1/2 2xl:right-1.5' />
      </Carousel>
    </Section>
  );
}
