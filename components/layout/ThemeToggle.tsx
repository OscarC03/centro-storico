'use client';

import { Moon, Sun } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { useTheme } from '@/components/providers/ThemeProvider';
import { Button } from '@/components/ui/Button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/Tooltip';

export function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const { t } = useTranslation('common');
    const nextThemeLabel = theme === 'dark' ? t('theme.light') : t('theme.dark');

    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    aria-label={t('theme.toggle')}
                >
                    <Sun className="hidden dark:block" />
                    <Moon className="block dark:hidden" />
                </Button>
            </TooltipTrigger>
            <TooltipContent>{nextThemeLabel}</TooltipContent>
        </Tooltip>
    );
}
