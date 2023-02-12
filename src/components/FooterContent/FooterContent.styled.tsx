import styled from 'styled-components';
import { breakpoint, FontFamilyTypes } from '../../utils';
import { Navigation, StyledLink } from '../Navigation';
import { Title } from '../Title';


export const StyledContent = styled.section`
  color: ${({ theme }) => theme.textSecondary};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.boxBorder};
`;

export const StyledLogoText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

export const FooterNavigation = styled(Navigation)`
  ul {
    background: transparent;
  }

  ${StyledLink} {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.textSecondary};
    padding: 0 1rem 0 0;
    height: auto;
    line-height: normal;
    transition: all 0.4s ease-out;

    span:before {
      display: none;
    }

    span span:after {
      display: inline-block;
      content: " | ";
      color: rgba(102, 103, 110, 0.35);
      padding-left: 1rem;
    }

    &:hover {
      color: ${({ theme }) => theme.textHover};
    }
  }

  li:last-child ${StyledLink} span:after {
      display: none;
  }

  ${breakpoint('xs', 'md')`
    display: none;
  `}
`;

export const StyledTitle = styled(Title)`
  h1 {
    font-family: ${FontFamilyTypes.raleway}, Arial;
    font-weight: 700;
    font-size: 16px;
    color: ${({ theme }) => theme.textSecondary};
    letter-spacing: .03em;
    transition: all 0.4s ease-out;

    &:hover {
      color: ${({ theme }) => theme.textHover};
    }
  }
`;