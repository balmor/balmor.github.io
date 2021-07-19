import { StyledTheme } from '../_types';
import { palette } from '../palette';
import { lighten, darken } from 'polished';

export const DefaultLightTheme: StyledTheme = {
  primary: darken(0.03, palette.white),
  secondary: palette.dark,
  third: palette.lightBlue,
  neutral: palette.grey,
  headerBg: palette.white,
  boxBg: palette.lightGray,
  boxBorder: palette.offWhite,
  textPrimary: palette.dark,
  textSecondary: palette.lightGray,
  textThird: palette.lightBlue,
  buttonBg: palette.purple,
  buttonFg: palette.white,
  buttonBgHover: lighten(0.05, palette.purple),
  buttonFgHover: palette.white,
  inputFocus: palette.lightGray,
  inputLabel: palette.dark,
};
