import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import DashboardCounts from '../../components/DashboardCounts';
import CardComponent from '../../components/CardComponent';
import FilterComponent from '../../components/FilterComponent';
import {scale} from 'react-native-size-matters';
import ExpenseBarChart from '../../components/ExpenseBarChart';
import TextComponent from '../../components/TextComponent';
import ExpenseIncomeComponent from '../../components/ExpenseIncomeComponent';
import {useAppTheme} from '../../theme/ThemeContext';
import CircularProgress from '../../components/CircularProgress';

const AnalysisScreen: React.FC = () => {
  const {colors} = useAppTheme();
  return (
    <Container screenName={t(strings.screenHeaders.analysis)}>
      <DashboardCounts />
      <CardComponent
        style={styles.cardStyle}
        scrollStyle={styles.scrollCardStyle}>
        <FilterComponent
          paddingRequired={false}
          yearlyEnabled
          currentFilter="daily"
        />
        <ExpenseBarChart />
        <View style={styles.expenseContainer}>
          <ExpenseIncomeComponent
            icon="arrowUp"
            amount={4120}
            text={t(strings.common.expense)}
          />
          <ExpenseIncomeComponent
            icon="arrowDown"
            amount={1187}
            text={t(strings.common.expense)}
          />
        </View>
        <View style={styles.targetContainer}>
          <TextComponent variant="subtitle" capitalised>
            {t(strings.common.myTargets)}
          </TextComponent>
          <View style={styles.progressContainer}>
            <View
              style={[styles.progressBox, {backgroundColor: colors.lightBlue}]}>
              <CircularProgress
                progressPercent={30}
                size={100}
                strokeWidth={3.25}
                text={t(strings.common.percentage, {value: 30})}
                bgColor={'amountPositive'}
                pgColor={'oceanBlue'}
                textColor={'text'}
                textSize={20}
              />
              <TextComponent variant="subtitle">Travel</TextComponent>
            </View>
            <View
              style={[styles.progressBox, {backgroundColor: colors.lightBlue}]}>
              <CircularProgress
                progressPercent={50}
                size={100}
                strokeWidth={3.25}
                text={t(strings.common.percentage, {value: 50})}
                bgColor={'amountPositive'}
                pgColor={'oceanBlue'}
                textColor={'text'}
                textSize={20}
              />
              <TextComponent variant="subtitle" disableLineHeight>
                Car
              </TextComponent>
            </View>
          </View>
        </View>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: scale(20),
  },
  scrollCardStyle: {
    padding: scale(25),
    gap: scale(25),
  },
  expenseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  progressBox: {
    paddingTop: scale(14),
    paddingHorizontal: scale(22),
    paddingBottom: scale(5),
    borderRadius: scale(50),
    alignItems: 'center',
    gap: scale(8),
  },
  targetContainer: {
    gap: scale(15),
  },
});

export default AnalysisScreen;
