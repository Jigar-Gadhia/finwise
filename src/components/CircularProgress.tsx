import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import {Canvas, Circle, Path} from '@shopify/react-native-skia';
import {useAppTheme} from '../theme/ThemeContext';
import {IconName} from '../utils/transactionData';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';

interface CircularProgressProps {
  size: number;
  strokeWidth: number;
  progressPercent: number;
  text: string;
  bgColor?: keyof ReturnType<typeof useAppTheme>['colors'];
  pgColor?: keyof ReturnType<typeof useAppTheme>['colors'];
  textColor?: keyof ReturnType<typeof useAppTheme>['colors'];
  textSize?: number;
  Icon?: IconName;
  iconWidth?: number;
  iconHeight?: number;
  iconColor?: keyof ReturnType<typeof useAppTheme>['colors'];
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  size,
  strokeWidth,
  progressPercent,
  text,
  bgColor = 'background',
  pgColor = 'oceanBlue',
  Icon,
  iconWidth = 24,
  iconHeight = 24,
  iconColor = 'text',
}) => {
  const {colors} = useAppTheme();

  const newSize = scale(size);
  const radius = (newSize - strokeWidth) / 2;
  const center = newSize / 2;
  const sweepAngle = (progressPercent / 100) * 360;

  return (
    <View style={[styles.wrapper, {width: newSize, height: newSize}]}>
      <Canvas style={StyleSheet.absoluteFill}>
        <Circle
          cx={center}
          cy={center}
          r={radius}
          color={colors[bgColor]}
          style="stroke"
          strokeWidth={strokeWidth}
        />

        <Path
          path={`M ${center} ${center - radius}
                 A ${radius} ${radius} 0 ${sweepAngle > 180 ? 1 : 0} 1 ${
            center + radius * Math.sin((sweepAngle * Math.PI) / 180)
          }
                 ${center - radius * Math.cos((sweepAngle * Math.PI) / 180)}`}
          color={colors[pgColor]}
          style="stroke"
          strokeWidth={strokeWidth}
          strokeCap="round"
        />
      </Canvas>
      <View style={styles.centerOverlay} pointerEvents="none">
        {Icon ? (
          <IconComponent
            Icon={Icon}
            width={scale(iconWidth)}
            height={scale(iconHeight)}
            color={iconColor}
          />
        ) : (
          <TextComponent variant="title" disableLineHeight color="text">
            {text}
          </TextComponent>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
  },
  centerOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircularProgress;
