import styled from 'styled-components';

export const StyledLocationMap = styled.path`
  fill: ${({ theme }) => theme.buttonFg};
  stroke: ${({ theme }) => theme.buttonBgHover};
  stroke-width: 2px;
`;