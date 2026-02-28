import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../utils/screenNames';
import AnalysisScreen from './AnalysisScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';
import SearchScreen from '../search/SearchScreen';
import CalenderScreen from '../calender/CalenderScreen';

const Analysis = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenNames.AnalysisScreen}
        component={AnalysisScreen}
      />
      <Stack.Screen name={screenNames.SearchScreen} component={SearchScreen} />
      <Stack.Screen
        name={screenNames.CalenderScreen}
        component={CalenderScreen}
      />
      <Stack.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default Analysis;
