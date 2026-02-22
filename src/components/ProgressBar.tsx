import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {fontScale} from '../theme/fontScale';
import {t} from '../localization/t';
import {strings} from '../localization';
import {priceFormat} from '../utils/utils';
import {useAppTheme} from '../theme/ThemeContext';
import {LightColors} from '../theme/colors';

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
    <View style={[styles.container, {backgroundColor: colors[trackColor]}]}>
      <TextComponent
        weight="regular"
        style={styles.percentageStyle}
        color={textColor}>
        {t(strings.common.percentage, {value: progressValue})}
      </TextComponent>
      <View style={[styles.progressBar, {backgroundColor: colors[fillColor]}]}>
        <TextComponent
          disableLineHeight
          weight="medium"
          style={[styles.progressPriceStyle, {color: colors.amountOnProgress}]}>
          {priceFormat().format(total)}
        </TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: scale(6),
    paddingHorizontal: scale(22),
    borderRadius: scale(13.5),
  },
  percentageStyle: {
    fontSize: fontScale(12),
  },
  progressPriceStyle: {
    fontSize: fontScale(13),
  },
  progressBar: {
    position: 'absolute',
    width: '90%',
    right: 0,
    alignItems: 'flex-end',
    height: scale(27),
    borderRadius: scale(13.5),
    top: scale(-1.1),
    justifyContent: 'center',
    paddingRight: scale(10),
  },
});

export default ProgressBar;
