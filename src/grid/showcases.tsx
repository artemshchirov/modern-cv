import Game2048 from '@/grid/showcases/2048/components/2048';
import GameProvider from '@/grid/showcases/2048/context/game-context';
import Section from '@/layouts/section';

export default function Contacts() {
  return (
    <Section className='showcases shadow-section-inner rounded-xl px-4 pt-4 pb-[60px] '>
      <div className='max-w-max mx-auto '>
        <GameProvider>
          <Game2048 />
        </GameProvider>
      </div>
    </Section>
  );
}
