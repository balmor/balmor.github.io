import React from 'react';
import styled from 'styled-components';
import { Copyright } from '../Copyright';
import { Logo } from '../Logo';
import { StyledLink, Navigation } from '../Navigation';
import { Title } from '../Title';
import { FontFamilyTypes } from '../../utils';

const StyledContent = styled.section`
  color: ${({ theme }) => theme.textPrimary};
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #e5e5e5;
`;


const StyledLogoText = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
`;

const FooterNavigation = styled(Navigation)`
  ${StyledLink} {
    font-size: 1.4rem;
    color: #999aa1;
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
      color: black;
    }
  }

  li:last-child ${StyledLink} span:after {
      display: none;
  }
`;

FontFamilyTypes

const StyledTitle = styled(Title)`
  h1 {
    font-family: ${FontFamilyTypes.raleway}, Arial;
    font-weight: 700;
    font-size: 16px;
    color: #999;
    letter-spacing: .03em;
    transition: all 0.4s ease-out;

    &:hover {
      color: black;
    }
  }
`;

export const FooterContent: React.FC = (): JSX.Element => {
  return (
    <StyledContent>
      <StyledLogoText>
        <Logo size="small" color="gray" background="#eef2f4"/>
        <div>
          <StyledTitle />
          <FooterNavigation />
        </div>
      </StyledLogoText>
      <Copyright />
    </StyledContent>
  );
};
