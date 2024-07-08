import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

export type SwipeInput = { deltaX: number; deltaY: number };

type MobileSwiperProps = PropsWithChildren<{
  onSwipe: (_: SwipeInput) => void;
}>;

export default function MobileSwiper({ children, onSwipe }: MobileSwiperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [activated, setActivated] = useState(false);

  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!wrapperRef.current?.contains(e.target as Node)) {
      return;
    }

    e.preventDefault();

    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  }, []);

  const handleTouchEnd = useCallback(
    (e: TouchEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        return;
      }

      e.preventDefault();

      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      const deltaX = endX - startX;
      const deltaY = endY - startY;

      onSwipe({ deltaX, deltaY });

      setStartX(0);
      setStartY(0);
    },
    [startX, startY, onSwipe],
  );

  useEffect(() => {
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: false });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleTouchStart, handleTouchEnd]);
  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (!wrapperRef.current?.contains(e.target as Node)) {
      return;
    }
    e.preventDefault();
    setStartX(e.clientX);
    setStartY(e.clientY);
    setActivated(false);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!activated && startX !== 0) {
        e.preventDefault();
        const endX = e.clientX;
        const endY = e.clientY;
        const deltaX = endX - startX;
        const deltaY = endY - startY;

        const SWIPE_THRESHOLD = 25;
        if (
          Math.abs(deltaX) > SWIPE_THRESHOLD ||
          Math.abs(deltaY) > SWIPE_THRESHOLD
        ) {
          onSwipe({ deltaX, deltaY });
          setActivated(true); // Prevent further swipes until mouse up
        }
      }
    },
    [startX, startY, activated, onSwipe],
  );

  const handleMouseUp = useCallback(() => {
    setStartX(0);
    setStartY(0);
    setActivated(false);
  }, []);

  useEffect(() => {
    const element = wrapperRef.current;
    if (element) {
      element.addEventListener('mousedown', handleMouseDown);
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);

      return () => {
        element.removeEventListener('mousedown', handleMouseDown);
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [handleMouseDown, handleMouseMove, handleMouseUp]);

  return <div ref={wrapperRef}>{children}</div>;
}
