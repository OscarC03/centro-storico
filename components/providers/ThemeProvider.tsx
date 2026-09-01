'use client';

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from 'react';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

function applyTheme(theme: Theme) {
    document.documentElement.classList.toggle('dark', theme === 'dark');
}

function readStoredTheme(): Theme {
    if (typeof document === 'undefined') {
        return 'light';
    }
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

interface ThemeProviderProps {
    children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>(readStoredTheme);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const setTheme = useCallback((next: Theme) => {
        setThemeState(next);
        try {
            localStorage.setItem(STORAGE_KEY, next);
        } catch {
            // storage non disponibile: si prosegue senza persistenza
        }
    }, []);

    const toggleTheme = useCallback(() => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }, [theme, setTheme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextValue {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme deve essere usato dentro ThemeProvider');
    }
    return context;
}
