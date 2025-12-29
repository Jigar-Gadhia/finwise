import React, {createContext, useContext, useMemo, ReactNode} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/store';
import {LightColors, DarkColors} from './colors';
import {AppTheme} from './types';

const ThemeContext = createContext<AppTheme | null>(null);

type Props = {
  children: ReactNode;
};

export const AppThemeProvider = ({children}: Props) => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const value = useMemo<AppTheme>(
    () => ({mode, colors: mode === 'dark' ? DarkColors : LightColors}),
    [mode],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useAppTheme must be used inside AppThemeProvider');
  }
  return ctx;
};
