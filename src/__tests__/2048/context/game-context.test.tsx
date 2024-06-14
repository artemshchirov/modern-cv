import { fireEvent, render } from '@testing-library/react';

import Board from '@/components/grid/showcases/2048/components/board';
import Score from '@/components/grid/showcases/2048/components/score';
import GameProvider from '@/components/grid/showcases/2048/context/game-context';

describe('GameProvider', () => {
  describe('startGame', () => {
    it('should start the game with two tiles', () => {
      const { container } = render(
        <GameProvider>
          <Board />
        </GameProvider>,
      );

      expect(container.querySelectorAll('.tile')).toHaveLength(2);
    });
  });

  describe('getTiles', () => {
    it('should return tiles', () => {
      const { container } = render(
        <GameProvider>
          <Board />
        </GameProvider>,
      );

      expect(container.querySelectorAll('.tile')).toHaveLength(2);
    });
  });

  describe('moveTiles', () => {
    it('should move tiles and merge them together', () => {
      const { container } = render(
        <GameProvider>
          <Board />
        </GameProvider>,
      );

      expect(container.querySelectorAll('.tile4')).toHaveLength(0);
      expect(container.querySelectorAll('.tile2')).toHaveLength(2);

      fireEvent.keyDown(container, {
        key: 'ArrowUp',
        code: 'ArrowUp',
      });

      expect(container.querySelectorAll('.tile4')).toHaveLength(1);
      expect(container.querySelectorAll('.tile2')).toHaveLength(1);
    });
  });

  describe('score', () => {
    it('should return score', () => {
      const { container } = render(
        <GameProvider>
          <Score />
          <Board />
        </GameProvider>,
      );

      expect(container.querySelector('.score > div')?.textContent).toEqual('0');
    });

    it('should refresh score after move', () => {
      const { container } = render(
        <GameProvider>
          <Score />
          <Board />
        </GameProvider>,
      );

      expect(container.querySelector('.score > div')?.textContent).toEqual('0');

      fireEvent.keyDown(container, {
        key: 'ArrowUp',
        code: 'ArrowUp',
      });

      expect(container.querySelector('.score > div')?.textContent).toEqual('4');
    });
  });
});
