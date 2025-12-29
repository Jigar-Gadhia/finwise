import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useAppTheme} from '../theme/ThemeContext';
import IconComponent from './IconComponent';
import {scale, verticalScale} from 'react-native-size-matters';
import {LightColors} from '../theme/colors';
import {icons} from '../utils/icons';

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
        console.log(route.name);
        const focused = state.index === index;

        const onPress = () => {
          if (!focused) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            onPress={onPress}
            activeOpacity={0.8}
            style={styles.tab}>
            <View style={[styles.iconWrapper, focused && styles.activeIcon]}>
              <IconComponent
                Icon={TAB_ICONS[route.name]}
                height={28}
                width={28}
                color={focused ? 'primary' : 'text'}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    height: verticalScale(90),
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: scale(70),
    borderTopRightRadius: scale(70),
    paddingHorizontal: scale(25),
    paddingVertical: scale(20),
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
