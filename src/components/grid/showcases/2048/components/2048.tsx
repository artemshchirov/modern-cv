import Board from '@/components/grid/showcases/2048/components/board';
import Score from '@/components/grid/showcases/2048/components/score';

interface Props {
  isFullscreen?: boolean;
}

export default function Game2048({ isFullscreen = false }: Readonly<Props>) {
  return (
    <div>
      {isFullscreen && (
        <header>
          <h2 className='text-4xl md:text-6xl'>2048</h2>
          <Score />
        </header>
      )}
      <main>
        <Board />
      </main>

      {/* <footer>
        <div>Made with ❤️ by Artem</div>
      </footer> */}
    </div>
  );
}
