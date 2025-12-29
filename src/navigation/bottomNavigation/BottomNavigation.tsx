import React from 'react';
import {StatusBar, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {bottomNavigationData} from '../../utils/bottomNavigationData';
import {screenNames} from '../../utils/screenNames';
import {scale} from 'react-native-size-matters';
import {LightColors} from '../../theme/colors';
import {useAppTheme} from '../../theme/ThemeContext';
import IconComponent from '../../components/IconComponent';
import CustomTabBar from '../../components/CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  const {mode} = useAppTheme();
  const barStyle = mode === 'dark' ? 'light-content' : 'dark-content';
  return (
    <React.Fragment>
      <StatusBar barStyle={barStyle} translucent />
      <Tab.Navigator
        initialRouteName={screenNames.Home}
        screenOptions={{headerShown: false}}
        tabBar={props => <CustomTabBar {...props} />}>
        {bottomNavigationData.map((item, index) => {
          const Component = item.component;

          return (
            <Tab.Screen
              key={index}
              name={item.name}
              component={Component}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{
                      backgroundColor: focused
                        ? LightColors.caribbeanGreen
                        : undefined,
                      padding: scale(10),
                      borderRadius: scale(18),
                    }}>
                    <IconComponent
                      Icon={item.icon}
                      height={30}
                      width={30}
                      color={focused ? 'primary' : 'text'}
                    />
                  </View>
                ),
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
