import React from 'react';
import {screenNames} from '../../utils/screenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import QuicklyAnalysisScreen from './QuicklyAnalysisScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';

const Home = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={screenNames.HomeScreen}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={screenNames.HomeScreen} component={HomeScreen} />
      <Stack.Screen
        name={screenNames.QuicklyAnalysisScreen}
        component={QuicklyAnalysisScreen}
      />
      <Stack.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default Home;
