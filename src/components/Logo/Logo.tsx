import React from 'react';
import { StyledLetterOne, StyledLetterTwo, StyledLogo } from './Logo.styled';

type LogoSizeProps = 'small' | 'medium' | 'large' | 'xlarge' | 'huge';
type LogoColorProps = 'black' | 'blue' | 'gray' | 'white';
export type LogoProps = {
  size?: LogoSizeProps;
  color?: LogoColorProps;
  background?: string;
};

const defaultLogo: LogoProps = {
  size: 'medium',
  color: 'blue',
  background: 'white',
};

export const Logo: React.FC<LogoProps> = ({
  size = defaultLogo.size,
  color = defaultLogo.color,
  background = defaultLogo.background,
}): JSX.Element => {

  const logoProperties = {
    size,
    color,
    background,
  };

  return (
    <StyledLogo { ...logoProperties }>
      <StyledLetterOne  { ...logoProperties } />
      <StyledLetterTwo  { ...logoProperties } />
    </StyledLogo>
  );
};
