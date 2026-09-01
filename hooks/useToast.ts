'use client';

import * as React from 'react';

export type ToastVariant = 'default' | 'success' | 'destructive' | 'warning' | 'info';

export interface ToastData {
    id: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    variant?: ToastVariant;
    duration?: number;
}

type ToastInput = Omit<ToastData, 'id'>;
type Listener = () => void;

const DEFAULT_DURATION = 5000;

let toasts: ToastData[] = [];
let count = 0;
const listeners = new Set<Listener>();

function emit() {
    for (const listener of listeners) {
        listener();
    }
}

function subscribe(listener: Listener): () => void {
    listeners.add(listener);
    return () => {
        listeners.delete(listener);
    };
}

function getSnapshot(): ToastData[] {
    return toasts;
}

export function toast(input: ToastInput): string {
    const id = String(++count);
    toasts = [{ id, variant: 'default', duration: DEFAULT_DURATION, ...input }, ...toasts];
    emit();
    return id;
}

export function dismissToast(id: string): void {
    toasts = toasts.filter((item) => item.id !== id);
    emit();
}

export function useToast() {
    const activeToasts = React.useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
    return { toasts: activeToasts, toast, dismiss: dismissToast };
}
