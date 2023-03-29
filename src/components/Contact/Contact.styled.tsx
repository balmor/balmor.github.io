import styled from 'styled-components';
import { breakpoint } from '../../utils';

export const StyledContactH2 = styled.h2`
  color: #677072;
  font-size: 1.6rem;
`;

export const StyledContactContent = styled.section`
  display: flex;

  ${breakpoint('xs', 'md')`
    flex-direction: column;
    align-items: center;
  `}
`;

export const StyledContact = styled.section`
  background: ${({ theme }) => theme.headerBg};
  height: 70rem;

  ${breakpoint('xs', 'md')`
    height: auto;
  `}
`;