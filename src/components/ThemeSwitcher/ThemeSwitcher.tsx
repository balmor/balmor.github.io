import React, { useContext } from 'react';
import { StyledMoon, StyledSun } from '.';

import { ThemeContext } from '../../context/ThemeStore';
import { ThemeMode } from '../../theme/_types';

export const ThemeSwitcher: React.FC = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  return (
    <>
      {theme === ThemeMode.Light ? (
        <StyledMoon onClick={() => switchTheme(ThemeMode.Dark)} size={24} />
      ) : (
        <StyledSun onClick={() => switchTheme(ThemeMode.Light)} size={24} />
      )}
    </>
  );
};
