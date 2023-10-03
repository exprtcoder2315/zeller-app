/* eslint-disable @typescript-eslint/no-unused-vars */
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] =
  width < height ? [width, height] : [height, width];

//Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const initialScale = shortDimension / guidelineBaseWidth;
const initialScaleVertical = longDimension / guidelineBaseHeight;
export const scale = (size: number, sizeTable: number) => {
  return initialScale * size;
};

export const verticalScale = (size: number, sizeTable: number) => {
  return initialScaleVertical * size;
};

export const horizontalScale = (size: number, sizeTable: number) => {
  return initialScale * size;
};

export const moderateScale = (size: number, sizeTable: number, factor = 0.5) =>
  size + (scale(size, sizeTable) - size) * factor;
export const moderateVerticalScale = (
  size: number,
  sizeTable: number,
  factor = 0.5,
) => size + (verticalScale(size, sizeTable) - size) * factor;
