'use client';

import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();

    return (
        <main className="flex flex-1 flex-col items-center justify-center gap-6 p-8 text-center">
            <div className="bg-primary text-primary-foreground flex size-16 items-center justify-center rounded-2xl text-2xl font-bold">
                CS
            </div>
            <div className="space-y-2">
                <h1 className="text-3xl font-semibold tracking-tight">{t('app.name')}</h1>
                <p className="text-foreground/70">{t('app.subtitle')}</p>
            </div>
            <span className="border-primary/40 text-primary rounded-full border px-3 py-1 text-sm font-medium">
                {t('app.status')}
            </span>
        </main>
    );
}
