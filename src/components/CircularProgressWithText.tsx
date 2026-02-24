import React from 'react';
import {StyleSheet, StyleProp, ViewStyle} from 'react-native';
import CircularProgress from './CircularProgress';
import {t} from '../localization/t';
import {strings} from '../localization';
import TextComponent from './TextComponent';
import {useAppTheme} from '../theme/ThemeContext';
import {scale} from 'react-native-size-matters';
import {icons} from '../utils/icons';
import Stack from './Stack';

interface CircularProgressWithTextProps {
  progressText?: number;
  icon?: keyof typeof icons;
  label?: string;
  iconSize?: number;
  circleSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
}

const CircularProgressWithText: React.FC<CircularProgressWithTextProps> = ({
  icon,
  label,
  progressText,
  iconSize,
  containerStyle,
  circleSize = 100,
}) => {
  const {colors} = useAppTheme();
  return (
    <Stack
      pt={14}
      ph={22}
      pb={5}
      gap={8}
      alignItems="center"
      style={[
        styles.progressBox,
        containerStyle,
        {backgroundColor: colors.lightBlue},
      ]}>
      <CircularProgress
        progressPercent={Number(progressText)}
        size={circleSize}
        strokeWidth={3.25}
        text={t(strings.common.percentage, {value: Number(progressText)})}
        Icon={icon}
        bgColor={'amountPositive'}
        pgColor={'oceanBlue'}
        textColor={'staticWhite'}
        textSize={20}
        iconHeight={iconSize}
        iconWidth={iconSize}
        iconColor="staticWhite"
      />
      <TextComponent
        capitalised
        variant="subtitle"
        disableLineHeight
        color="staticWhite">
        {label}
      </TextComponent>
    </Stack>
  );
};

const styles = StyleSheet.create({
  progressBox: {
    borderRadius: scale(50),
  },
});

export default CircularProgressWithText;
