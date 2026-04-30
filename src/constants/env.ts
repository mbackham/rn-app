import {
  API_BASE_URL,
  API_TIMEOUT,
  APP_NAME,
  APP_VERSION,
  ENABLE_LOGS,
  ENABLE_ANALYTICS,
} from '@env';

export const ENV = {
  API_BASE_URL: API_BASE_URL || 'http://localhost:3000',
  API_TIMEOUT: parseInt(API_TIMEOUT || '30000', 10),
  APP_NAME: APP_NAME || 'RN App',
  APP_VERSION: APP_VERSION || '1.0.0',
  ENABLE_LOGS: ENABLE_LOGS === 'true',
  ENABLE_ANALYTICS: ENABLE_ANALYTICS === 'true',
} as const;

if (__DEV__) {
  console.log('Environment Variables:', ENV);
}
