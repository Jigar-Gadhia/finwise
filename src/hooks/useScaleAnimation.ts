import {useEffect} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface Options {
  initialScale?: number;
  focusedScale?: number;
  duration?: number;
}

export const useScaleAnimation = (focused: boolean, options: Options = {}) => {
  const {initialScale = 0.95, focusedScale = 1, duration = 250} = options;

  const scale = useSharedValue(initialScale);

  useEffect(() => {
    scale.value = withTiming(focused ? focusedScale : initialScale, {duration});
  }, [focused, duration, focusedScale, initialScale, scale]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{scale: scale.value}],
  }));

  return animatedStyle;
};
