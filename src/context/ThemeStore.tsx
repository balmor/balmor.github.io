import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../theme/_types';
import { isBrowser } from '../utils';

export const LS_THEME_KEY = 'theme';

interface ThemeContextProps {
  theme: string;
  switchTheme: React.Dispatch<ThemeMode>;
}

export const getSavedMode = (): ThemeMode =>
  isBrowser && window.localStorage.getItem(LS_THEME_KEY) === ThemeMode.Dark ? ThemeMode.Dark : ThemeMode.Light;

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export type ThemeStoreProps = { children: React.ReactNode };

const ThemeStore: React.FC<ThemeStoreProps> = ({ children }): JSX.Element => {
  console.log('--> getSavedMode', getSavedMode());
  console.log('--> isBrowser', isBrowser);
  const [theme, setTheme] = useState<ThemeMode>(getSavedMode);

  const switchTheme = (theme: React.SetStateAction<ThemeMode>) => setTheme(theme);

  useEffect(() => {
    window.localStorage.setItem(LS_THEME_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeStore, ThemeContext };
