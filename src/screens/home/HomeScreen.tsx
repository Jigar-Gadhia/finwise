import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Container from '../../components/Container';
import {useAppTheme} from '../../theme/ThemeContext';
import DashboardCounts from '../../components/DashboardCounts';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import ExpenseComponent from '../../components/ExpenseComponent';
import FilterComponent from '../../components/FilterComponent';
import TransactionComponent from '../../components/TransactionComponent';
import {screenNames} from '../../utils/screenNames';
import {navigate} from '../../utils/navigationService';
import {filters, filterTypes} from '../../utils/filterData';

const HomeScreen = () => {
  const {colors} = useAppTheme();
  const [currentFilter, setCurrentFilter] = useState<filterTypes | undefined>(
    filters[0].name,
  );

  const onPressExpenseCard = () => {
    navigate(screenNames.QuicklyAnalysisScreen);
  };

  const onChangeFilter = (filter: filterTypes) => {
    setCurrentFilter(filter);
  };

  return (
    <Container home>
      <DashboardCounts />
      <CardComponent
        scrollStyle={styles.scrollCardStyle}
        style={styles.cardStyle}>
        <TouchableOpacity
          onPress={onPressExpenseCard}
          style={[styles.subCard, {backgroundColor: colors.caribbeanGreen}]}>
          <ExpenseComponent iconColor="staticBlack" textColor="staticBlack" />
        </TouchableOpacity>
        <FilterComponent
          currentFilter={currentFilter}
          onFilterChange={onChangeFilter}
          yearlyEnabled={false}
        />
        <TransactionComponent currentFilter={currentFilter} />
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
    gap: scale(20),
  },
  subCard: {
    padding: scale(18),
    paddingHorizontal: scale(25),
    borderRadius: scale(31),
  },
});

export default HomeScreen;
