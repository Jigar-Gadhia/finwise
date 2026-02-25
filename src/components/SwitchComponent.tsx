import React from 'react';
import {Pressable, StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  SharedValue,
} from 'react-native-reanimated';
import {LightColors} from '../theme/colors';
import {withOpacity} from '../utils/utils';
import {scale} from 'react-native-size-matters';
import Stack from './Stack';
import TextComponent from './TextComponent';

type TrackColors = {
  on: string;
  off: string;
};

type SwitchProps = {
  value: SharedValue<boolean>;
  onPress: () => void;
  style?: ViewStyle;
  duration?: number;
  trackColors?: TrackColors;
  title: string;
};

const SwitchComponent: React.FC<SwitchProps> = ({
  value,
  onPress,
  style,
  duration = 400,
  title,
  trackColors = {
    on: LightColors.caribbeanGreen,
    off: withOpacity(LightColors.caribbeanGreen, 0.5),
  },
}) => {
  const height = useSharedValue(0);
  const width = useSharedValue(0);

  const trackAnimatedStyle = useAnimatedStyle(() => {
    const color = interpolateColor(
      Number(value.value),
      [0, 1],
      [trackColors.off, trackColors.on],
    );

    return {
      backgroundColor: withTiming(color, {duration}),
      borderRadius: height.value / 2,
    };
  });

  const thumbAnimatedStyle = useAnimatedStyle(() => {
    const moveValue = interpolate(
      Number(value.value),
      [0, 1],
      [0, width.value - height.value],
    );

    return {
      transform: [{translateX: withTiming(moveValue, {duration})}],
      borderRadius: height.value / 2,
    };
  });

  return (
    <Stack row justifyContent="space-between" alignItems="center">
      <TextComponent capitalised variant="subtitle">
        {title}
      </TextComponent>
      <Pressable onPress={onPress}>
        <Animated.View
          onLayout={e => {
            height.value = e.nativeEvent.layout.height;
            width.value = e.nativeEvent.layout.width;
          }}
          style={[switchStyles.track, style, trackAnimatedStyle]}>
          <Animated.View style={[switchStyles.thumb, thumbAnimatedStyle]} />
        </Animated.View>
      </Pressable>
    </Stack>
  );
};

const switchStyles = StyleSheet.create({
  track: {
    alignItems: 'flex-start',
    width: scale(32),
    height: scale(16),
    padding: scale(2),
  },
  thumb: {
    height: '100%',
    aspectRatio: 1,
    backgroundColor: LightColors.staticWhite,
  },
});

export default SwitchComponent;
