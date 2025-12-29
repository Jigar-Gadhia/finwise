import React from 'react';
import {screenNames} from '../../utils/screenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import QuicklyAnalysisScreen from './QuicklyAnalysisScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';

const Home = () => {
  const Screen = createNativeStackNavigator();

  return (
    <Screen.Navigator
      initialRouteName={screenNames.HomeScreen}
      screenOptions={{headerShown: false}}>
      <Screen.Screen name={screenNames.HomeScreen} component={HomeScreen} />
      <Screen.Screen
        name={screenNames.QuicklyAnalysisScreen}
        component={QuicklyAnalysisScreen}
      />
      <Screen.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Screen.Navigator>
  );
};

export default Home;
