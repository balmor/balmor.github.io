import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import { KeyboardArrowDown } from '@styled-icons/material-rounded/KeyboardArrowDown';

import { langOptions } from '../../i18n';

export type LangSwitcherProps = {
  value: string;
  label?: string;
  isActive?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

const icon = css`
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  align-self: center;
  position: absolute;
  top: .1rem;
  left: 0;
`;

const StyledArrowRight = styled(KeyboardArrowRight)`
  ${icon}
`;

const StyledArrowDown = styled(KeyboardArrowDown)`
  ${icon}
`;

const StyledButton = styled.button<LangSwitcherProps>`
  display: block;
  align-self: center;
  cursor: pointer;
  margin: 0 1rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.textSecondary};
`;

const StyledOptions = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 1;
  top: 100%;
  left: 0;
`;

const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
  width: 10rem;

  &:hover {
    ${StyledArrowRight}, ${StyledArrowDown}, ${StyledButton}:hover {
      color: black;
    }
  }
`;

export const LangSwitcher: React.FC = () => {
  const [isOpen, setDropdown] = useState(true);
  const { i18n, i18n: { language } } = useTranslation();
  const setLanguage = (value: string) => (event) => {
    event.preventDefault();
    i18n.changeLanguage(value);
  };

  const toggleDropdown = () => {
    console.log(`isOpen`, isOpen);
    setDropdown(!isOpen);
  };

  const currentLabel = langOptions.find(el => el.value === language).label;

  console.log(`langOptions.filter(el => el.value === language)`, langOptions.find(el => el.value === language));

  return (
    <StyledDropdown onClick={toggleDropdown}>
      {isOpen ? (<StyledArrowDown size={16} />) : (<StyledArrowRight size={16} />)}
      <StyledButton value={language} isActive>{currentLabel}</StyledButton>
      <StyledOptions>
        {isOpen && langOptions
          .filter(({ value }) => value !== language)
          .map(({ value, label }) => (
            <StyledButton key={value} onClick={setLanguage(value)} value={value}>
              {label}
            </StyledButton>
          ))}
        </StyledOptions>
    </StyledDropdown>
  );
};
