import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { Translate } from '../Translate/Translate';

export const StyledNavigation = styled.nav<StyledNavigationProps>`
  ul {
    display: inline-block;
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline-block;
    }
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  height: 8rem;
  line-height: 8rem;
  cursor: pointer;
  user-select: none;

  margin: 0;
  padding: 0 3rem;
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};

  transition: 0.3s all ease;

  span {
    position: relative;
    display: block;

    &:before {
      content: '';
      display: block;
      position: absolute;
      bottom: 1.4rem;
      left: 0;
      width: 100%;
      height: 0.4rem;
      background: ${({ theme }) => theme.textThird};
      -webkit-transform: scale3d(0, 1, 1);
      transform: scale3d(0, 1, 1);
      -webkit-transition: -webkit-transform 0.1s;
      transition: transform 0.1s;
    }
  }

  &:hover {
    color: ${({ theme }) => theme.textHover};

    span:before {
      background: ${({ theme }) => theme.textPrimary};
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
  }

  &.active {
    color: ${({ theme }) => theme.textThird};

    span:before {
      background: ${({ theme }) => theme.textThird};
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
      -webkit-transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }
  }
`;

export const linkProperties = {
  spy: true,
  smooth: 'easeOutQuint',
  offset: -100,
};

type StyledNavigationProps = {
  className?: string;
};

export const Navigation: React.FC<StyledNavigationProps> = ({
  className = '',
}): JSX.Element => {
  return (
    <StyledNavigation className={className}>
      <ul>
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
      </ul>
    </StyledNavigation>
  );
};
