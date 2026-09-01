import * as React from 'react';
import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

interface EmptyStateProps {
    title: string;
    description?: string;
    icon?: LucideIcon;
    action?: React.ReactNode;
    className?: string;
}

export function EmptyState({ title, description, icon: Icon, action, className }: EmptyStateProps) {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed p-10 text-center',
                className
            )}
        >
            {Icon && (
                <div className="bg-muted text-muted-foreground flex size-12 items-center justify-center rounded-full">
                    <Icon className="size-6" />
                </div>
            )}
            <div className="space-y-1">
                <h3 className="font-heading text-base font-semibold">{title}</h3>
                {description && (
                    <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
                )}
            </div>
            {action && <div className="mt-1">{action}</div>}
        </div>
    );
}
