import { Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';

interface LoadingStateProps {
    label?: string;
    className?: string;
}

export function LoadingState({ label, className }: LoadingStateProps) {
    return (
        <div
            role="status"
            aria-live="polite"
            className={cn(
                'flex flex-col items-center justify-center gap-3 p-10 text-center',
                className
            )}
        >
            <Loader2 className="text-muted-foreground size-6 animate-spin" />
            {label && <p className="text-muted-foreground text-sm">{label}</p>}
        </div>
    );
}
