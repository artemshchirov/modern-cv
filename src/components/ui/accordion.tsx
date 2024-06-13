'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '@/lib/utils';

import ChevronDownIcon from '~/svg/chevron-down.svg';

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    isThemeRevert?: boolean;
  }
>(({ className, isThemeRevert = false, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'bg-page dark:bg-section-dark dark:shadow-section-outer-dark  shadow-section-outer rounded-xl',
      {
        '2xl:dark:bg-page 2xl:bg-section-dark 2xl:shadow-section-outer-dark  2xl:dark:shadow-section-outer':
          isThemeRevert,
      },
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger> & {
    isThemeRevert?: boolean;
  }
>(({ className, children, isThemeRevert = false, ...props }, ref) => (
  <AccordionPrimitive.Header className='flex'>
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'px-5 pt-2.5 pb-1.5 min-[430px]:pt-3 min-[430px]:pb-2 flex flex-1 items-center justify-between text-start text-base font-normal [&[data-state=open]>svg]:rotate-180',
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className={cn(
          'h-6 w-6 shrink-0 text-muted-foreground transition-transform duration-200 fill-[#29303E] dark:fill-white',
          {
            '2xl:fill-white 2xl:dark:fill-[#29303E]': isThemeRevert,
          }
        )}
      />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className='overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
    {...props}
  >
    <div
      className={cn(
        'flex flex-col gap-y-2 pb-5 pt-3.5 min-[430px]:pt-3 px-5',
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
