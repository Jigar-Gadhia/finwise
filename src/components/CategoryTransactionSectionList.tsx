import moment from 'moment';
import React, {memo, useMemo} from 'react';
import {View, StyleSheet, SectionList, Platform} from 'react-native';
import {categoriesType} from '../utils/categoriesData';
import CategoryTransactionItem from './CategoryTransactionItem';
import TextComponent from './TextComponent';
import {scale} from 'react-native-size-matters';

interface Transaction {
  id: string;
  amount: number;
  timestamp: string;
}

const getLastTwoMonths = () => {
  return [0, 1].map(offset =>
    moment().subtract(offset, 'months').format('MMMM'),
  );
};

const randomDateInMonth = (monthOffset: number) => {
  const start = moment().subtract(monthOffset, 'months').startOf('month');
  const end = moment().subtract(monthOffset, 'months').endOf('month');

  const randomTimestamp =
    start.valueOf() + Math.random() * (end.valueOf() - start.valueOf());

  return moment(randomTimestamp);
};

export const generateTransactions = (
  monthOffset: number,
  count: number,
): Transaction[] => {
  return Array.from({length: count}).map((_, index) => {
    const amount = Math.random() * 500 + 100;
    const date = randomDateInMonth(monthOffset);

    return {
      id: `${monthOffset}-${index}`,
      amount,
      timestamp: date.toISOString(),
    };
  });
};

interface CategoryTransactionSectionListProps {
  transaction: categoriesType;
}

const CategoryTransactionSectionList: React.FC<
  CategoryTransactionSectionListProps
> = ({transaction}) => {
  const sections = useMemo(() => {
    const months = getLastTwoMonths();

    return months.map((month, index) => ({
      title: month,
      data: generateTransactions(index, 2),
    }));
  }, []);

  return (
    <View>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        renderItem={({item}) => (
          <CategoryTransactionItem
            amount={item.amount}
            icon={transaction.icon}
            name={transaction.name}
            timestamp={item.timestamp}
          />
        )}
        renderSectionHeader={({section}) => (
          <TextComponent variant="subtitle" disableLineHeight>
            {section.title}
          </TextComponent>
        )}
        stickySectionHeadersEnabled={false}
        contentInset={{bottom: scale(120)}}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={10}
        removeClippedSubviews
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: scale(25),
    paddingHorizontal: scale(25),
    paddingBottom: Platform.select({android: scale(110), ios: 0}),
    gap: scale(20),
  },
});

export default memo(CategoryTransactionSectionList);
