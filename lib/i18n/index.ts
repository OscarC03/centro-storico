import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import common from '@/locales/it/common.json';
import navigation from '@/locales/it/navigation.json';

export const DEFAULT_LANGUAGE = 'it' as const;
export const DEFAULT_NAMESPACE = 'common' as const;

export const resources = {
    it: { common, navigation },
} as const;

if (!i18n.isInitialized) {
    void i18n.use(initReactI18next).init({
        lng: DEFAULT_LANGUAGE,
        fallbackLng: DEFAULT_LANGUAGE,
        defaultNS: DEFAULT_NAMESPACE,
        ns: ['common', 'navigation'],
        resources,
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
    });
}

export default i18n;
