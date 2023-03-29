import React from 'react';
import screenSmartphoneIcon from '@iconify/icons-simple-line-icons/screen-smartphone';
import envelopeIcon from '@iconify/icons-simple-line-icons/envelope';
import globeIcon from '@iconify/icons-simple-line-icons/globe';
import skypeIcon from '@iconify/icons-simple-line-icons/social-skype';

import { StyledContactH2 } from '../Contact';
import { PolandSvg } from '../PolandSvg';
import { Translate } from '../Translate';
import {
  StyledConnect,
  StyledMap,
  StyledPin,
  StyledQuickConnect,
  StyledSimpleIcon,
} from '.';

export const QuickConnect: React.FC = (): JSX.Element => (
  <StyledQuickConnect>
    <StyledContactH2>
      <Translate i18nKey="quick" />
    </StyledContactH2>
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
