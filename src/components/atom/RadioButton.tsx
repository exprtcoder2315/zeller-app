import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import unit from '@app/resources/unit';
import {moderateScale} from '@app/resources/scaling';
import color from '@app/resources/color';

interface Props {
  text?: string;
  isSelected?: boolean;
  onSelect?: () => void;
}
const RadioButton: React.FC<Props> = ({text, isSelected, onSelect}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.touch}
        onPress={() => onSelect && onSelect()}>
        <View
          style={
            isSelected ? styles.activeRadioButton : styles.defaultRadioButton
          }>
          {isSelected && <View style={styles.activeRadioButtonChild} />}
        </View>
        {text && (
          <Text
            variant="h5"
            style={{marginLeft: unit.scale(10)}}>{`${text}`}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultRadioButton: {
    width: moderateScale(20, 20),
    height: moderateScale(20, 20),
    borderRadius: moderateScale(20, 20),
    borderWidth: moderateScale(2, 2),
    borderColor: color.blueLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeRadioButton: {
    width: moderateScale(20, 20),
    height: moderateScale(20, 20),
    borderRadius: moderateScale(20, 20),
    borderWidth: moderateScale(2, 2),
    borderColor: color.blue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeRadioButtonChild: {
    width: moderateScale(10, 10),
    height: moderateScale(10, 10),
    borderRadius: moderateScale(10, 10),
    backgroundColor: color.blue,
  },
});

export default RadioButton;
