import React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';
import { Icon } from '@iconify/react';
import screenSmartphoneIcon from '@iconify/icons-simple-line-icons/screen-smartphone';
import envelopeIcon from '@iconify/icons-simple-line-icons/envelope';
import globeIcon from '@iconify/icons-simple-line-icons/globe';
import skypeIcon from '@iconify/icons-simple-line-icons/social-skype';

import { StyledContactH2 } from '../Contact';
import { PolandSvg } from '../PolandSvg';

const icon = css`
  color: ${({ theme }) => theme.textThird};
  font-size: 1.8rem;
`;

const StyledQuickConnect = styled.div`
  width: 30%;
`;

const StyledConnect = styled.dl`
  dt {
    display: inline-block;
    min-width: 3rem;
    vertical-align: middle;
    text-align: center;
    margin-right: 0.8rem;
  }

  dd {
    display: inline;
    margin: 0;
    a {
      color: #8d9698;
      text-decoration: none;
      transition: all 0.4s ease-out;

      &:hover {
        color: black;
      }
    }

    &:after {
      display: block;
      content: '';
      margin-bottom: 1.4rem;
    }
  }
`;

const StyledMap = styled.div`
  position: relative;
`;

const StyledPin = styled.a`
  width: 2rem;
  height: 2rem;
  border-radius: 50% 50% 50% 0;
  background: ${({ theme }) => theme.textThird};
  position: absolute;
  left: 8.7rem;
  top: 12.5rem;
  margin: -2rem 0 0 -2rem;
  transform: rotate(-45deg);
  transition: all 0.4s ease-out;

  &:after {
    content: '';
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.4rem 0 0 0.4rem;
    background: white;
    position: absolute;
    border-radius: 50%;
  }

  &:hover {
    background: ${({ theme }) => darken(0.1, theme.textThird)};
  }
`;

const StyledSimpleIcon = styled(Icon)`
  ${icon}
`;

export const QuickConnect: React.FC = (): JSX.Element => (
  <StyledQuickConnect>
    <StyledContactH2>Quick connect</StyledContactH2>
    <StyledConnect>
      <dt>
        <StyledSimpleIcon icon={screenSmartphoneIcon} />
      </dt>
      <dd>
        <a href="skype:tune81?call">+48 790 756 391</a>
      </dd>
      <dt>
        <StyledSimpleIcon icon={envelopeIcon} />
      </dt>
      <dd>
        <a href="mailto:damian.duda@live.com">damian.duda@live.com</a>
      </dd>
      <dt>
        <StyledSimpleIcon icon={globeIcon} />
      </dt>
      <dd>
        <a href="http://www.damianduda.eu">damianduda.eu</a>
      </dd>
      <dt>
        <StyledSimpleIcon icon={skypeIcon} />
      </dt>
      <dd>
        <a href="skype:tune81?call">tune81</a>
      </dd>
      <dt></dt>
      <dd>
        <StyledMap>
          <StyledPin href="https://goo.gl/maps/uoQrYbD3u4B2" />
          <PolandSvg />
        </StyledMap>
      </dd>
    </StyledConnect>
  </StyledQuickConnect>
);
