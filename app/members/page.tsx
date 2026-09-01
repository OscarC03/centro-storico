'use client';

import { Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { PageHeader } from '@/components/common/PageHeader';
import { EmptyState } from '@/components/common/EmptyState';

export default function MembersPage() {
    const { t } = useTranslation(['navigation', 'common']);

    return (
        <div className="space-y-6">
            <PageHeader
                title={t('navigation:sections.members')}
                description={t('navigation:descriptions.members')}
            />
            <EmptyState
                icon={Users}
                title={t('common:states.comingSoon.title')}
                description={t('common:states.comingSoon.description')}
            />
        </div>
    );
}
