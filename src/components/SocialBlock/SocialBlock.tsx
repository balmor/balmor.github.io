import React from 'react';
import styled, { css } from 'styled-components';

import { Gitlab } from '@styled-icons/fa-brands/Gitlab';
import { Github } from '@styled-icons/fa-brands/Github';
import { Linkedin } from '@styled-icons/fa-brands/Linkedin';
import { Twitter } from '@styled-icons/fa-brands/Twitter';
import { Facebook } from '@styled-icons/fa-brands/Facebook';

const icon = css`
  display: inline-block;
  vertical-align: -0.2rem;
  margin-right: 0.5rem;
  transition: width 0.4s cubic-bezier(0.65, 0.2, 0, 1);
`;

const StyledGitlab = styled(Gitlab)`
  ${icon}
  color: #fba225;
`;

const StyledGithub = styled(Github)`
  ${icon}
  color: #111;
`;

const StyledLinkedin= styled(Linkedin)`
  ${icon}
  color: #999aa1;
`;

const StyledTwitter = styled(Twitter)`
  ${icon}
  color: #55acee;
`;

const StyledFacebook = styled(Facebook)`
  ${icon}
  color: #3b5998;
`;

const StyledSocialBlock = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  padding: 40px 0;
  text-align: center;
`;

const ExternalLink = styled.a`
  position: relative;
  display: inline-block;
  margin-right: 4rem;
  background: rgba(255,255,255,.03);
  border-radius: 0.3rem;
  color: #999aa1;
  height: 3rem;
  line-height: 3rem;
  width: 10rem;
  text-align: center;
  z-index: 2;
  overflow: hidden;
  text-decoration: none;
  font-family: 'Source Sans Pro', sans-serif;
  transition: width 0.4s cubic-bezier(0.65, 0.2, 0, 1);

  &:before, &:after {
    content: "";
    position: absolute;
    background: ${({ theme }) => theme.textThird};
    width: 0;
    height: 70%;
    z-index: 1;
    transition: width 0.4s cubic-bezier(0.65, 0.2, 0, 1);
  }

  &:before {
    left: 0;
    top: 0;
  }

  &:after {
    right: 0;
    bottom: 0;
  }

  span {
    position: relative;
    z-index: 2;
  }

  &:hover {
    color: white;

    &:before {
      left: 0;
      top: 0;
      width: 100%;
    }

    &:after {
      right: 0;
      bottom: 0;
      width: 100%;
    }

    ${StyledGitlab}, ${StyledGithub}, ${StyledLinkedin}, ${StyledTwitter}, ${StyledFacebook} {
      color: white;
    }
  }
`;

export const SocialBlock: React.FC = (): JSX.Element => {
  return (
    <StyledSocialBlock>
      <ExternalLink href="https://github.com/balmor"><span><StyledGithub size={16} />github</span></ExternalLink>
      <ExternalLink href="https://pl.linkedin.com/in/balmor"><span><StyledLinkedin size={16} />linkedin</span></ExternalLink>
      <ExternalLink href="https://gitlab.com/balmor"><span><StyledGitlab size={16} />gitlab</span></ExternalLink>
      <ExternalLink href="https://twitter.com/balmor81"><span><StyledTwitter size={16} />twitter</span></ExternalLink>
      <ExternalLink href="https://www.facebook.com/balm0r"><span><StyledFacebook size={16} />facebook</span></ExternalLink>

    </StyledSocialBlock>
  );
};
