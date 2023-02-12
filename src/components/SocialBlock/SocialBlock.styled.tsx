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

export const StyledGitlab = styled(Gitlab)`
  ${icon}
  color: #fba225;
`;

export const StyledGithub = styled(Github)`
  ${icon}
  color: #111;
`;

export const StyledLinkedin= styled(Linkedin)`
  ${icon}
  color: #999aa1;
`;

export const StyledTwitter = styled(Twitter)`
  ${icon}
  color: #55acee;
`;

export const StyledFacebook = styled(Facebook)`
  ${icon}
  color: #3b5998;
`;

export const StyledSocialBlock = styled.div`
  color: ${({ theme }) => theme.textPrimary};
  padding: 40px 0;
  text-align: center;
`;

export const ExternalLink = styled.a`
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