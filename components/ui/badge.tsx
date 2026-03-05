import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-secondary/30 bg-secondary/15 text-secondary',
        outline: 'text-foreground border-border',
        success: 'border-success/30 bg-success/15 text-success',
        error: 'border-error/30 bg-error/15 text-error',
        warning: 'border-warning/30 bg-warning/15 text-warning',
        info: 'border-info/30 bg-info/15 text-info',
        accent: 'border-accent/30 bg-accent/15 text-accent',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
