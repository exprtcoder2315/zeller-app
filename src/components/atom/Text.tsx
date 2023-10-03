import React from 'react';
import {StyleSheet, Text as TextC, TextProps, TextStyle} from 'react-native';
import R from '@app/resources/R';
import {moderateScale} from '@app/resources/scaling';

const Text: React.FC<ITextProps> = props => {
  const {
    variant = 'h4',
    color = R.color.fontPrimary,
    style = {},
    font = 'regular',
    gutterBottom = 0,
    gutterTop = 0,
    gutterLeft = 0,
    gutterRight = 0,
    align = 'auto',
    alignVertical = 'auto',
    transform = 'none',
    ...restProps
  } = props;
  const defaultStyles = styles[variant];
  return (
    <TextC
      style={{
        ...styles[font],
        ...defaultStyles,
        color,
        textAlign: align,
        textAlignVertical: alignVertical,
        marginBottom: gutterBottom,
        marginTop: gutterTop,
        marginLeft: gutterLeft,
        marginRight: gutterRight,
        textTransform: transform,
        ...style,
      }}
      {...restProps}>
      {props.children}
    </TextC>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: moderateScale(40, 40),
    lineHeight: moderateScale(54, 54),
  },
  h2: {
    fontSize: moderateScale(35, 35),
    lineHeight: moderateScale(46, 46),
  },
  h3: {
    fontSize: moderateScale(26, 26),
    lineHeight: moderateScale(30, 30),
  },
  h4: {
    fontSize: moderateScale(20, 20),
    lineHeight: moderateScale(28, 28),
  },
  h5: {
    fontSize: moderateScale(18, 18),
    lineHeight: moderateScale(30, 30),
  },
  h6: {
    fontSize: moderateScale(16, 16),
    lineHeight: moderateScale(24, 24),
  },
  bodyLarge: {
    fontSize: moderateScale(14, 14),
    lineHeight: moderateScale(20, 20),
  },
  bodyMedium: {
    fontSize: moderateScale(12, 12),
    lineHeight: moderateScale(20, 20),
  },
  bodySmall: {
    fontSize: moderateScale(10, 10),
    lineHeight: moderateScale(18, 18),
  },
  regular: {
    fontFamily: R.font.Regular,
  },
  medium: {
    fontFamily: R.font.Medium,
  },
  semiBold: {
    fontFamily: R.font.Semibold,
  },
  italic: {
    fontFamily: R.font.Italic,
  },
  light: {
    fontFamily: R.font.Light,
  },
  heavy: {
    fontFamily: R.font.Heavy,
  },
  bold: {
    fontFamily: R.font.Bold,
  },
});

export interface ITextProps extends TextProps {
  children?: any;
  variant?:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'bodySmall'
    | 'bodyMedium'
    | 'bodyLarge';
  style?: TextStyle;

  // util
  color?: string;
  font?:
    | 'regular'
    | 'medium'
    | 'italic'
    | 'semiBold'
    | 'heavy'
    | 'light'
    | 'bold';
  gutterBottom?: number;
  gutterTop?: number;
  gutterLeft?: number;
  gutterRight?: number;
  opactity?: number;
  lineHeight?: number;
  fontStyle?: 'normal' | 'italic';
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'normal'
    | 'bold';
  transform?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  alignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}

export default Text;
