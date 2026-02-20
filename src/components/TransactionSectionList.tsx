import React, {memo, useMemo} from 'react';
import {View, StyleSheet, SectionList, Platform} from 'react-native';
import {transactionData} from '../utils/transactionData';
import moment from 'moment';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import TransactionItemComponent from './TransactionItemComponent';
import Animated, {FadeIn} from 'react-native-reanimated';

interface TransactionSectionListProps {
  income?: boolean;
  expense?: boolean;
}

const incomeData = transactionData.filter(t => t.type === 'income');
const expenseData = transactionData.filter(t => t.type === 'expense');

const TransactionSectionList: React.FC<TransactionSectionListProps> = ({
  income = false,
  expense = false,
}) => {
  const filteredData =
    income && !expense
      ? incomeData
      : !income && expense
      ? expenseData
      : transactionData;

  const sections = useMemo(() => {
    return [
      {title: moment().format('MMMM'), data: filteredData},
      {
        title: moment().subtract(1, 'months').format('MMMM'),
        data: filteredData,
      },
      {
        title: moment().subtract(2, 'months').format('MMMM'),
        data: filteredData,
      },
    ];
  }, [filteredData]);

  return (
    <Animated.View entering={FadeIn} key={`${income}-${expense}`}>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        renderItem={({item}) => {
          return <TransactionItemComponent item={item} />;
        }}
        renderSectionHeader={({section}) => (
          <View>
            <TextComponent variant="subtitle" disableLineHeight>
              {section.title}
            </TextComponent>
          </View>
        )}
        stickySectionHeadersEnabled={false}
        contentInset={{bottom: scale(120)}}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        windowSize={10}
        removeClippedSubviews
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: scale(25),
    paddingHorizontal: scale(25),
    paddingBottom: scale(Platform.OS === 'android' ? 110 : 0),
    gap: scale(20),
  },
});

export default memo(TransactionSectionList);
