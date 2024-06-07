import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function Section({ children }: Readonly<Props>) {
  return <section>{children}</section>;
}
