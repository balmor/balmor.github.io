import { StyledTheme } from './_types';

declare module 'styled-components' {
  export interface DefaultTheme extends StyledTheme {}
}
