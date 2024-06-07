import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from '@/styles/2048/tile.module.css';

import {
  containerWidthDesktop,
  containerWidthMobile,
  mergeAnimationDuration,
  tileCountPerDimension,
} from '@/2048/constants';
import usePreviousProps from '@/2048/hooks/use-previous-props';
import { Tile as TileProps } from '@/2048/models/tile';

export default function Tile({ position, value }: Readonly<TileProps>) {
  const isWideScreen = useMediaQuery({ minWidth: 512 });
  const containerWidth = isWideScreen
    ? containerWidthDesktop
    : containerWidthMobile;

  const [scale, setScale] = useState(1);
  const previousValue = usePreviousProps<number>(value);
  const hasChanged = previousValue !== value;

  const positionToPixels = (position: number) =>
    (position / tileCountPerDimension) * containerWidth;

  useEffect(() => {
    if (hasChanged) {
      setScale(1.1);
      setTimeout(() => setScale(1), mergeAnimationDuration);
    }
  }, [hasChanged]);

  const style = {
    left: positionToPixels(position[0]),
    top: positionToPixels(position[1]),
    transform: `scale(${scale})`,
    zIndex: value,
  };

  return (
    <div className={`${styles.tile} ${styles[`tile${value}`]}`} style={style}>
      {value}
    </div>
  );
}
