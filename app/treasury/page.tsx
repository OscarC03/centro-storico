'use client';

import { Landmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';

export default function TreasuryPage() {
    const { t } = useTranslation(['navigation', 'common']);

    return (
        <div className="space-y-6">
            <PageHeader
                title={t('navigation:sections.treasury')}
                description={t('navigation:descriptions.treasury')}
            />
            <EmptyState
                icon={Landmark}
                title={t('common:states.comingSoon.title')}
                description={t('common:states.comingSoon.description')}
            />
        </div>
    );
}
