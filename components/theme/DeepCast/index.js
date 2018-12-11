import {
  primaryColorCode,
  secondaryColorCode,
  successColorCode,
  infoColorCode,
  warningColorCode,
  dangerColorCode,
  bgColorDefault,
  bgColorGrey,
  textColorCode,
} from 'components/theme/DeepCast/base_colors';
import {
  primaryFontFamily,
  secondaryFontFamily,
} from 'components/theme/DeepCast/fonts';
import { blueGradiant } from './gradiants';

const DeepCastTheme = {
  id: 'dcTheme',
  backgroundDefaultColor: bgColorDefault,
  backgroundGradiant: blueGradiant,
  backgroundGrey: bgColorGrey,
  backgroundImage: 'url(/static/images/patternbg.png)',
  primaryColor: primaryColorCode,
  secondaryColor: secondaryColorCode,
  successColor: successColorCode,
  infoColor: infoColorCode,
  warningColor: warningColorCode,
  dangerColor: dangerColorCode,
  textColor: textColorCode,
  textDark: 'grey',
  textLight: 'white',
  headingFont: primaryFontFamily,
  textFont: secondaryFontFamily,
};

export default DeepCastTheme;
