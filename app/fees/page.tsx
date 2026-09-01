'use client';

import { ReceiptEuro } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';

export default function FeesPage() {
    const { t } = useTranslation(['navigation', 'common']);

    return (
        <div className="space-y-6">
            <PageHeader
                title={t('navigation:sections.fees')}
                description={t('navigation:descriptions.fees')}
            />
            <EmptyState
                icon={ReceiptEuro}
                title={t('common:states.comingSoon.title')}
                description={t('common:states.comingSoon.description')}
            />
        </div>
    );
}
