import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../utils/screenNames';
import AnalysisScreen from './AnalysisScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';

const Analysis = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenNames.AnalysisScreen}
        component={AnalysisScreen}
      />
      <Stack.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default Analysis;
