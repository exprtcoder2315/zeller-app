import color from '@app/resources/color';
import { horizontalScale, scale, verticalScale } from '@app/resources/scaling';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(20,20),
    paddingVertical: verticalScale(10,10),
    alignItems: 'center',
  },
  vwName: {
    width: scale(50,50),
    height: scale(50,50),
    backgroundColor: color.blueLight,
    borderRadius: scale(5,5),
    alignItems: 'center',
    justifyContent: 'center'
  },
  rowChild: {
    marginLeft: horizontalScale(15,15)
  },
  loading: {
    marginTop: verticalScale(50,50),
  }
});
