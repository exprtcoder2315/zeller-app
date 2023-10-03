const color: Color = {
  //Used color theme color
  primary: '#1F192C',
  primaryDark: '#32314D',
  secondary: '#1DB897',
  secondaryDark: '#14101C',
  secondaryLight: '#1DB8978C',
  tertiary: '#FF2802',
  borderColor: '#272727',
  ratingSelected: '#FDB701',

  //used gray code
  gray1: '#7b7a78',
  gray2: '#e2e8f0',
  gray3: '#333248',
  gray4: '#413F60',
  gray5: '#5B5B5B',
  gray6: '#CBCFDF',
  gray7: '#BBBBBB',

  // Useless color strings
  //font colors
  fontPrimary: '#000000',
  fontSecondary: '#6E7191',
  fontTertiary: 'rgba(0, 0, 0, 0.45)',

  // generic colors with combinations
  black: '#000000',
  white: '#FFFFFF',
  whiteDust: '#FFFFFF40',
  green: '#008A00',
  red: '#BF3939',
  redVariant1: '#FF4444',
  redDark: '#760303',
  blue: '#0371ce',
  blueLight: '#e9f3fb',
  orange: '#E28604',

  //informative/action colors
  danger: '#FC4E4E',
  success: '#12B76A',
  yellow: '#FDF309',
  warning: '#FDC500',
  info: '#5890FF',
  cyan: '#24C4E5',

  //Unused
  gray8: '#D1D8CF',
  gray9: '#CCCCCC',

  //Custom color
  eyeColor: '#48653E',
};
export interface Color {
  //theme color
  primary: string;
  primaryDark: string;
  secondary: string;
  secondaryDark: string;
  secondaryLight: string;
  tertiary: string;
  borderColor: string;
  ratingSelected: string;
  //fonts color
  fontPrimary: string;
  fontSecondary: string;
  fontTertiary: string;

  // generic colors with combinations
  black: string;
  white: string;
  whiteDust: string;
  green: string;
  red: string;
  redVariant1: string;
  redDark: string;
  blue: string;
  blueLight: string;
  orange: string;
  cyan: string;

  // informative/action colors
  danger: string;
  success: string;
  yellow: string;
  warning: string;
  info: string;

  //gray color code
  gray1: string;
  gray2: string;
  gray3: string;
  gray4: string;
  gray5: string;
  gray6: string;
  gray7: string;
  gray8: string;
  gray9: string;
  eyeColor: string;
}

export default color;
