import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';
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
    font-family: ${FontFamilyTypes.raleway}, Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 2.4rem;


    scrollbar-base-color: white;
    scrollbar-shadow-color: none;
    scrollbar-track-color: white
  }
  code {
    font-family: Consolas, 'Courier New', monospace;
  }
`;
