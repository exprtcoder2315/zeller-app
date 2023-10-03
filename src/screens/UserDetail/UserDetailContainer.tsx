import React, {  } from 'react';
import {View} from 'react-native';
import {styles} from './styles';
import Text from '@app/components/atom/Text';
import NavigationService from '@app/navigation/NavigationService';
import string from '@app/resources/string';


export interface IProps {
  user: any
}

const UserDetailContainer = ({user}: IProps) => {
  return (
    <View style={styles.container}>
      <Text children={`User ID: ${user.id}`} numberOfLines={1}/>
      <Text children={`User Email: ${user.email}`} />
      <Text children={`User Name: ${user.name}`} />
      <Text children={`User Role: ${user.role}`} />
    </View>
  );
};

export default UserDetailContainer;
