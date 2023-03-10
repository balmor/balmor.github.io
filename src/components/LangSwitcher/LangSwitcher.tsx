import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { langOptions } from '../../i18n';
import { StyledArrowDown, StyledArrowRight, StyledButton, StyledDropdown, StyledOptions } from './';

export type LangSwitcherProps = {
  value: string;
  label?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const LangSwitcher: React.FC = () => {
  const styledButton = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setMenu] = useState(false);
  const { i18n, i18n: { language } } = useTranslation();
  const setLanguage = (value: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    i18n.changeLanguage(value);
  };

  const toggleDropdown = () => {
    setMenu(!isMenuOpen);
  };

  const currentLabel = langOptions.find(lang => lang.value === language)?.label;

  useEffect(() => {
    const checkIfClickedOutside = (event: MouseEvent) => {
      const { current } = styledButton || {};
      if (isMenuOpen && !current?.contains(event.target as HTMLElement)) {
        setMenu(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside)
    return () => document.removeEventListener("mousedown", checkIfClickedOutside);
  }, [isMenuOpen])

  return (
    <StyledDropdown onClick={toggleDropdown}>
      {isMenuOpen ? (<StyledArrowDown size={16} />) : (<StyledArrowRight size={16} />)}
      <StyledButton value={language} isActive>{currentLabel}</StyledButton>
      <StyledOptions>
        {isMenuOpen && langOptions
          .filter(({ value }) => value !== language)
          .map(({ value, label }) => (
            <StyledButton ref={styledButton} key={value} onClick={setLanguage(value)} value={value}>
              {label}
            </StyledButton>
          ))}
        </StyledOptions>
    </StyledDropdown>
  );
};
