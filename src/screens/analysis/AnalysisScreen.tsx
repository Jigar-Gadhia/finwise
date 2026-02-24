import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
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
import {filters, filterTypes} from '../../utils/filterData';
import CircularProgressWithText from '../../components/CircularProgressWithText';
import Stack from '../../components/Stack';

const AnalysisScreen: React.FC = () => {
  const {colors} = useAppTheme();
  const [currentFilter, setCurrentFilter] = useState<filterTypes | undefined>(
    filters[0].name,
  );

  const onChangeFilter = (filter: filterTypes) => {
    setCurrentFilter(filter);
  };

  return (
    <Container screenName={t(strings.screenHeaders.analysis)}>
      <DashboardCounts />
      <CardComponent
        style={styles.cardStyle}
        scrollStyle={styles.scrollCardStyle}>
        <FilterComponent
          paddingRequired={false}
          yearlyEnabled
          currentFilter={currentFilter}
          onFilterChange={onChangeFilter}
        />
        <ExpenseBarChart filter={currentFilter} />
        <Stack row alignItems="center" justifyContent="space-around">
          <ExpenseIncomeComponent
            icon="arrowUp"
            amount={4120}
            text={t(strings.common.income)}
          />
          <ExpenseIncomeComponent
            icon="arrowDown"
            amount={1187}
            text={t(strings.common.expense)}
          />
        </Stack>
        <Stack gap={15}>
          <TextComponent variant="subtitle" capitalised>
            {t(strings.common.myTargets)}
          </TextComponent>
          <Stack row alignItems="center" justifyContent="space-between">
            <CircularProgressWithText progressText={30} label="Travel" />
            <CircularProgressWithText progressText={50} label="Car" />
          </Stack>
        </Stack>
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
  progressBox: {
    paddingTop: scale(14),
    paddingHorizontal: scale(22),
    paddingBottom: scale(5),
    borderRadius: scale(50),
    alignItems: 'center',
    gap: scale(8),
  },
});

export default AnalysisScreen;
