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
  width: ${({ size = 'small' }) => logoSize[size].logoWeigth};
  height: ${({ size = 'small' }) => logoSize[size].logoHeight};

  &:before {
    position: absolute;
    content: '';
    display: block;
    top: ${({ size = 'small' }) => logoSize[size].topCut};
    left: ${({ size = 'small' }) => logoSize[size].leftCut};
    width: 0;
    height: 0;
    z-index: 1;

    border-top: ${({ size = 'small' }) => logoSize[size].borderTopCut} solid
      ${({ background }) => background};
    border-right: ${({ size = 'small' }) => logoSize[size].borderRightCut} solid
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
    background: ${({ color = 'blue' }) => logoColor[color]};
  }

  &:before {
    position: absolute;
    display: block;
    content: '';
    background: ${({ background }) => background};
  }
`;

export const StyledLetterOne = styled(StyledLetter)<LogoProps>`
  width: ${({ size = 'small' }) => logoSize[size].widthLetterOne};
  height: ${({ size = 'small' }) => logoSize[size].heightLetterOne};
  border: ${({ size = 'small' }) => logoSize[size].borderLetterOne} solid
    ${({ color = 'blue' }) => logoColor[color]};

  &:after {
    width: ${({ size = 'small' }) => logoSize[size].widthLetterOneAfter};
    height: ${({ size = 'small' }) => logoSize[size].heightLetterOneAfter};
    top: ${({ size = 'small' }) => logoSize[size].topLetterOneAfter};
    left: ${({ size = 'small' }) => logoSize[size].leftLetterOneAfter};
  }

  &:before {
    width: ${({ size = 'small' }) => logoSize[size].widthLetterOneBefore};
    height: ${({ size = 'small' }) => logoSize[size].heightLetterOneBefore};
    top: ${({ size = 'small' }) => logoSize[size].topLetterOneBefore};
    left: ${({ size = 'small' }) => logoSize[size].leftLetterOneBefore};
  }
`;

export const StyledLetterTwo = styled(StyledLetter)<LogoProps>`
  width: ${({ size = 'small' }) => logoSize[size].widthLetterTwo};
  height: ${({ size = 'small' }) => logoSize[size].heightLetterTwo};
  border: ${({ size = 'small' }) => logoSize[size].borderLetterTwo} solid
    ${({ color = 'blue' }) => logoColor[color]};
  top: ${({ size = 'small' }) => logoSize[size].topLetterTwo};
  left: ${({ size = 'small' }) => logoSize[size].leftLetterTwo};

  &:after {
    width: ${({ size = 'small' }) => logoSize[size].widthLetterTwoAfter};
    height: ${({ size = 'small' }) => logoSize[size].heightLetterTwoAfter};
    top: ${({ size = 'small' }) => logoSize[size].topLetterTwoAfter};
    left: ${({ size = 'small' }) => logoSize[size].leftLetterTwoAfter};
  }

  &:before {
    width: ${({ size = 'small' }) => logoSize[size].widthLetterTwoBefore};
    height: ${({ size = 'small' }) => logoSize[size].heightLetterTwoBefore};
    top: ${({ size = 'small' }) => logoSize[size].topLetterTwoBefore};
    left: ${({ size = 'small' }) => logoSize[size].leftLetterTwoBefore};
  }
`;