// NOTE: Guide to create a theme switcher component: https://dev.to/danhawkins/a-simple-theme-switcher-in-react-for-tailwind-css-1349

import { useState } from 'react';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';

interface Props {
  className?: string;
}

export default function ThemeSwitch({ className }: Readonly<Props>) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = (desiredDarkMode: boolean) => {
    if (isDarkMode !== desiredDarkMode) {
      setIsDarkMode(desiredDarkMode);
    }
  };

  return (
    <div
      className={cn(
        'bg-section  shadow-theme-switch flex justify-center items-center gap-x-3 px-3 py-[9px] rounded-full',
        className
      )}
    >
      <Button
        variant='dot'
        className={cn(
          'w-[18px] h-[18px] bg-page shadow-theme-switch-inactive duration-150',
          {
            'w-[32px] shadow-theme-switch-active': !isDarkMode,
          }
        )}
        aria-label='Toggle light mode'
        onClick={() => toggleTheme(false)}
      />
      <Button
        variant='dot'
        className={cn(
          'w-[18px] h-[18px] bg-[#4e565f] shadow-theme-switch-inactive duration-150',
          {
            'w-[32px] shadow-theme-switch-active': isDarkMode,
          }
        )}
        aria-label='Toggle dark mode'
        onClick={() => toggleTheme(true)}
      />
    </div>
  );
}
