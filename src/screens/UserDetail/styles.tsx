import { horizontalScale, verticalScale } from '@app/resources/scaling';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(20,20)
  },
});
