'use client';

import { useState, type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/lib/i18n';
import { createQueryClient } from '@/lib/react-query';

interface AppProvidersProps {
    children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
    const [queryClient] = useState(createQueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
        </QueryClientProvider>
    );
}
