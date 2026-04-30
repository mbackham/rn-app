import React from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { lightTheme, darkTheme } from '@/constants/theme';
import { ErrorBoundary } from '@/components/common';
import { WelcomeScreen } from '@/screens/WelcomeScreen';
import { testEnvVariables } from '@/utils/testEnv';

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? darkTheme : lightTheme;

  // Test environment variables on app load
  if (__DEV__) {
    testEnvVariables();
  }

  return (
    <SafeAreaProvider>
      <PaperProvider theme={theme}>
        <ErrorBoundary>
          <WelcomeScreen />
        </ErrorBoundary>
      </PaperProvider>
    </SafeAreaProvider>
  );
}
