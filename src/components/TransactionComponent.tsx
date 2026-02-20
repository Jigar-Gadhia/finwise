import React from 'react';
import {StyleSheet} from 'react-native';
import {transactionData} from '../utils/transactionData';
import TransactionItemComponent from './TransactionItemComponent';
import {scale} from 'react-native-size-matters';
import {filterTypes} from '../utils/filterData';
import Animated, {FadeIn} from 'react-native-reanimated';

interface TransactionComponentProps {
  currentFilter?: filterTypes;
}

const TransactionComponent: React.FC<TransactionComponentProps> = ({
  currentFilter = 'daily',
}) => {
  return (
    <Animated.View
      entering={FadeIn}
      key={`${currentFilter}`}
      style={styles.container}>
      {transactionData
        .filter(item => item.frequency === currentFilter)
        .map(item => {
          return <TransactionItemComponent item={item} key={item.id} />;
        })}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(20),
  },
});

export default TransactionComponent;
