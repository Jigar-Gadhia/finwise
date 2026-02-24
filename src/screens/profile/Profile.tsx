import React from 'react';
import {screenNames} from '../../utils/screenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';
import EditProfileScreen from './EditProfileScreen';

const Profile = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={screenNames.ProfileScreen}
        component={ProfileScreen}
      />
      <Stack.Screen
        name={screenNames.EditProfileScreen}
        component={EditProfileScreen}
      />
      <Stack.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default Profile;
