import React from 'react';
import {
  TextInput as TextInputR,
  View,
  StyleSheet,
  TextInputProps,
  Pressable,
} from 'react-native';

import Text from './Text';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '@app/resources/scaling';
import color from '@app/resources/color';

interface PropsI extends TextInputProps {
  onChangeText?: (text: any) => void;
  onChangeDate?: (text: any) => void;
  onHandleClear?: () => void;
  onVerifiedClick?: () => void;
  onClickOption?: () => any;
  onPressRightText?: () => void;
  onClickRightIcon?: any;

  containerStyle?: object;
  inputContainer?: object;
  style?: object;
  textButton?: boolean;
  textButtonPressed?: () => void;
  showCancelText?: boolean;
  isVerified?: boolean;
  editable?: boolean;
  textInputHeading?: string;
  textInputHeadingRight?: string;
  alignItems?: string;
  info?: string;
  isRightIcon?: boolean;
  forwardedRef?: any;
  rightComponent?: any;
  leftComponent?: any;
  textRecurringPeriod?: string;
  onPressRightComponent?: any;
  textInputHeadingRightStyle?: any;
  vwLeftComponentStyle?: any;
  onPress?: () => void;
  numberOfLines?: number;
}

const TextInput: React.FC<PropsI> = props => {
  const handleChangeText = (text: string) => {
    if (props.onChangeText) {
      props.onChangeText(text);
    }
  };

  return (
    <View
      style={{
        ...styles.container,
        ...props.containerStyle,
      }}>
      <View style={styles.vwParent}>
        {props.textInputHeading ? (
          <Text
            variant={'h6'}
            color={color.fontPrimary}
            align={'left'}
            font="regular"
            gutterBottom={8}
            numberOfLines={1}>
            {props.textInputHeading}
          </Text>
        ) : null}
        {props.textInputHeadingRight ? (
          <Text
            variant={'bodyLarge'}
            color={color.fontPrimary}
            align={'left'}
            font="medium"
            gutterBottom={8}
            numberOfLines={1}
            onPress={() => props.onPressRightText && props.onPressRightText()}
            style={{
              ...props.textInputHeadingRightStyle,
            }}>
            {props.textInputHeadingRight}
          </Text>
        ) : null}
      </View>
      <Pressable onPress={() => props.onPress && props.onPress()}>
        <View
          style={{
            ...styles.inputContainer,
            ...props.inputContainer,
          }}>
          {props.leftComponent && (
            <View
              style={{
                ...styles.vwLeftComponent,
                ...props.vwLeftComponentStyle,
              }}>
              {props.leftComponent}
            </View>
          )}
          <TextInputR
            {...props}
            ref={props.forwardedRef}
            style={{
              ...styles.input,
              ...props.style,
            }}
            placeholder={props.placeholder ? props.placeholder : ''}
            editable={props.editable}
            selectionColor={color.fontPrimary}
            placeholderTextColor={color.gray1}
            secureTextEntry={props.secureTextEntry}
            onChangeText={(e: any) => handleChangeText(e)}
          />
          {props.rightComponent && (
            <View style={styles.vwRightComponent}>{props.rightComponent}</View>
          )}
        </View>
      </Pressable>
    </View>
  );
};
export default TextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: verticalScale(15, 15),
  },
  inputContainer: {
    alignItems: 'center',
    height: verticalScale(42, 42),
    flexDirection: 'row',
    borderColor: 'transparent',
    borderRadius: moderateScale(10, 10),
    backgroundColor: color.gray2,
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    height: verticalScale(42, 42),
    fontSize: moderateScale(15, 15),
    lineHeight: moderateScale(18, 18),
    color: color.fontPrimary,
    paddingHorizontal: horizontalScale(10, 10),
    borderRadius: moderateScale(8, 8),
  },
  vwInput: {flex: 1},
  vwParent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  vwLeftComponent: {
    paddingLeft: moderateScale(10, 10),
    paddingRight: moderateScale(5, 5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vwRightComponent: {
    paddingRight: moderateScale(10, 10),
    paddingLeft: moderateScale(5, 5),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
