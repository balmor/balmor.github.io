import styled from 'styled-components';
import { breakpoint } from '../../utils';

export const StyledH2 = styled.h2`
  margin-top: 4rem;
  color: #e6e5e5;

  ${breakpoint('xs', 'md')`
    display: none;
  `}
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  list-style: none;

  ${breakpoint('xs', 'md')`
    display: none;
    flex-direction: column;
    align-items: center;
  `}
`;

export const StyledLi = styled.li`
  text-align: center;
  max-width: 34rem;
  padding: 1rem;
  width: 30rem;
  margin-bottom: 3rem;

  ${breakpoint('xs', 'md')`
    width: 20rem;
  `}
`;