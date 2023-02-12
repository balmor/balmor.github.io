import React, { useState } from 'react';
import { Translate } from '../Translate/Translate';
import { StyledLink, StyledMenu, StyledNavigation, StyledUl } from './Navigation.styled';

export const linkProperties = {
  spy: true,
  smooth: 'easeOutQuint',
  offset: -100,
};

export type StyledNavigationProps = {
  className?: string;
  isOpenMenu?: boolean;
};

export const Navigation: React.FC<StyledNavigationProps> = ({
  className = '',
}): JSX.Element => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);

  const handleNav = () => setOpenMenu(prevState => !prevState);

  return (
    <StyledNavigation isOpenMenu={isOpenMenu} className={className}>
      <StyledUl isOpenMenu={isOpenMenu}>
        <li>
          <StyledLink to="home" {...linkProperties}>
            <span>
              <Translate i18nKey="home" />
            </span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="about" {...linkProperties}>
            <span>
              <Translate i18nKey="about" />
            </span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="work" {...linkProperties}>
            <span>
              <Translate i18nKey="work" />
            </span>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="contact" {...linkProperties}>
            <span>
              <Translate i18nKey="contact" />
            </span>
          </StyledLink>
        </li>
      </StyledUl>
      <StyledMenu isOpenMenu={isOpenMenu} onClick={handleNav}>
        <div></div>
        <div></div>
        <div></div>
      </StyledMenu>
    </StyledNavigation>
  );
};
