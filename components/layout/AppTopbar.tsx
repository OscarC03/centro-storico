'use client';

import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { NAV_ITEMS, isActivePath } from '@/lib/navigation';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/layout/ThemeToggle';
import { UserMenu } from '@/components/layout/UserMenu';

interface AppTopbarProps {
    onMenuClick: () => void;
}

export function AppTopbar({ onMenuClick }: AppTopbarProps) {
    const pathname = usePathname();
    const { t } = useTranslation('navigation');

    const current = NAV_ITEMS.find((item) => isActivePath(pathname, item.href));
    const title = current ? t(`sections.${current.key}`) : '';

    return (
        <header className="bg-background/80 sticky top-0 z-30 flex h-16 items-center gap-3 border-b px-4 backdrop-blur md:px-6">
            <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={onMenuClick}
                aria-label={t('menu.open')}
            >
                <Menu />
            </Button>
            <h2 className="font-heading text-base font-semibold">{title}</h2>
            <div className="ml-auto flex items-center gap-1">
                <ThemeToggle />
                <UserMenu />
            </div>
        </header>
    );
}
