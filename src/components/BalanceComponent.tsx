import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextIconInline from './TextIconInline';
import TextComponent from './TextComponent';
import {strings} from '../localization';
import {t} from '../localization/t';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';

interface BalanceComponentProps {
  expense?: boolean;
  amount?: string;
  backgoundEnabled?: boolean;
}

const BalanceComponent: React.FC<BalanceComponentProps> = ({
  expense = false,
  amount = '0',
  backgoundEnabled = false,
}) => {
  const {colors} = useAppTheme();
  return (
    <View
      style={
        backgoundEnabled && [
          styles.container,
          {backgroundColor: colors.amountPositive},
        ]
      }>
      <TextIconInline
        Icon={expense ? 'arrowDown' : 'arrowUp'}
        text={t(
          expense ? strings.balance.totalExpense : strings.balance.totalBalance,
        )}
        iconEnabled={!backgoundEnabled}
        textStyle={{color: backgoundEnabled ? colors.staticBlack : colors.text}}
      />
      <TextComponent
        weight="bold"
        variant="title"
        style={[
          styles.priceStyle,
          {
            color: backgoundEnabled
              ? colors.staticBlack
              : expense
              ? colors.vividBlue
              : colors.amountPositive,
          },
        ]}
        disableLineHeight>
        {amount}
      </TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: scale(10),
    borderRadius: scale(14),
    flexShrink: 1,
    alignItems: 'center',
  },
  priceStyle: {
    fontSize: scale(20),
  },
});

export default BalanceComponent;
