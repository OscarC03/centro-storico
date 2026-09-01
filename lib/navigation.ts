import {
    LayoutDashboard,
    Users,
    ReceiptEuro,
    Shirt,
    Landmark,
    type LucideIcon,
} from 'lucide-react';

export interface NavItem {
    /** Chiave i18n sotto navigation:sections e navigation:descriptions */
    key: string;
    href: string;
    icon: LucideIcon;
}

export const NAV_ITEMS: NavItem[] = [
    { key: 'dashboard', href: '/', icon: LayoutDashboard },
    { key: 'members', href: '/members', icon: Users },
    { key: 'fees', href: '/fees', icon: ReceiptEuro },
    { key: 'merchandise', href: '/merchandise', icon: Shirt },
    { key: 'treasury', href: '/treasury', icon: Landmark },
];

export function isActivePath(pathname: string, href: string): boolean {
    return href === '/' ? pathname === '/' : pathname.startsWith(href);
}
