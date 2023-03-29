import styled, { css } from 'styled-components';
import { breakpoint } from '../../utils';

const paragraph = css`
  font-size: 5rem;
  font-weight: 600;
  margin: 0;
  text-align: center;
  line-height: 10rem;

  ${breakpoint('xs', 'md')`
    font-size: 3rem;
    line-height: 4rem;
  `}
`;

export const StyledHelloWorld = styled.div`
  position: relative;
  margin: 0 auto;
  align-self: center;
  padding: 11rem 0;

  ${breakpoint('xs', 'md')`
    padding: 5rem 0;
  `}
`;

export const StyledHello = styled.p`
  ${paragraph}
  color: #e8f380;
  text-shadow: 0.1rem 0.2rem 0 rgb(0 0 0 / 20%);
`;

export const StyledFront = styled.p`
  ${paragraph}
  color: #f5fac6;
  text-shadow: 0.1rem 0.2rem 0 rgb(0 0 0 / 10%);
`;