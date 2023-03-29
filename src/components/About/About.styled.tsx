import styled from 'styled-components';

export const StyledAbout = styled.section`
  background: ${({ theme }) => theme.aboutBg};
  padding-bottom: 2rem;
  color: ${({ theme }) => theme.textSecondary};
`;