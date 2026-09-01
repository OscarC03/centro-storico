import type { Metadata } from 'next';
import { Geist, Geist_Mono, Fraunces } from 'next/font/google';

import './globals.css';
import { AppProviders } from '@/components/providers/AppProviders';
import { AppShell } from '@/components/layout/AppShell';

const geistSans = Geist({
    variable: '--font-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-mono',
    subsets: ['latin'],
});

const fraunces = Fraunces({
    variable: '--font-heading',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Centro Storico — Gestionale Rione',
    description:
        'Gestione amministrativa del rione Centro Storico di Ceva (CN): iscritti, quote, merchandise e cassa comune.',
};

const themeInitScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();`;

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html
            lang="it"
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full`}
        >
            <body className="min-h-svh">
                <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
                <AppProviders>
                    <AppShell>{children}</AppShell>
                </AppProviders>
            </body>
        </html>
    );
}
