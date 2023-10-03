import React from 'react';
import {View, ViewStyle, StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '@app/resources/scaling';
import color from '@app/resources/color';
import Text from '../atom/Text';
import string from '@app/resources/string';
import NavigationService from '@app/navigation/NavigationService';

const BaseHeader: React.FC<PropsI> = (props: PropsI) => {
  const {title, disableBack = true,} = props;  
  return (
    <View style={{...styles.header, ...styles.headerElevation}}>
        {!disableBack ? <Text 
          children={string.common.back} 
          style={styles.txtBackLeft} 
          color={color.blue}
          onPress={()=> NavigationService.goBack()}/> 
        : 
        null
      }
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: verticalScale(76, 76),
    backgroundColor: color.blueLight,
    paddingTop: verticalScale(30, 30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: horizontalScale(16,16)
  },
  headerElevation: {
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  logo: {
    width: horizontalScale(200,200),
    height: verticalScale(40,40),
    marginLeft: -horizontalScale(20,20)
  },
  txtBackLeft: {
    flexDirection: 'row',
    position: 'absolute',
    left: horizontalScale(10,10),
    top: verticalScale(30,30)
  },
  titleStyle: {
    marginTop: -verticalScale(15,15)
  },
  vwRight: {
    flexDirection: 'row',
    position: 'absolute',
    right: horizontalScale(10,10),
    top: verticalScale(30,30)
  },
  vwRightRow: {
    flexDirection: 'row',
    paddingTop: verticalScale(10,10),
    alignItems: 'center'
  }
});

export interface PropsI {
  title?: string;
  variant?: 'base' | 'home' | 'webview' | 'search';
  disableBack?: boolean;
  isShowLogo?: boolean;
  disableMenu?: boolean;
  isShowLocation?: boolean;
  isShowBellIcon?: boolean;
  rootStyles?: ViewStyle;
  bodyStyles?: ViewStyle;
}

export default BaseHeader;
