import React from 'react';
import {View, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {priceFormat} from '../utils/utils';

interface ExpenseIncomeComponentProps {
  icon: 'arrowUp' | 'arrowDown';
  amount: number;
  text: string;
}

const ExpenseIncomeComponent: React.FC<ExpenseIncomeComponentProps> = ({
  icon,
  amount,
  text,
}) => {
  return (
    <View style={styles.container}>
      <IconComponent
        color={icon === 'arrowDown' ? 'vividBlue' : 'text'}
        Icon={icon}
        height={25}
        width={25}
      />
      <TextComponent
        capitalised
        variant="subtitle"
        style={{marginTop: scale(4)}}>
        {text}
      </TextComponent>
      <TextComponent
        color={icon === 'arrowDown' ? 'vividBlue' : 'text'}
        variant="title">
        {priceFormat.format(amount)}
      </TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: scale(2),
  },
});

export default ExpenseIncomeComponent;
