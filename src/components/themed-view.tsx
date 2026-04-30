import { View, type ViewProps } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

export function ThemedView({ style, ...rest }: ViewProps) {
  const theme = useColorScheme();
  return <View style={[{ backgroundColor: Colors[theme].background }, style]} {...rest} />;
}
