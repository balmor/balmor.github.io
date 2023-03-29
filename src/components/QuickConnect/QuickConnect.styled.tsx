import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Icon } from '@iconify/react';
import { breakpoint } from '../../utils';

const icon = css`
  color: ${({ theme }) => theme.textThird};
  font-size: 1.8rem;
`;

export const StyledQuickConnect = styled.div`
  width: 30%;

  ${breakpoint('xs', 'md')`
    width: 70%;
  `}
`;

export const StyledConnect = styled.dl`
  dt {
    display: inline-block;
    min-width: 3rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 0.8rem;
  }

  dd {
    display: inline;
    margin: 0;
    a {
      color: #8d9698;
      text-decoration: none;
      transition: all 0.4s ease-out;

      &:hover {
        color: ${({ theme }) => theme.textHover};
      }
    }

    &:after {
      display: block;
      content: '';
      margin-bottom: 1.4rem;
    }
  }
`;

export const StyledMap = styled.div`
  position: relative;
`;

export const StyledPin = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50% 50% 50% 0;
  background: ${({ theme }) => theme.textThird};
  position: absolute;
  left: 8.7rem;
  top: 12.5rem;
  margin: -2rem 0 0 -2rem;
  transform: rotate(-45deg);
  transition: all 0.4s ease-out;

  &:after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.4rem 0 0 0.4rem;
    background: white;
    position: absolute;
    border-radius: 50%;
  }

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.textThird)};
  }
`;

export const StyledSimpleIcon = styled(Icon)`
  ${icon}
`;