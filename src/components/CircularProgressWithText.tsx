import React from 'react';
import {View, StyleSheet, StyleProp, ViewStyle} from 'react-native';
import CircularProgress from './CircularProgress';
import {t} from '../localization/t';
import {strings} from '../localization';
import TextComponent from './TextComponent';
import {useAppTheme} from '../theme/ThemeContext';
import {scale} from 'react-native-size-matters';
import {icons} from '../utils/icons';

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
    <View
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
        textColor={'text'}
        textSize={20}
        iconHeight={iconSize}
        iconWidth={iconSize}
      />
      <TextComponent
        capitalised
        variant="subtitle"
        disableLineHeight
        color="text">
        {label}
      </TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  progressBox: {
    paddingTop: scale(14),
    paddingHorizontal: scale(22),
    paddingBottom: scale(5),
    borderRadius: scale(50),
    alignItems: 'center',
    gap: scale(8),
  },
});

export default CircularProgressWithText;
