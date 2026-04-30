export const APP_CONFIG = {
  APP_NAME: 'RN App',
  VERSION: '1.0.0',
  API_BASE_URL: __DEV__ ? 'http://localhost:3000' : 'https://api.production.com',
  API_TIMEOUT: 30000,
  ENABLE_LOGS: __DEV__,
} as const;

export const STORAGE_KEYS = {
  USER_TOKEN: '@user_token',
  USER_INFO: '@user_info',
  THEME: '@theme',
} as const;

export const THEME = {
  COLORS: {
    PRIMARY: '#007AFF',
    SECONDARY: '#5856D6',
    SUCCESS: '#34C759',
    WARNING: '#FF9500',
    ERROR: '#FF3B30',
    BACKGROUND: '#FFFFFF',
    TEXT: '#000000',
    TEXT_SECONDARY: '#8E8E93',
    BORDER: '#C6C6C8',
  },
  SPACING: {
    XS: 4,
    SM: 8,
    MD: 16,
    LG: 24,
    XL: 32,
  },
  FONT_SIZES: {
    XS: 12,
    SM: 14,
    MD: 16,
    LG: 18,
    XL: 24,
  },
} as const;
