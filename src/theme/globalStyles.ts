import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
import RalewayLightWoff from '../fonts/raleway/light/raleway-light-webfont.woff';
import RalewayLightWoff2 from '../fonts/raleway/light/raleway-light-webfont.woff2';
import RalewayRegularWoff from '../fonts/raleway/regular/raleway-regular-webfont.woff';
import RalewayRegularWoff2 from '../fonts/raleway/regular/raleway-regular-webfont.woff2';
import { FontFamilyTypes } from '../utils';
import { normalize } from 'styled-normalize'


export const GlobalStyle = createGlobalStyle`
  ${normalize}

  // GENERAL
  ::selection {
    color: ${({ theme }) => theme.textThird};
    background: #555;
  }

  ::-webkit-scrollbar {
    width: 7px;
    height: 5px;
    background: transparent
  }
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.textThird};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => darken(0.1, theme.textThird)};
  }

  html {
    font-size: 62.5%;
  }

  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    flex: 1;
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textSecondary};
    scroll-behavior: smooth;
    font-family: ${FontFamilyTypes.ralewayRegular}, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;


    scrollbar-base-color: white;
    scrollbar-shadow-color: none;
    scrollbar-track-color: white
  }
  code {
    font-family: Consolas, 'Courier New', monospace;
  }

  @font-face {
    font-family: 'Raleway light';
    src: local('Raleway light'), local('Raleway light'),
    url(${RalewayLightWoff2}) format('woff2'),
    url(${RalewayLightWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Raleway Regular';
    src: local('Raleway Regular'), local('Raleway Regular'),
    url(${RalewayRegularWoff2}) format('woff2'),
    url(${RalewayRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
