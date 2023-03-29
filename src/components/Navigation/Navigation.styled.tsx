import styled from 'styled-components';
import { Link } from 'react-scroll';
import { breakpoint } from '../../utils';
import { StyledNavigationProps } from './Navigation';
import { StyledTheme } from '../../theme/_types';

type TStyledMenu = {
  isOpenMenu: boolean;
  theme: StyledTheme;
}

export const StyledMenu = styled.div`
  display: none;
  background: ${({ theme }) => theme.headerBg};
  border: 1px solid ${({ theme }) => theme.textThird};
  border-bottom: none;
  padding: 0.5rem 1rem;
  cursor: pointer;

  ${breakpoint('xs', 'md')`
    display: block;
    position: absolute;
    right: 0;
    top: 0;

    div {
      width: 35px;
      height: 5px;
      background-color: ${({ isOpenMenu, theme }: TStyledMenu) => isOpenMenu ? theme.textPrimary : theme.textThird};
      margin: 6px 0;
      transition: 0.4s;
    }
  `}
`;

export const StyledUl = styled.ul<{ isOpenMenu: boolean }>`
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  background: ${({ theme }) => theme.headerBg};

  li {
    display: inline-block;
  }

  ${breakpoint('xs', 'md')`
    display: ${({ isOpenMenu }: TStyledMenu) => isOpenMenu ? 'block' : 'none'};
    position: absolute;
    border: 1px solid #ddd;
    top: 5rem;
    right: 0;
    width: 20rem;

    li {
      display: block;
    }
  `}
`;

export const StyledNavigation = styled.nav<StyledNavigationProps>`
  ${breakpoint('xs', 'md')`
    position: absolute;
    right: 0;
  `}

  ${StyledUl}
  ${StyledMenu}
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 8rem;
  line-height: 8rem;
  cursor: pointer;
  user-select: none;

  margin: 0;
  padding: 0 2rem;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};

  transition: 0.3s all ease;

  ${breakpoint('xs', 'md')`
    height: 4rem;
    line-height: 4rem;

    span:before, &:hover span:before, &.active span:before {
      display: none;
    }

    &.active {
      background: ${({ theme }) => theme.boxBorder};
    }
  `}

  span {
    position: relative;
    display: block;

    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: 1.4rem;
      left: 0;
      width: 100%;
      height: 0.4rem;
      background: ${({ theme }) => theme.textThird};
      -webkit-transform: scale3d(0, 1, 1);
      transform: scale3d(0, 1, 1);
      -webkit-transition: -webkit-transform 0.1s;
      transition: transform 0.1s;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.textHover};

    span:before {
      background: ${({ theme }) => theme.textPrimary};
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
  }

  &.active {
    color: ${({ theme }) => theme.textThird};

    span:before {
      background: ${({ theme }) => theme.textThird};
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
  }
`;