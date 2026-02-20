import React from 'react';
import {screenNames} from '../../utils/screenNames';
import TransactionsScreen from './TransactionsScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Transactions = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={screenNames.TransactionsScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenNames.TransactionsScreen}
        component={TransactionsScreen}
      />
      <Stack.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default Transactions;
