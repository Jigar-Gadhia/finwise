import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {fontScale} from '../theme/fontScale';
import {t} from '../localization/t';
import {strings} from '../localization';
import {priceFormat} from '../utils/utils';
import {useAppTheme} from '../theme/ThemeContext';

const ProgressBar: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <View style={[styles.container, {backgroundColor: colors.progressTrack}]}>
      <TextComponent weight="regular" style={styles.percentageStyle}>
        {t(strings.common.percentage, {value: 30})}
      </TextComponent>
      <View
        style={[styles.progressBar, {backgroundColor: colors.amountPositive}]}>
        <TextComponent
          disableLineHeight
          weight="medium"
          style={[styles.progressPriceStyle, {color: colors.amountOnProgress}]}>
          {priceFormat.format(20000)}
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
    bottom: scale(1.5),
    justifyContent: 'center',
    paddingRight: scale(10),
  },
});

export default ProgressBar;
