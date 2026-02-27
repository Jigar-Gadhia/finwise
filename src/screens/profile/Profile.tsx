import React from 'react';
import {screenNames} from '../../utils/screenNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from './ProfileScreen';
import NotificationsScreen from '../commonScreen.tsx/NotificationsScreen';
import EditProfileScreen from './EditProfileScreen';
import SecurityScreen from '../security/SecurityScreen';
import ProfileFingerprintScreen from '../profileFingerprint/ProfileFingerprintScreen';
import TntScreen from '../tnt/TntScreen';
import ChangePinScreen from '../changePin/ChangePinScreen';
import CurrentFingerprintScreen from '../currentFingerprint/CurrentFingerprintScreen';
import AddFingerprintScreen from '../addFingerprint/AddFingerprintScreen';
import SettingScreen from '../setting/SettingScreen';
import NotificationSettings from '../notificationSettings/NotificationSettings';
import PasswordSettings from '../passwordSettings/PasswordSettings';
import DeleteAccountScreen from '../deleteAccount/DeleteAccountScreen';
import HelpScreen from '../help/HelpScreen';
import OnlineSupportScreen from '../onlineSupport/OnlineSupportScreen';
import ChatScreen from '../chat/ChatScreen';

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
        name={screenNames.SecurityScreen}
        component={SecurityScreen}
      />
      <Stack.Screen
        name={screenNames.ChangePinScreen}
        component={ChangePinScreen}
      />
      <Stack.Screen
        name={screenNames.ProfileFingerprintScreen}
        component={ProfileFingerprintScreen}
      />
      <Stack.Screen name={screenNames.TntScreen} component={TntScreen} />
      <Stack.Screen
        name={screenNames.CurrentFingerprintScreen}
        component={CurrentFingerprintScreen}
      />
      <Stack.Screen
        name={screenNames.AddFingerprintScreen}
        component={AddFingerprintScreen}
      />
      <Stack.Screen
        name={screenNames.SettingScreen}
        component={SettingScreen}
      />
      <Stack.Screen
        name={screenNames.NotificationSettings}
        component={NotificationSettings}
      />
      <Stack.Screen
        name={screenNames.PasswordSettings}
        component={PasswordSettings}
      />
      <Stack.Screen
        name={screenNames.DeleteAccountScreen}
        component={DeleteAccountScreen}
      />
      <Stack.Screen name={screenNames.HelpScreen} component={HelpScreen} />
      <Stack.Screen
        name={screenNames.OnlineSupportScreen}
        component={OnlineSupportScreen}
      />
      <Stack.Screen name={screenNames.ChatScreen} component={ChatScreen} />
      <Stack.Screen
        name={screenNames.NotificationsScreen}
        component={NotificationsScreen}
      />
    </Stack.Navigator>
  );
};

export default Profile;
