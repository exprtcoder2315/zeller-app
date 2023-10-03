import R from '@app/resources/R';
import React from 'react';
import {ActivityIndicator} from 'react-native';

export interface IProps {
  size: 'sm' | 'md' | 'lg';
  color?: string;
}
function Loader(props: IProps) {
  const {color = R.color.fontPrimary, size = 'lg'} = props;
  return (
    <ActivityIndicator size={size === 'lg' ? 'large' : 'small'} color={color} />
  );
}
export default Loader;
