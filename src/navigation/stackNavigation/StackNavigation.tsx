import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {screenNames} from '../../utils/screenNames';
import BottomNavigation from '../bottomNavigation/BottomNavigation';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {AppThemeProvider, useAppTheme} from '../../theme/ThemeContext';
import {navigationRef} from '../../utils/navigationService';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {colors, mode} = useAppTheme();

  const navTheme = {
    ...(mode === 'dark' ? DarkTheme : DefaultTheme),
    colors: {
      ...(mode === 'dark' ? DarkTheme.colors : DefaultTheme.colors),
      background: colors.background,
      card: colors.card,
      primary: colors.primary,
      border: colors.tab,
      text: colors.primary,
      notification: colors.vividBlue,
    },
  };
  return (
    <NavigationContainer theme={navTheme} ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={screenNames.Tab} component={BottomNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const StackNavigation = () => {
  return (
    <AppThemeProvider>
      <AppNavigator />
    </AppThemeProvider>
  );
};

export default StackNavigation;
