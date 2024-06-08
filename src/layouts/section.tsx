import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface Props {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className,
  id,
  ...props
}: Readonly<Props>) {
  return (
    <section id={id} className={cn(className)} {...props}>
      {children}
    </section>
  );
}
