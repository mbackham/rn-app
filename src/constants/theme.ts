import { MD3LightTheme, MD3DarkTheme } from 'react-native-paper';
import { THEME } from './config';

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
