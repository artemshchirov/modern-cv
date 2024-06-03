import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
  ...props
}: Readonly<Props>) {
  return (
    <section className={cn(className)} {...props}>
      {children}
    </section>
  );
}
