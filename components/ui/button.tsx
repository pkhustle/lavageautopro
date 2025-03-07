import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90 shadow-sm hover:shadow-md hover:shadow-primary/20',
        secondary: 'bg-secondary text-white hover:bg-secondary/90 shadow-sm hover:shadow-md',
        accent: 'bg-accent text-white hover:bg-accent/90 shadow-sm hover:shadow-md hover:shadow-accent/20',
        outline: 'border border-gray-300 bg-black/50 text-white hover:bg-primary/10 hover:text-primary hover:border-primary',
        'outline-primary': 'border border-primary text-primary bg-black/50 hover:bg-primary/10',
        'outline-secondary': 'border border-secondary text-white bg-black/50 hover:bg-secondary/10',
        'outline-accent': 'border border-accent text-accent bg-black/50 hover:bg-accent/10',
        ghost: 'text-white hover:bg-primary/10 hover:text-primary',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
