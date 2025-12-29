import {LightColors} from './colors';

export type ThemeMode = 'light' | 'dark';

export type AppColors = typeof LightColors;

export type AppTheme = {
  mode: ThemeMode;
  colors: AppColors;
};
