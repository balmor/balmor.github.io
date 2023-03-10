import styled from 'styled-components';
import { darken } from 'polished';
import { Link } from 'react-scroll';

export const StyledCopyright = styled.div`
  color: ${({ theme }) => theme.textSecondary};
  text-align: center;
  font-size: 1.4rem;
`;

export const StyledName = styled(Link)`
  color: ${({ theme }) => darken(0.1, theme.textSecondary)};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.textPrimary};
  }
`;