'use client';

import { useState, type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { I18nextProvider } from 'react-i18next';

import i18n from '@/lib/i18n';
import { createQueryClient } from '@/lib/react-query';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from '@/components/common/Toaster';

interface AppProvidersProps {
    children: ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
    const [queryClient] = useState(createQueryClient);

    return (
        <QueryClientProvider client={queryClient}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>
                    {children}
                    <Toaster />
                </ThemeProvider>
            </I18nextProvider>
            {process.env.NODE_ENV !== 'production' && <ReactQueryDevtools initialIsOpen={false} />}
        </QueryClientProvider>
    );
}
