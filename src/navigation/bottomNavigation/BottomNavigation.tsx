import React from 'react';
import {StatusBar} from 'react-native';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {bottomNavigationData} from '../../utils/bottomNavigationData';
import {screenNames} from '../../utils/screenNames';
import {useAppTheme} from '../../theme/ThemeContext';
import CustomTabBar from '../../components/CustomTabBar';

const Tab = createBottomTabNavigator();
const renderTabBar = (props: BottomTabBarProps) => <CustomTabBar {...props} />;

const BottomNavigation = () => {
  const {mode} = useAppTheme();
  const barStyle = mode === 'dark' ? 'light-content' : 'dark-content';
  return (
    <React.Fragment>
      <StatusBar barStyle={barStyle} translucent />
      <Tab.Navigator
        initialRouteName={screenNames.Home}
        screenOptions={{headerShown: false}}
        tabBar={renderTabBar}>
        {bottomNavigationData.map((item, index) => {
          const Component = item.component;

          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={Component}
              options={{
                tabBarShowLabel: false,
              }}
            />
          );
        })}
      </Tab.Navigator>
    </React.Fragment>
  );
};

export default BottomNavigation;
