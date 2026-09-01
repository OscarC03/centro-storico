import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import '@/lib/i18n';
import DashboardPage from './page';

describe('DashboardPage', () => {
    it('renders the translated section title', () => {
        render(<DashboardPage />);
        expect(screen.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
    });
});
