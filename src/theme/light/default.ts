import { StyledTheme } from '../_types';
import { palette } from '../palette';
import { lighten, darken } from 'polished';

export const DefaultLightTheme: StyledTheme = {
  primary: darken(0.03, palette.white),
  secondary: palette.dark,
  third: palette.lightBlue,
  fourth: palette.white,
  neutral: palette.grey,
  headerBg: palette.white,
  aboutBg: palette.darkBlue,
  boxBg: palette.lightGray,
  boxBorder: palette.dirtyWhite,
  textPrimary: palette.dark,
  textSecondary: palette.lightGray,
  textThird: palette.lightBlue,
  textFourth: palette.darkGray,
  textHover: palette.black,
  buttonBg: palette.lightBlue,
  buttonFg: palette.dirtyWhite,
  buttonBgHover: lighten(0.05, palette.lightBlue),
  buttonFgHover: palette.white,
  inputFocus: palette.lightGray,
  inputLabel: palette.black,
};
