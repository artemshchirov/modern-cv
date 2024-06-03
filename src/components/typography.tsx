import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';

interface Props {
  children: ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  size?: TextSize;
  color?: string;
  className?: string;
}

export default function Typography({
  children,
  variant = 'p',
  size = 'base',
  color,
  className,
}: Readonly<Props>) {
  const baseStyle = `max-w-max ${variant !== 'p' ? 'whitespace-nowrap' : ''}`;

  const variantStyles = {
    h1: 'text-[#29303E]',
    h2: 'text-[#95A3B6]',
    h3: 'text-[#29303E]',
    h4: 'text-[#A5A9B0]',
    p: 'text-[#29303E]',
  };

  const ComponentTag = variant as keyof JSX.IntrinsicElements;

  const textStyle = cn(
    baseStyle,
    `text-${size}`,
    variantStyles[variant],
    className
  );

  const style = color ? { color } : {};

  return (
    <ComponentTag className={textStyle} style={style}>
      {children}
    </ComponentTag>
  );
}
