'use client';

import { AlertTriangle } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

interface ErrorStateProps {
    title: string;
    description?: string;
    retryLabel?: string;
    onRetry?: () => void;
    className?: string;
}

export function ErrorState({
    title,
    description,
    retryLabel,
    onRetry,
    className,
}: ErrorStateProps) {
    return (
        <div
            role="alert"
            className={cn(
                'flex flex-col items-center justify-center gap-3 rounded-xl border p-10 text-center',
                className
            )}
        >
            <div className="bg-destructive/10 text-destructive flex size-12 items-center justify-center rounded-full">
                <AlertTriangle className="size-6" />
            </div>
            <div className="space-y-1">
                <h3 className="font-heading text-base font-semibold">{title}</h3>
                {description && (
                    <p className="text-muted-foreground max-w-sm text-sm">{description}</p>
                )}
            </div>
            {onRetry && retryLabel && (
                <Button variant="outline" size="sm" onClick={onRetry}>
                    {retryLabel}
                </Button>
            )}
        </div>
    );
}
