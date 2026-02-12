import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useAppTheme} from '../theme/ThemeContext';
import IconComponent from './IconComponent';
import {scale, verticalScale} from 'react-native-size-matters';
import {LightColors} from '../theme/colors';
import {icons} from '../utils/icons';
import Animated, {ZoomIn, ZoomOut} from 'react-native-reanimated';

const CustomTabBar: React.FC<BottomTabBarProps> = ({state, navigation}) => {
  const {colors} = useAppTheme();
  const TAB_ICONS: Record<string, keyof typeof icons> = {
    Home: 'home',
    Search: 'search',
    Categories: 'categories',
    Analysis: 'analysis',
    Transactions: 'transactions',
    Profile: 'profile',
  };

  return (
    <View style={[styles.container, {backgroundColor: colors.tab}]}>
      {state.routes.map((route, index) => {
        const focused = state.index === index;

        const onPress = () => {
          if (!focused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Animated.View
            key={`${route.key}${focused}`}
            entering={ZoomIn}
            exiting={ZoomOut}>
            <TouchableOpacity
              onPress={onPress}
              activeOpacity={0.8}
              style={styles.tab}>
              <View style={[styles.iconWrapper, focused && styles.activeIcon]}>
                <IconComponent
                  Icon={TAB_ICONS[route.name]}
                  height={26}
                  width={26}
                  color={focused ? 'primary' : 'text'}
                />
              </View>
            </TouchableOpacity>
          </Animated.View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    height: verticalScale(95),
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: scale(70),
    borderTopRightRadius: scale(70),
    paddingHorizontal: scale(30),
    paddingTop: scale(25),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  iconWrapper: {
    padding: scale(10),
    borderRadius: scale(18),
  },
  activeIcon: {
    backgroundColor: LightColors.caribbeanGreen,
  },
});

export default CustomTabBar;
