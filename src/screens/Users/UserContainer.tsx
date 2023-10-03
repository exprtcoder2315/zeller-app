import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, Pressable, View} from 'react-native';
import {styles} from './styles';
import Text from '@app/components/atom/Text';
import NavigationService from '@app/navigation/NavigationService';
import { AppStackC } from '@app/constants/navigation';
import { gql, useQuery } from '@apollo/client';
import color from '@app/resources/color';
import UserType from '@app/components/organisms/UserType';

const GET_LOCATIONS = gql` query listZellerCustomers($filter:TableZellerCustomerFilterInput){ listZellerCustomers(filter:$filter){ items{ id name role email } } } `;;

const UserContainer = () => {
  const [userType, setUserType] = useState<string>('ADMIN')
  const { loading, data, refetch } = useQuery(GET_LOCATIONS, {
        variables: {
            filter: {
                role: {
                    eq: userType
                }
            }
        }
    });

useEffect(()=>{
  refetch()
},[userType])

const _renderItem = ({item}: any) => {
  return(
    <Pressable style={styles.rowContainer} onPress={()=> NavigationService.navigate(AppStackC.USER_DETAIL_SCREEN,{item})}>
      <View style={styles.vwName}>
        <Text variant={'h3'} color={color.blue} children={item.name.charAt(0)?.toUpperCase()}/>
      </View>
      <View style={styles.rowChild}>
        <Text  variant={'h4'}children={item.name}/>
        <Text  variant={'h6'} children={item.role} color={color.gray1}/>
      </View>
    </Pressable>
  )
}

const _keyExtractor = ({item}: any) => {
  return item?.id?.toString()
}
  return (
    <View style={styles.container}>
      <UserType 
        customerType={userType}
        onPress={(role: string) => setUserType(role)} 
      />
      <Text  variant={'h3'}children={`${userType} USERS`} gutterLeft={20} gutterBottom={10}gutterTop={15} />
       {loading ? <ActivityIndicator size={'large'} color={'black'} style={styles.loading}/> 
       : 
       <FlatList
          data={data?.listZellerCustomers?.items}
          renderItem={_renderItem}
          keyExtractor={_keyExtractor}
        />
      }
    </View>
  );
};

export default UserContainer;
