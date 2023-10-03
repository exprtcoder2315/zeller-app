import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationStackC} from '@app/constants/navigation';
import NavigationService from './NavigationService';
import AppNavigator from './AppNavigator';
const MainStack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer
      ref={ref => {
        NavigationService.setTopLevelNavigator(ref);
      }}>
      <MainStack.Navigator initialRouteName={NavigationStackC.APP_STACK}>
        <MainStack.Screen
          name={NavigationStackC.APP_STACK}
          component={AppNavigator}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
