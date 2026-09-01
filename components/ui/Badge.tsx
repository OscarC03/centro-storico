import * as React from 'react';
import { Slot } from 'radix-ui';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
    'inline-flex w-fit shrink-0 items-center gap-1 whitespace-nowrap rounded-full border px-2 py-0.5 text-xs font-medium [&_svg]:pointer-events-none [&_svg:not([class*=size-])]:size-3',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-primary text-primary-foreground',
                secondary: 'border-transparent bg-secondary text-secondary-foreground',
                outline: 'border-border text-foreground',
                success: 'border-transparent bg-success/12 text-success',
                destructive: 'border-transparent bg-destructive/12 text-destructive',
                warning: 'border-transparent bg-warning/12 text-warning',
                info: 'border-transparent bg-info/12 text-info',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

interface BadgeProps extends React.ComponentProps<'span'>, VariantProps<typeof badgeVariants> {
    asChild?: boolean;
}

function Badge({ className, variant, asChild = false, ...props }: BadgeProps) {
    const Comp = asChild ? Slot.Root : 'span';

    return (
        <Comp data-slot="badge" className={cn(badgeVariants({ variant, className }))} {...props} />
    );
}

export { Badge, badgeVariants };
export type { BadgeProps };
