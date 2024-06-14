import Game2048 from '@/components/grid/showcases/2048/components/2048';
import GameProvider from '@/components/grid/showcases/2048/context/game-context';

import Section from '@/layouts/section';

export default function Contacts() {
  return (
    <Section className='showcases bg-section shadow-section-inner dark:bg-section-inner-dark dark:shadow-section-inner-dark rounded-xl px-4 pt-4 pb-[60px] '>
      <div className='max-w-max mx-auto select-none'>
        <GameProvider>
          <Game2048 />
        </GameProvider>
      </div>
    </Section>
  );
}
