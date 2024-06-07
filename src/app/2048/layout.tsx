import { ReactNode } from 'react';

import GameProvider from '@/2048/context/game-context';

interface Props {
  children: ReactNode;
}

export default function Game2048Layout({ children }: Readonly<Props>) {
  return <GameProvider>{children}</GameProvider>;
}
