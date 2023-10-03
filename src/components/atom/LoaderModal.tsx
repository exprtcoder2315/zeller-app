import R from '@app/resources/R';
import {verticalScale} from '@app/resources/scaling';
import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';

function LoaderModal({size = 'large', containerStyle = {}}: any) {
  return (
    <View style={{...styles.container, ...containerStyle}}>
      <ActivityIndicator size={size} color={R.color.white} />
    </View>
  );
}

export default LoaderModal;

const styles = StyleSheet.create({
  container: {
    width: R.unit.windowWidth(1),
    height: R.unit.windowHeight(1) - verticalScale(100, 100),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
