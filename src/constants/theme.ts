import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { THEME } from './config';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: THEME.COLORS.PRIMARY,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: THEME.COLORS.PRIMARY,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: '#fff',
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: '#fff',
  },
};

export const Fonts = {
  regular: undefined,
  medium: undefined,
  bold: undefined,
  mono: 'SpaceMono',
  rounded: undefined,
};

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: THEME.COLORS.PRIMARY,
    secondary: THEME.COLORS.SECONDARY,
    error: THEME.COLORS.ERROR,
    background: THEME.COLORS.BACKGROUND,
    surface: '#FFFFFF',
    onSurface: THEME.COLORS.TEXT,
    onSurfaceVariant: THEME.COLORS.TEXT_SECONDARY,
    outline: THEME.COLORS.BORDER,
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: THEME.COLORS.PRIMARY,
    secondary: THEME.COLORS.SECONDARY,
    error: THEME.COLORS.ERROR,
    background: '#000000',
    surface: '#1C1C1E',
    onSurface: '#FFFFFF',
    onSurfaceVariant: '#8E8E93',
    outline: '#38383A',
  },
};

export type AppTheme = typeof lightTheme;
