'use client';

import { LogOut, Settings, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Avatar, AvatarFallback } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';

export function UserMenu() {
    const { t } = useTranslation('navigation');

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full"
                    aria-label={t('user.menuLabel')}
                >
                    <Avatar className="size-8">
                        <AvatarFallback>
                            <User className="size-4" />
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                    <span className="flex flex-col">
                        <span className="text-sm font-medium">{t('user.placeholderName')}</span>
                        <span className="text-muted-foreground text-xs font-normal">
                            {t('user.placeholderEmail')}
                        </span>
                    </span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                    <User />
                    {t('user.profile')}
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Settings />
                    {t('user.settings')}
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem disabled>
                    <LogOut />
                    {t('user.logout')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
