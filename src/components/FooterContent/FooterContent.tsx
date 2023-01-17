import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Copyright } from '../Copyright';
import { Logo } from '../Logo';
import { StyledLink, Navigation } from '../Navigation';
import { Title } from '../Title';
import { FontFamilyTypes } from '../../utils';
import { StyledTheme } from '../../theme/_types';
import breakpoint from 'styled-components-breakpoint';

const StyledContent = styled.section`
  color: ${({ theme }) => theme.textSecondary};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.boxBorder};
`;


const StyledLogoText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const FooterNavigation = styled(Navigation)`
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

  ${breakpoint('mobile', 'tablet')`
    display: none;
  `}
`;

const StyledTitle = styled(Title)`
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

export const FooterContent: React.FC = (): JSX.Element => {
  const themeContext = useContext<StyledTheme>(ThemeContext);

  return (
    <StyledContent>
      <StyledLogoText>
        <Logo size="small" color="gray" background={themeContext.neutral}/>
        <div>
          <StyledTitle />
          <FooterNavigation />
        </div>
      </StyledLogoText>
      <Copyright />
    </StyledContent>
  );
};
