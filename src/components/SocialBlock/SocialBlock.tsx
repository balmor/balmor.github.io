import React from 'react';
import { ExternalLink, StyledFacebook, StyledGithub, StyledGitlab, StyledLinkedin, StyledSocialBlock, StyledTwitter } from '.';

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
