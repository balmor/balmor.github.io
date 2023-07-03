import styled, { css } from 'styled-components';
import { breakpoint } from '../../utils';

import { KeyboardArrowRight } from '@styled-icons/material-rounded/KeyboardArrowRight';
import { KeyboardArrowDown } from '@styled-icons/material-rounded/KeyboardArrowDown';
import { LangSwitcherProps } from './LangSwitcher';

const icon = css`
  color: ${({ theme }) => theme.textSecondary};
  cursor: pointer;
  align-self: center;
  position: absolute;
  top: .1rem;
  left: 0;
`;

export const StyledArrowRight = styled(KeyboardArrowRight)`
  ${icon}
`;

export const StyledArrowDown = styled(KeyboardArrowDown)`
  ${icon}
`;

export const StyledButton = styled.button<LangSwitcherProps>`
  display: block;
  align-self: center;
  cursor: pointer;
  margin: 0 1rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.textSecondary};
`;

export const StyledOptions = styled.div`
  position: absolute;
  overflow: auto;
  z-index: 1;
  top: 100%;
  left: 0;
`;

export const StyledDropdown = styled.div`
  display: inline-block;
  position: relative;
  width: 10rem;

  ${breakpoint('xs', 'md')`
    width: auto;
    margin: 1.4rem 0;
  `}

  &:hover {
    ${StyledArrowRight}, ${StyledArrowDown}, ${StyledButton}:hover {
      color: ${({ theme }) => theme.textHover};
    }
  }
`;