import React from 'react';
import styled from 'styled-components';
import { logoSize } from './logoSize';

type LogoSizeProps = 'small' | 'medium' | 'large';
type LogoColorProps = 'black' | 'blue' | 'gray' | 'white';
type LogoProps = {
  size?: LogoSizeProps;
  color?: LogoColorProps;
  background?: string;
};

const defaultLogo: LogoProps = {
  size: 'medium',
  color: 'blue',
  background: 'white',
};

const logoColor = {
  black: '#000',
  blue: '#3ab9d5',
  gray: '#aaa',
  white: '#fff',
};

const StyledLogo = styled.i<LogoProps>`
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: ${({ size }) => logoSize[size].logoWeigth};
  height: ${({ size }) => logoSize[size].logoHeight};

  &:before {
    position: absolute;
    content: '';
    display: block;
    top: ${({ size }) => logoSize[size].topCut};
    left: ${({ size }) => logoSize[size].leftCut};
    width: 0;
    height: 0;
    z-index: 1;

    border-top: ${({ size }) => logoSize[size].borderTopCut} solid
      ${({ background }) => background};
    border-right: ${({ size }) => logoSize[size].borderRightCut} solid
      transparent;
  }
`;

const StyledLetter = styled.i<LogoProps>`
  position: absolute;
  display: block;
  border-radius: 0 50% 50% 0;

  &:after {
    position: absolute;
    content: '';
    background: ${({ color }) => logoColor[color]};
  }

  &:before {
    position: absolute;
    display: block;
    content: '';
    background: ${({ background }) => background};
  }
`;

const StyledLetterOne = styled(StyledLetter)<LogoProps>`
  width: ${({ size }) => logoSize[size].widthLetterOne};
  height: ${({ size }) => logoSize[size].heightLetterOne};
  border: ${({ size }) => logoSize[size].borderLetterOne} solid
    ${({ color }) => logoColor[color]};

  &:after {
    width: ${({ size }) => logoSize[size].widthLetterOneAfter};
    height: ${({ size }) => logoSize[size].heightLetterOneAfter};
    top: ${({ size }) => logoSize[size].topLetterOneAfter};
    left: ${({ size }) => logoSize[size].leftLetterOneAfter};
  }

  &:before {
    width: ${({ size }) => logoSize[size].widthLetterOneBefore};
    height: ${({ size }) => logoSize[size].heightLetterOneBefore};
    top: ${({ size }) => logoSize[size].topLetterOneBefore};
    left: ${({ size }) => logoSize[size].leftLetterOneBefore};
  }
`;

const StyledLetterTwo = styled(StyledLetter)<LogoProps>`
  width: ${({ size }) => logoSize[size].widthLetterTwo};
  height: ${({ size }) => logoSize[size].heightLetterTwo};
  border: ${({ size }) => logoSize[size].borderLetterTwo} solid
    ${({ color }) => logoColor[color]};
  top: ${({ size }) => logoSize[size].topLetterTwo};
  left: ${({ size }) => logoSize[size].leftLetterTwo};

  &:after {
    width: ${({ size }) => logoSize[size].widthLetterTwoAfter};
    height: ${({ size }) => logoSize[size].heightLetterTwoAfter};
    top: ${({ size }) => logoSize[size].topLetterTwoAfter};
    left: ${({ size }) => logoSize[size].leftLetterTwoAfter};
  }

  &:before {
    width: ${({ size }) => logoSize[size].widthLetterTwoBefore};
    height: ${({ size }) => logoSize[size].heightLetterTwoBefore};
    top: ${({ size }) => logoSize[size].topLetterTwoBefore};
    left: ${({ size }) => logoSize[size].leftLetterTwoBefore};
  }
`;

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
