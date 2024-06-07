import { ReactNode } from 'react';

import '@/styles/2048/globals.css';

import GameProvider from '@/2048/context/game-context';

interface Props {
  children: ReactNode;
}

export default function Game2048Layout({ children }: Readonly<Props>) {
  return <GameProvider>{children}</GameProvider>;
}
