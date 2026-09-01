'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';
import { NAV_ITEMS, isActivePath } from '@/lib/navigation';
import { Logo } from '@/components/brand/Logo';

interface AppSidebarProps {
    onNavigate?: () => void;
}

export function AppSidebar({ onNavigate }: AppSidebarProps) {
    const pathname = usePathname();
    const { t } = useTranslation('navigation');

    return (
        <div className="bg-sidebar text-sidebar-foreground border-sidebar-border flex h-full flex-col gap-6 border-r p-4">
            <div className="px-2 pt-2">
                <Logo />
            </div>
            <nav aria-label={t('menu.primary')} className="flex flex-1 flex-col gap-1">
                {NAV_ITEMS.map(({ key, href, icon: Icon }) => {
                    const active = isActivePath(pathname, href);
                    return (
                        <Link
                            key={key}
                            href={href}
                            onClick={onNavigate}
                            aria-current={active ? 'page' : undefined}
                            className={cn(
                                'group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                                active
                                    ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                                    : 'text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground'
                            )}
                        >
                            {active && (
                                <span className="bg-sidebar-primary absolute top-1/2 left-0 h-5 w-1 -translate-y-1/2 rounded-r-full" />
                            )}
                            <Icon className="size-4 shrink-0" />
                            {t(`sections.${key}`)}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
}
