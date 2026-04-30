import { MaterialIcons } from '@expo/vector-icons';
import { StyleProp, ViewStyle } from 'react-native';

// Maps SF Symbol names (used in layout) to MaterialIcons equivalents
const SF_TO_MATERIAL: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  'house.fill': 'home',
  'paperplane.fill': 'send',
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
};

type IconSymbolProps = {
  name: string;
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
};

export function IconSymbol({ name, size = 24, color, style }: IconSymbolProps) {
  const materialName = SF_TO_MATERIAL[name] ?? 'help-outline';
  return <MaterialIcons name={materialName} size={size} color={color} style={style as any} />;
}
