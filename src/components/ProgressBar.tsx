import React from 'react';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {t} from '../localization/t';
import {strings} from '../localization';
import {priceFormat} from '../utils/utils';
import {useAppTheme} from '../theme/ThemeContext';
import {LightColors} from '../theme/colors';
import Stack from './Stack';

interface ProgressBarProps {
  trackColor?: keyof typeof LightColors;
  fillColor?: keyof typeof LightColors;
  textColor?: keyof typeof LightColors;
  progressValue?: number;
  total?: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  trackColor = 'progressTrack',
  fillColor = 'amountPositive',
  textColor = 'staticWhite',
  progressValue = 30,
  total = 20000,
}) => {
  const {colors} = useAppTheme();
  return (
    <Stack
      pv={6}
      ph={22}
      style={[styles.container, {backgroundColor: colors[trackColor]}]}>
      <TextComponent weight="regular" fontSize={12} color={textColor}>
        {t(strings.common.percentage, {value: progressValue})}
      </TextComponent>
      <Stack style={[styles.progressBar, {backgroundColor: colors[fillColor]}]}>
        <TextComponent
          disableLineHeight
          weight="medium"
          fontSize={13}
          style={{color: colors.amountOnProgress}}>
          {priceFormat().format(total)}
        </TextComponent>
      </Stack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: scale(13.5),
  },
  progressBar: {
    position: 'absolute',
    width: '90%',
    right: scale(-1),
    alignItems: 'flex-end',
    height: scale(28),
    borderRadius: scale(13.5),
    justifyContent: 'center',
    paddingRight: scale(10),
  },
});

export default ProgressBar;
