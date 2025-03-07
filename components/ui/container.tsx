import { cn } from '../../lib/utils';

interface ContainerProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export function Container({
  as: Component = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

interface SectionProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  as: Component = 'section',
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn('py-12 md:py-16 lg:py-20', className)}
      {...props}
    >
      {children}
    </Component>
  );
}

interface GridProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children: React.ReactNode;
  cols?: number;
}

export function Grid({
  as: Component = 'div',
  className,
  cols = 3,
  children,
  ...props
}: GridProps) {
  return (
    <Component
      className={cn(
        'grid gap-6 sm:gap-8',
        {
          'sm:grid-cols-2': cols >= 2,
          'lg:grid-cols-3': cols >= 3,
          'xl:grid-cols-4': cols >= 4,
        },
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
