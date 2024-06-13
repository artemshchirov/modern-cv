import { Slot } from '@radix-ui/react-slot';
import { type VariantProps, cva } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-normal transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-btn-outer-dark shadow-btn-outer-dark dark:bg-btn-outer dark:shadow-btn-outer text-white dark:text-[#29303E] hover:bg-primary/90 rounded-[100px]',
        revert:
          'bg-btn-outer-dark shadow-btn-outer-dark dark:bg-btn-outer dark:shadow-btn-outer text-white dark:text-[#29303E] 2xl:dark:bg-btn-outer-dark 2xl:dark:shadow-btn-outer-dark 2xl:bg-btn-outer 2xl:shadow-btn-outer 2xl:dark:text-white 2xl:text-[#29303E] hover:bg-primary/90 rounded-[100px]',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        dot: 'w-3 h-3 bg-dot shadow-dot rounded-full p-0 transition-all duration-300',
      },
      size: {
        default: 'p-1 ',
        sm: 'rounded-md px-3 text-xs',
        lg: 'rounded-md px-8',
        icon: 'p-3.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = 'default', size, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === 'default' ? (
          <span className='bg-btn-inner-dark shadow-btn-inner-dark dark:bg-page dark:shadow-btn-inner w-full h-full py-1 px-3 rounded-[100px] flex justify-between items-center'>
            {props.children}
          </span>
        ) : variant === 'revert' ? (
          <span className='bg-btn-inner-dark shadow-btn-inner-dark dark:bg-page dark:shadow-btn-inner w-full h-full py-1 px-3 rounded-[100px] flex justify-between items-center 2xl:bg-page 2xl:shadow-btn-inner 2xl:dark:bg-btn-inner-dark 2xl:dark:shadow-btn-inner-dark'>
            {props.children}
          </span>
        ) : (
          <>{props.children}</>
        )}
      </Comp>
    );
  }
);

export { Button, buttonVariants };
