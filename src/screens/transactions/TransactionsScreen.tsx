import React from 'react';
import Container from '../../components/Container';
import {screenNames} from '../../utils/screenNames';
import BalanceComponent from '../../components/BalanceComponent';
import {priceFormat} from '../../utils/utils';
import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import ExpenseIncomeComponent from '../../components/ExpenseIncomeComponent';
import {strings} from '../../localization';
import {t} from '../../localization/t';
import CardComponent from '../../components/CardComponent';
import TransactionSectionList from '../../components/TransactionSectionList';

interface TransactionFilterTypes {
  income: boolean;
  expense: boolean;
}

const TransactionsScreen = () => {
  const [transactionFilters, setTransactionFilters] =
    React.useState<TransactionFilterTypes>({
      expense: false,
      income: false,
    });

  const toggleFilter = (filter: keyof TransactionFilterTypes) => {
    setTransactionFilters(prev => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  return (
    <Container screenName={screenNames.Transactions}>
      <Stack ph={20} gap={15}>
        <BalanceComponent
          amount={priceFormat().format(7723)}
          backgoundEnabled
        />
        <Stack row gap={15}>
          <ExpenseIncomeComponent
            icon="arrowUp"
            amount={4120}
            text={t(strings.common.income)}
            backgroundEnabled
            buttonDisabled={false}
            active={transactionFilters.income}
            onPress={() => toggleFilter('income')}
          />
          <ExpenseIncomeComponent
            icon="arrowDown"
            amount={1187}
            text={t(strings.common.expense)}
            backgroundEnabled
            buttonDisabled={false}
            active={transactionFilters.expense}
            onPress={() => toggleFilter('expense')}
          />
        </Stack>
      </Stack>
      <CardComponent style={styles.cardStyle} scroll={false}>
        <TransactionSectionList
          expense={transactionFilters.expense}
          income={transactionFilters.income}
        />
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: scale(20),
  },
});

export default TransactionsScreen;
