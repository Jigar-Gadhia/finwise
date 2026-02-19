import {useEffect} from 'react';
import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

interface FadeAnimationOptions {
  duration?: number;
  initialOpacity?: number;
}

export const useFadeAnimation = (
  visible: unknown,
  options: FadeAnimationOptions = {},
) => {
  const {duration = 200, initialOpacity = 0} = options;

  const opacity = useSharedValue(initialOpacity);

  useEffect(() => {
    opacity.value = withTiming(visible ? 1 : 0, {duration});
  }, [visible, duration, opacity]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return animatedStyle;
};
