import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className }: Readonly<Props>) {
  return <section className={cn(className)}>{children}</section>;
}
