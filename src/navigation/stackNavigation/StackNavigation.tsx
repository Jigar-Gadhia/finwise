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
import BootSplash from 'react-native-bootsplash';
import OnBoardingScreen from '../../screens/onboarding/OnBoardingScreen';
import {useSelector} from 'react-redux';
import {ThemeState} from '../../store/slices/themeSlice';
import WelcomeScreen from '../../screens/welcome/WelcomeScreen';
import LoginScreen from '../../screens/login/LoginScreen';
import SignupScreen from '../../screens/signup/SignupScreen';
import ForgotPasswordScreen from '../../screens/forgotPassword/ForgotPasswordScreen';
import SecurityPinScreen from '../../screens/securityPin/SecurityPinScreen';
import NewPasswordScreen from '../../screens/newPassword/NewPasswordScreen';
import FingerprintScreen from '../../screens/fingerprint/FingerprintScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const {colors, mode} = useAppTheme();
  const {isFirstLaunch} = useSelector(
    (state: {theme: ThemeState}) => state.theme,
  );

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

  const onReady = async () => {
    await BootSplash.hide({fade: true});
  };
  return (
    <NavigationContainer theme={navTheme} ref={navigationRef} onReady={onReady}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name={screenNames.OnBoardingScreen}
          component={OnBoardingScreen}
        />
        <Stack.Screen
          name={screenNames.WelcomeScreen}
          component={WelcomeScreen}
        />
        <Stack.Screen name={screenNames.LoginScreen} component={LoginScreen} />
        <Stack.Screen
          name={screenNames.SignupScreen}
          component={SignupScreen}
        />
        <Stack.Screen
          name={screenNames.ForgotPasswordScreen}
          component={ForgotPasswordScreen}
        />
        <Stack.Screen
          name={screenNames.SecurityPinScreen}
          component={SecurityPinScreen}
        />
        <Stack.Screen
          name={screenNames.NewPasswordScreen}
          component={NewPasswordScreen}
        />
        <Stack.Screen
          name={screenNames.FingerprintScreen}
          component={FingerprintScreen}
        />
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
