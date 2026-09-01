'use client';

import Image from 'next/image';
import { useTranslation } from 'react-i18next';

import { cn } from '@/lib/utils';

interface LogoProps {
    className?: string;
    showWordmark?: boolean;
}

export function Logo({ className, showWordmark = true }: LogoProps) {
    const { t } = useTranslation('navigation');

    return (
        <span className={cn('flex items-center gap-2.5', className)}>
            <Image
                src="/logo-filled.png"
                alt={t('brand.name')}
                width={36}
                height={36}
                className="size-9 rounded-lg object-cover"
                priority
            />
            {showWordmark && (
                <span className="flex flex-col leading-tight">
                    <span className="font-heading text-sm font-semibold">{t('brand.name')}</span>
                    <span className="text-muted-foreground text-xs">{t('brand.tagline')}</span>
                </span>
            )}
        </span>
    );
}
