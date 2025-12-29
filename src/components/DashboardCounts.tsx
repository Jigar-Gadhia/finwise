import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextIconInline from './TextIconInline';
import {t} from '../localization/t';
import {strings} from '../localization';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import TextComponent from './TextComponent';
import ProgressBar from './ProgressBar';
import {priceFormat} from '../utils/utils';

const DashboardCounts: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <TextIconInline
            Icon={'arrowUp'}
            text={t(strings.balance.totalBalance)}
          />
          <TextComponent
            weight="bold"
            variant="title"
            style={[styles.priceStyle, {color: colors.amountPositive}]}
            disableLineHeight>
            {priceFormat.format(7723)}
          </TextComponent>
        </View>
        <View style={[styles.saperator, {backgroundColor: colors.divider}]} />
        <View>
          <TextIconInline
            Icon={'arrowDown'}
            text={t(strings.balance.totalExpense)}
          />
          <TextComponent
            weight="bold"
            variant="title"
            style={[styles.priceStyle, {color: colors.vividBlue}]}
            disableLineHeight>
            {t(strings.common.negativeAmount, {
              amount: priceFormat.format(1187),
            })}
          </TextComponent>
        </View>
      </View>
      <View style={styles.progressBarContainer}>
        <ProgressBar />
        <TextIconInline
          style={styles.textContainerStyle}
          textStyle={styles.textStyle}
          Icon={'boxChecked'}
          text={t(strings.progress.expenseInsight, {value: 30})}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    gap: scale(15),
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(30),
  },
  saperator: {
    width: scale(2),
    height: '100%',
  },
  priceStyle: {
    fontSize: scale(24),
  },
  progressBarContainer: {
    width: '100%',
    paddingHorizontal: scale(20),
    gap: scale(8),
  },
  textContainerStyle: {
    marginLeft: scale(12),
  },
  textStyle: {
    fontSize: scale(12),
  },
});

export default DashboardCounts;
