import { StyledTheme } from '../_types';
import { palette } from '../palette';
import { lighten } from 'polished';

export const DefaultDarkTheme: StyledTheme = {
  primary: palette.dark,
  secondary: palette.white,
  third: palette.lightBlue,
  fourth: palette.offBlack,
  neutral: palette.darkBlueGray,
  headerBg: palette.offBlack,
  aboutBg: palette.darkBlueGray,
  boxBg: palette.darkGray,
  boxBorder: palette.offBlack,
  textPrimary: palette.white,
  textSecondary: palette.offWhite,
  textThird: palette.lightBlue,
  textFourth: palette.darkGray,
  textHover: palette.lightBlue,
  buttonBg: palette.lightBlue,
  buttonFg: palette.dark,
  buttonBgHover: lighten(0.05, palette.lightBlue),
  buttonFgHover: palette.white,
  inputFocus: palette.lightBlue,
  inputLabel: palette.white,
};
