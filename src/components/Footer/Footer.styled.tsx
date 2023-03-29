import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background: ${({ theme }) => theme.neutral};
  border-top: 2rem solid #7e7e7e;
  color: ${({ theme }) => theme.textSecondary};
`;