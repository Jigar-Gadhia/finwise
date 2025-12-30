// import {StyleSheet, ViewStyle} from 'react-native';
// import React, {ReactNode} from 'react';
// import {useIsFocused, useTheme} from '@react-navigation/native';
// import {SafeAreaView} from 'react-native-safe-area-context';
// import ScreenHeader from './ScreenHeader';
// import {t} from '../localization/t';
// import {strings} from '../localization';
// import Animated, {FadeInUp, FadeOutDown, ZoomIn, ZoomOut} from 'react-native-reanimated';

// type ContainerProps = {
//   children: ReactNode;
//   style?: ViewStyle;
//   home?: boolean;
//   screenName?: string;
//   showNoti?: boolean;
// };

// const Container: React.FC<ContainerProps> = ({
//   children,
//   style,
//   screenName,
//   home = false,
//   showNoti = false,
// }) => {
//   const {colors} = useTheme();
//   const focused = useIsFocused();
//   return (
//     <Animated.View
//       key={`${focused}`}
//       entering={ZoomIn}
//       exiting={ZoomOut}
//       style={styles.container}>
//     <SafeAreaView
//       edges={['top']}
//       style={[styles.container, {backgroundColor: colors.background}, style]}>
//         <ScreenHeader
//           home={showNoti ? false : home}
//           name={showNoti ? t(strings.screenHeaders.notifications) : screenName}
//           showNoti={showNoti}
//         />
//         {children}
//     </SafeAreaView>
//       </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {flex: 1},
// });

// export default Container;
import {StyleSheet, ViewStyle} from 'react-native';
import React, {ReactNode, useEffect} from 'react';
import {useIsFocused, useTheme} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ScreenHeader from './ScreenHeader';
import {t} from '../localization/t';
import {strings} from '../localization';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

type ContainerProps = {
  children: ReactNode;
  style?: ViewStyle;
  home?: boolean;
  screenName?: string;
  showNoti?: boolean;
};

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  screenName,
  home = false,
  showNoti = false,
}) => {
  const {colors} = useTheme();
  const focused = useIsFocused();

  const scale = useSharedValue(0.95);
  const opacity = useSharedValue(0);

  useEffect(() => {
    if (focused) {
      scale.value = withTiming(1, {duration: 250});
      opacity.value = withTiming(1, {duration: 200});
    } else {
      scale.value = withTiming(0.95, {duration: 150});
      opacity.value = withTiming(0);
    }
  }, [focused, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <SafeAreaView
        edges={['top']}
        style={[styles.container, {backgroundColor: colors.background}, style]}>
        <ScreenHeader
          home={showNoti ? false : home}
          name={showNoti ? t(strings.screenHeaders.notifications) : screenName}
          showNoti={showNoti}
        />
        {children}
      </SafeAreaView>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
});

export default Container;
