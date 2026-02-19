import {StatusBar, StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenHeader from './ScreenHeader';
import {t} from '../localization/t';
import {strings} from '../localization';
import Animated from 'react-native-reanimated';
import {useFadeAnimation} from '../hooks/useFadeAnimation';
import {useScaleAnimation} from '../hooks/useScaleAnimation';

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
  home?: boolean;
  screenName?: string;
  showNoti?: boolean;
  showHeader?: boolean;
  bgColor?: keyof ReturnType<typeof useTheme>['colors'];
};

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  screenName,
  home = false,
  showNoti = false,
  showHeader = true,
  bgColor = 'background',
}) => {
  const {colors, dark} = useTheme();
  const focused = useIsFocused();

  const animatedStyle = [useFadeAnimation(focused), useScaleAnimation(focused)];

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <StatusBar
        backgroundColor={colors[bgColor]}
        barStyle={dark ? 'light-content' : 'dark-content'}
      />
      <SafeAreaView
        edges={['top']}
        style={[styles.container, {backgroundColor: colors[bgColor]}, style]}>
        {showHeader && (
          <ScreenHeader
            home={showNoti ? false : home}
            name={
              showNoti ? t(strings.screenHeaders.notifications) : screenName
            }
            showNoti={showNoti}
          />
        )}
        {children}
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Container;
