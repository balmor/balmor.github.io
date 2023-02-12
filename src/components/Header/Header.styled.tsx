import styled from 'styled-components';
import { breakpoint } from '../../utils';

export const StyledHeader = styled.header`
  background: ${({ theme }) => theme.headerBg};
  color: ${({ theme }) => theme.textPrimary};
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  z-index: 5;
`;

export const StyledLogoText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
`;

export const StyledSwitcher = styled.div`
  margin: 0 1rem;

  ${breakpoint('xs', 'md')`
    align-self: normal;
  `}
`;