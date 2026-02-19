import React from 'react';
import {View, StyleSheet} from 'react-native';
import {transactionData} from '../utils/transactionData';
import TransactionItemComponent from './TransactionItemComponent';
import {scale} from 'react-native-size-matters';
import {filterTypes} from '../utils/filterData';

interface TransactionComponentProps {
  currentFilter?: filterTypes;
}

const TransactionComponent: React.FC<TransactionComponentProps> = ({
  currentFilter = 'daily',
}) => {
  return (
    <View style={styles.container}>
      {transactionData
        .filter(item => item.frequency === currentFilter)
        .map(item => {
          return <TransactionItemComponent item={item} key={item.id} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(20),
  },
});

export default TransactionComponent;
