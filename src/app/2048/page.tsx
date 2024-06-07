import styles from '@/styles/2048/index.module.css';

import Board from '@/2048/components/board';
import Score from '@/2048/components/score';

export default function Game2048Page() {
  return (
    <div className={styles.twenty48}>
      <header>
        <h1>2048</h1>
        <Score />
      </header>
      <main>
        <Board />
      </main>

      {/* <footer>
        <div>Made with ❤️ by Artem</div>
      </footer> */}
    </div>
  );
}
