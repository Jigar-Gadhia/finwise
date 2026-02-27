import React, {FC, useEffect, useState} from 'react';
import {Pressable, LayoutChangeEvent, View} from 'react-native';
import Stack from './Stack';
import TextComponent from './TextComponent';
import IconComponent from './IconComponent';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  withDelay,
  interpolate,
  Easing,
} from 'react-native-reanimated';

interface CollapsableContainerProps {
  children: React.ReactNode;
  expanded: boolean;
  title: string;
  onPress: () => void;
}

export const CollapsableContainer: FC<CollapsableContainerProps> = ({
  children,
  expanded,
  title,
  onPress,
}) => {
  const [contentHeight, setContentHeight] = useState(0);

  const animatedHeight = useSharedValue(0);
  const progress = useSharedValue(0); // controls fade + rotation

  // Measure children height
  const onLayout = (event: LayoutChangeEvent) => {
    const height = event.nativeEvent.layout.height;
    if (height > 0 && contentHeight !== height) {
      setContentHeight(height);
    }
  };

  // Animate when expanded changes
  useEffect(() => {
    if (contentHeight === 0) {
      return;
    }

    // Height animation (starts immediately)
    animatedHeight.value = withTiming(expanded ? contentHeight : 0, {
      duration: 300,
      easing: Easing.out(Easing.cubic),
    });

    if (expanded) {
      // Fade IN after slight delay
      progress.value = withDelay(120, withTiming(1, {duration: 200}));
    } else {
      // Fade OUT immediately
      progress.value = withTiming(0, {duration: 150});
    }
  }, [expanded, contentHeight, animatedHeight, progress]);

  // Height animation style
  const containerStyle = useAnimatedStyle(() => {
    return {
      height: animatedHeight.value,
    };
  });

  // Arrow rotation style
  const rotateStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(progress.value, [0, 1], [0, 180])}deg`,
        },
      ],
    };
  });

  // Fade + slight upward motion
  const fadeStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {
          translateY: interpolate(progress.value, [0, 1], [-6, 0]),
        },
      ],
    };
  });

  return (
    <Stack>
      <Pressable onPress={onPress}>
        <Stack row alignItems="center" justifyContent="space-between">
          <TextComponent weight="regular" fontSize={14}>
            {title}
          </TextComponent>

          <Animated.View style={rotateStyle}>
            <IconComponent
              Icon="downArrow"
              height={14}
              width={14}
              color="text"
            />
          </Animated.View>
        </Stack>
      </Pressable>

      {/* Animated Collapsible Content */}
      <Animated.View style={[containerStyle, {overflow: 'hidden'}]}>
        <View style={{position: 'absolute', width: '100%'}} onLayout={onLayout}>
          <Animated.View style={fadeStyle}>
            <Stack mt={8}>{children}</Stack>
          </Animated.View>
        </View>
      </Animated.View>
    </Stack>
  );
};

export default React.memo(CollapsableContainer);
