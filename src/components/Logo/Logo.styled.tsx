import styled from 'styled-components';
import { LogoProps } from './Logo';
import { logoSize } from './logoSize';

const logoColor = {
  black: '#000',
  blue: '#3ab9d5',
  gray: '#aaa',
  white: '#fff',
};

export const StyledLogo = styled.i<LogoProps>`
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

export const StyledLetter = styled.i<LogoProps>`
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

export const StyledLetterOne = styled(StyledLetter)<LogoProps>`
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

export const StyledLetterTwo = styled(StyledLetter)<LogoProps>`
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