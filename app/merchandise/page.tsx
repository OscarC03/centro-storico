'use client';

import { Shirt } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';

export default function MerchandisePage() {
    const { t } = useTranslation(['navigation', 'common']);

    return (
        <div className="space-y-6">
            <PageHeader
                title={t('navigation:sections.merchandise')}
                description={t('navigation:descriptions.merchandise')}
            />
            <EmptyState
                icon={Shirt}
                title={t('common:states.comingSoon.title')}
                description={t('common:states.comingSoon.description')}
            />
        </div>
    );
}
