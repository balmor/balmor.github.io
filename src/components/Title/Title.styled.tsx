import styled from 'styled-components';
import { breakpoint } from '../../utils';
import { StyledTitleProps } from './Title';

export const StyledTitle = styled.div<StyledTitleProps>`
  h1 {
    font-size: 24px;
    letter-spacing: -1px;
    line-height: 28px;
    font-weight: 100;
    transition: 0.6s all ease;
    margin: 0;
    color: ${({ loader }) => (loader ? 'white' : 'inherit')};

    ${breakpoint('xs', 'md')`
      width: 10rem;
    `}
  }

  h2 {
    color: ${({ theme, loader }) => (loader ? '#8d9698' : theme.textThird)};
    transition: 0.6s all ease;
    margin: 0;
    font-size: 14px;
    font-weight: normal;
    text-align: center;
    margin: 0;

    ${breakpoint('xs', 'md')`
      display: none;
    `}
  }

  &:hover {
    h2 {
      color: ${({ theme }) => theme.textSecondary};
    }
  }
`;