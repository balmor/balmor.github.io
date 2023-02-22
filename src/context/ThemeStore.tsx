import React, { useEffect, useState } from 'react';
import { ThemeMode } from '../theme/_types';
import { isBrowser } from '../utils';

export const LS_THEME_KEY = 'theme';

interface ThemeContextProps {
  theme: string;
  switchTheme: React.Dispatch<ThemeMode>;
}

const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export type ThemeStoreProps = { children: React.ReactNode };

const ThemeStore: React.FC<ThemeStoreProps> = ({ children }): JSX.Element => {
  const [theme, setTheme] = useState<ThemeMode>(ThemeMode.Light);

  const switchTheme = (theme: React.SetStateAction<ThemeMode>) => setTheme(theme);

  useEffect(() => {
    if (window.localStorage.getItem(LS_THEME_KEY) === ThemeMode.Dark) {
      switchTheme(ThemeMode.Dark);
    }
  }, []);

  useEffect(() => {
    isBrowser && window.localStorage.setItem(LS_THEME_KEY, theme);
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};

export { ThemeStore, ThemeContext };
