import { useState } from 'react';
import {horizontalScale, moderateScale, verticalScale} from '@app/resources/scaling';
import unit from '@app/resources/unit';
import {FlatList, Image, StyleSheet, View} from 'react-native';
import RadioButton from '../atom/RadioButton';
import Text from '../atom/Text';
import string from '@app/resources/string';
import { USER_TYPES } from '@app/constants/constant';
import { USER_TYPE } from '@app/constants/types';

export interface IProps {
  onPress?: (item: string) => void;
  customerType: string;
}

const UserType = ({customerType, onPress}: IProps) => {

  const _renderItem = ({item}: any) => {
    return (
      <RadioButton text={item?.role} onSelect={()=> onPress && onPress(item?.role)} isSelected={customerType === item?.role} />
    );
  };

  return (
    <View style={styles.container}>
      <Text  variant={'h3'}children={string.common.userType}/>
      <FlatList
        data={USER_TYPES}
        renderItem={_renderItem}
        keyExtractor={(item: USER_TYPE) => item.id.toString()}
      />
    </View>
  );
};

export default UserType;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: horizontalScale(20,20),
    paddingVertical: verticalScale(15,15)
  },
});
