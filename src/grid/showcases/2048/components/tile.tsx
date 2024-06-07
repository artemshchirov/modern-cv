import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import styles from '@/styles/2048/tile.module.css';

import { cn } from '@/lib/utils';

import {
  containerWidthDesktop,
  containerWidthMobile,
  containerWidthTablet,
  mergeAnimationDuration,
  tileCountPerDimension,
} from '@/2048/constants';
import usePreviousProps from '@/2048/hooks/use-previous-props';
import { Tile as TileProps } from '@/2048/models/tile';

export default function Tile({ position, value }: Readonly<TileProps>) {
  const isTabletScreen = useMediaQuery({ minWidth: 768 });
  const isDesktopScreen = useMediaQuery({ minWidth: 1440 });
  const containerWidth = isTabletScreen
    ? containerWidthTablet
    : isDesktopScreen
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
    <div
      className={cn('shadow-2048-cell', styles.tile, styles[`tile${value}`])}
      style={style}
    >
      {value}
    </div>
  );
}
