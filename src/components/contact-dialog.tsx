import { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface Props {
  children: ReactNode;
}

export default function ContactDialog({ children }: Readonly<Props>) {
  return (
    <Dialog>
      {children}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contact me</DialogTitle>
          <DialogDescription>
            I will answer you as soon as possible
          </DialogDescription>
          <div></div>
        </DialogHeader>
        <DialogFooter>
          <Button type='submit'>Send message</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
