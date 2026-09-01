'use client';

import * as React from 'react';
import { Toast as ToastPrimitive } from 'radix-ui';
import { CheckCircle2, Info, TriangleAlert, X, XCircle, type LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { ToastVariant } from '@/hooks/useToast';

const ToastProvider = ToastPrimitive.Provider;

function ToastViewport({
    className,
    ...props
}: React.ComponentProps<typeof ToastPrimitive.Viewport>) {
    return (
        <ToastPrimitive.Viewport
            data-slot="toast-viewport"
            className={cn(
                'fixed right-0 bottom-0 z-100 flex w-full flex-col gap-2 p-4 outline-none sm:max-w-100',
                className
            )}
            {...props}
        />
    );
}

const VARIANT_ICON: Record<
    Exclude<ToastVariant, 'default'>,
    { icon: LucideIcon; className: string }
> = {
    success: { icon: CheckCircle2, className: 'text-success' },
    destructive: { icon: XCircle, className: 'text-destructive' },
    warning: { icon: TriangleAlert, className: 'text-warning' },
    info: { icon: Info, className: 'text-info' },
};

function Toast({
    className,
    variant = 'default',
    children,
    ...props
}: React.ComponentProps<typeof ToastPrimitive.Root> & { variant?: ToastVariant }) {
    const variantIcon = variant === 'default' ? null : VARIANT_ICON[variant];
    const Icon = variantIcon?.icon;

    return (
        <ToastPrimitive.Root
            data-slot="toast"
            className={cn(
                'border-border bg-card text-card-foreground pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg',
                'data-[state=closed]:animate-[cs-fade-out_.12s_ease-in] data-[state=open]:animate-[cs-enter_.15s_ease-out]',
                'data-[swipe=cancel]:translate-x-0 data-[swipe=end]:animate-[cs-fade-out_.1s_ease-in] data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x)',
                className
            )}
            {...props}
        >
            {Icon && (
                <Icon className={cn('mt-0.5 size-5 shrink-0', variantIcon.className)} aria-hidden />
            )}
            {children}
        </ToastPrimitive.Root>
    );
}

function ToastTitle({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Title>) {
    return (
        <ToastPrimitive.Title
            data-slot="toast-title"
            className={cn('text-sm font-semibold', className)}
            {...props}
        />
    );
}

function ToastDescription({
    className,
    ...props
}: React.ComponentProps<typeof ToastPrimitive.Description>) {
    return (
        <ToastPrimitive.Description
            data-slot="toast-description"
            className={cn('text-muted-foreground text-sm', className)}
            {...props}
        />
    );
}

function ToastClose({ className, ...props }: React.ComponentProps<typeof ToastPrimitive.Close>) {
    return (
        <ToastPrimitive.Close
            data-slot="toast-close"
            className={cn(
                'text-muted-foreground/70 hover:text-foreground focus-visible:ring-ring/60 absolute top-2 right-2 rounded-md p-1 transition-colors focus-visible:ring-2 focus-visible:outline-none',
                className
            )}
            aria-label="Chiudi"
            {...props}
        >
            <X className="size-4" />
        </ToastPrimitive.Close>
    );
}

function ToastAction({ ...props }: React.ComponentProps<typeof ToastPrimitive.Action>) {
    return <ToastPrimitive.Action data-slot="toast-action" {...props} />;
}

export {
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
};
