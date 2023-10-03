import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackC} from '@app/constants/navigation';
import SplashScreen from '@app/screens/Users';
import WelcomeScreen from '@app/screens/UserDetail';
const AppStack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <AppStack.Navigator initialRouteName={AppStackC.USER_SCREEN}>
      <AppStack.Screen
        name={AppStackC.USER_SCREEN}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <AppStack.Screen
        name={AppStackC.USER_DETAIL_SCREEN}
        component={WelcomeScreen}
        options={{headerShown: false}}
      />
    </AppStack.Navigator>
  );
}
