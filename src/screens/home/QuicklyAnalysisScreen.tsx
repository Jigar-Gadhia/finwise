import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import ExpenseComponent from '../../components/ExpenseComponent';
import {scale} from 'react-native-size-matters';
import {strings} from '../../localization';
import {t} from '../../localization/t';
import CardComponent from '../../components/CardComponent';
import TransactionComponent from '../../components/TransactionComponent';
import ExpenseBarChart from '../../components/ExpenseBarChart';

const QuicklyAnalysisScreen: React.FC = () => {
  return (
    <Container screenName={t(strings.screenHeaders.quicklyAnalysis)}>
      <View style={styles.expenseContainer}>
        <ExpenseComponent
          savingsTextColor="text"
          iconColor="divider"
          textColor="caribbeanGreen"
          negativePrice
        />
      </View>
      <CardComponent
        style={styles.cardStyle}
        scrollStyle={styles.scrollCardStyle}>
        <ExpenseBarChart />
        <TransactionComponent />
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  expenseContainer: {
    paddingVertical: scale(10),
    paddingHorizontal: scale(50),
  },
  cardStyle: {
    marginTop: scale(20),
  },
  scrollCardStyle: {
    padding: scale(25),
    gap: scale(20),
  },
});

export default QuicklyAnalysisScreen;
