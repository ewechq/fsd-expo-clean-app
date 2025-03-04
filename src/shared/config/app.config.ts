export const APP_CONFIG = {
    // Базовые настройки приложения
    APP_NAME: 'FSD Expo App',
    VERSION: '1.0.0',
    
    // API конфигурация
    API: {
        BASE_URL: process.env.API_URL || 'https://api.example.com',
        TIMEOUT: 10000,
    },
    
    // Настройки темы
    THEME: {
        DARK: 'dark',
        LIGHT: 'light',
    },
    
    // Настройки навигации
    NAVIGATION: {
        INITIAL_ROUTE: 'Home',
    },
    
    // Настройки кэширования
    CACHE: {
        TTL: 3600, // время жизни кэша в секундах
    },
} as const;

// Типы для конфигурации
export type AppConfig = typeof APP_CONFIG;
export type ThemeType = typeof APP_CONFIG.THEME[keyof typeof APP_CONFIG.THEME]; 