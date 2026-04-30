import { ENV } from '@/constants/env';

export function testEnvVariables() {
  console.log('=== Environment Variables Test ===');
  console.log('API_BASE_URL:', ENV.API_BASE_URL);
  console.log('API_TIMEOUT:', ENV.API_TIMEOUT);
  console.log('APP_NAME:', ENV.APP_NAME);
  console.log('APP_VERSION:', ENV.APP_VERSION);
  console.log('ENABLE_LOGS:', ENV.ENABLE_LOGS);
  console.log('ENABLE_ANALYTICS:', ENV.ENABLE_ANALYTICS);
  console.log('=================================');

  return ENV;
}
