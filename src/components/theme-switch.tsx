'use client';
// NOTE: Guide to create a theme switcher component: https://dev.to/danhawkins/a-simple-theme-switcher-in-react-for-tailwind-css-1349

import { useEffect, useState } from 'react';
import { useIsClient, useLocalStorage } from 'usehooks-ts';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
}

export default function ThemeSwitch({ className }: Readonly<Props>) {
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const [isLightMode, setIsLightMode] = useState(theme == 'light');
  const isClient = useIsClient();

  useEffect(() => {
    const htmlSelector = document.querySelector('html');
    if (htmlSelector) {
      htmlSelector.classList.remove('light', 'dark');
      htmlSelector.classList.add(theme);
    }
  }, [theme]);

  const handleThemeChange = (isLightThemeActive: boolean) => {
    setTheme(isLightThemeActive ? 'light' : 'dark');
    setIsLightMode(isLightThemeActive);
  };

  return (
    <div
      className={cn(
        'bg-section shadow-theme-switch dark:bg-theme-switch-dark dark:shadow-theme-switch-dark flex justify-center items-center gap-x-3 px-3 py-[9px] rounded-full',
        className
      )}
    >
      {isClient && (
        <>
          <Button
            variant='dot'
            className={cn(
              'w-[18px] h-[18px] bg-page shadow-theme-switch-inactive dark:shadow-theme-switch-inactive-dark duration-150',
              {
                'w-[32px] shadow-theme-switch-active dark:shadow-theme-switch-active-dark':
                  isLightMode,
              }
            )}
            aria-label='Toggle light mode'
            onClick={() => handleThemeChange(true)}
          />
          <Button
            variant='dot'
            className={cn(
              'w-[18px] h-[18px] bg-[#4e565f] shadow-theme-switch-inactive dark:shadow-theme-switch-inactive-dark duration-150',
              {
                'w-[32px] shadow-theme-switch-active dark:shadow-theme-switch-active-dark':
                  !isLightMode,
              }
            )}
            aria-label='Toggle dark mode'
            onClick={() => handleThemeChange(false)}
          />
        </>
      )}
    </div>
  );
}
