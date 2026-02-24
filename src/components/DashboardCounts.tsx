import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import TextIconInline from './TextIconInline';
import {t} from '../localization/t';
import {strings} from '../localization';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import ProgressBar from './ProgressBar';
import {priceFormat} from '../utils/utils';
import BalanceComponent from './BalanceComponent';
import Stack from './Stack';

const DashboardCounts: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <Stack gap={15} alignItems="center" style={styles.mainContainer}>
      <Stack
        row
        alignItems="center"
        justifyContent="space-around"
        style={styles.container}>
        <BalanceComponent amount={priceFormat().format(7723)} />
        <View style={[styles.saperator, {backgroundColor: colors.divider}]} />
        <BalanceComponent
          expense
          amount={t(strings.common.negativeAmount, {
            amount: priceFormat().format(1187),
          })}
        />
      </Stack>
      <View style={styles.progressBarContainer}>
        <ProgressBar />
        <TextIconInline
          style={styles.textContainerStyle}
          textStyle={styles.textStyle}
          Icon={'boxChecked'}
          text={t(strings.progress.expenseInsight, {value: 30})}
        />
      </View>
    </Stack>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    width: '92%',
    alignSelf: 'center',
  },
  container: {
    width: '90%',
  },
  saperator: {
    width: scale(1),
    height: '90%',
  },
  progressBarContainer: {
    width: '85%',
    gap: scale(8),
  },
  textContainerStyle: {
    marginLeft: scale(3),
  },
  textStyle: {
    fontSize: scale(12),
  },
});

export default memo(DashboardCounts);
