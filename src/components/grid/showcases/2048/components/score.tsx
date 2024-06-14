'use client';

import { useContext } from 'react';

import styles from '@/styles/2048/score.module.css';

import { GameContext } from '@/components/grid/showcases/2048/context/game-context';

export default function Score() {
  const { score } = useContext(GameContext);

  return (
    <div className={styles.score}>
      Score
      <div>{score}</div>
    </div>
  );
}
