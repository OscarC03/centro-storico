'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'motion/react';

import { AppSidebar } from '@/components/layout/AppSidebar';
import { AppTopbar } from '@/components/layout/AppTopbar';

interface AppShellProps {
    children: React.ReactNode;
}

export function AppShell({ children }: AppShellProps) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    React.useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === 'Escape') {
                setMobileOpen(false);
            }
        }
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    }, []);

    return (
        <div className="flex min-h-svh">
            <aside className="hidden w-64 shrink-0 md:block">
                <div className="sticky top-0 h-svh">
                    <AppSidebar />
                </div>
            </aside>

            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div
                            key="overlay"
                            className="fixed inset-0 z-40 bg-black/50 md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setMobileOpen(false)}
                            aria-hidden
                        />
                        <motion.aside
                            key="drawer"
                            className="fixed inset-y-0 left-0 z-50 w-64 md:hidden"
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
                        >
                            <AppSidebar onNavigate={() => setMobileOpen(false)} />
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            <div className="flex min-w-0 flex-1 flex-col">
                <AppTopbar onMenuClick={() => setMobileOpen(true)} />
                <main className="flex-1 p-4 md:p-8">{children}</main>
            </div>
        </div>
    );
}
