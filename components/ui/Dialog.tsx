'use client';

import * as React from 'react';
import { Dialog as DialogPrimitive } from 'radix-ui';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>) {
    return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>) {
    return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
    return (
        <DialogPrimitive.Overlay
            data-slot="dialog-overlay"
            className={cn(
                'fixed inset-0 z-50 bg-black/50 data-[state=closed]:animate-[cs-fade-out_.12s_ease-in] data-[state=open]:animate-[cs-fade-in_.15s_ease-out]',
                className
            )}
            {...props}
        />
    );
}

function DialogContent({
    className,
    children,
    showCloseButton = true,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & { showCloseButton?: boolean }) {
    return (
        <DialogPrimitive.Portal>
            <DialogOverlay />
            <DialogPrimitive.Content
                data-slot="dialog-content"
                className={cn(
                    'bg-card text-card-foreground fixed top-1/2 left-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 rounded-xl border p-6 shadow-lg',
                    'data-[state=closed]:animate-[cs-exit_.12s_ease-in] data-[state=open]:animate-[cs-enter_.15s_ease-out]',
                    className
                )}
                {...props}
            >
                {children}
                {showCloseButton && (
                    <DialogPrimitive.Close
                        data-slot="dialog-close"
                        className="ring-offset-background focus-visible:ring-ring absolute top-4 right-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus-visible:ring-2 focus-visible:outline-none disabled:pointer-events-none"
                    >
                        <X className="size-4" />
                        <span className="sr-only">Chiudi</span>
                    </DialogPrimitive.Close>
                )}
            </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
    );
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="dialog-header"
            className={cn('flex flex-col gap-1.5 text-center sm:text-left', className)}
            {...props}
        />
    );
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return (
        <div
            data-slot="dialog-footer"
            className={cn('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className)}
            {...props}
        />
    );
}

function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>) {
    return (
        <DialogPrimitive.Title
            data-slot="dialog-title"
            className={cn('font-heading text-lg font-semibold', className)}
            {...props}
        />
    );
}

function DialogDescription({
    className,
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
    return (
        <DialogPrimitive.Description
            data-slot="dialog-description"
            className={cn('text-muted-foreground text-sm', className)}
            {...props}
        />
    );
}

export {
    Dialog,
    DialogTrigger,
    DialogClose,
    DialogOverlay,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
};
