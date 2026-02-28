import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Transaction} from '../utils/transactionData';
import {scale} from 'react-native-size-matters';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import moment from 'moment';
import ColumnDevider from './ColumnDevider';
import {priceFormat} from '../utils/utils';
import {t} from '../localization/t';
import {strings} from '../localization';
import {useAppTheme} from '../theme/ThemeContext';
import Stack from './Stack';

interface TransactionItemComponentProps {
  item: Transaction;
  blue?: boolean;
}

const TransactionItemComponent: React.FC<TransactionItemComponentProps> = ({
  item,
  blue = false,
}) => {
  const {colors} = useAppTheme();
  const {category, type, amount, frequency, occurredAt} = item;
  const {label, icon} = category;
  return (
    <Stack row alignItems="center" gap={10}>
      <Stack
        p={10}
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              type === 'expense' ? colors.oceanBlue : colors.lightBlue,
          },
        ]}>
        <IconComponent Icon={icon} height={26} width={26} color="staticWhite" />
      </Stack>
      <View style={styles.labelStyle}>
        <TextComponent variant="subtitle">{label}</TextComponent>
        <TextComponent
          weight="semibold"
          fontSize={12}
          disableLineHeight
          color="vividBlue">
          {moment(occurredAt).format('HH:MM - MMM DD')}
        </TextComponent>
      </View>
      <ColumnDevider color="progressFill" style={styles.columnStyle} />
      <View style={styles.freqStyle}>
        <TextComponent variant="paragraph" capitalised>
          {frequency}
        </TextComponent>
      </View>
      <ColumnDevider color="progressFill" style={styles.columnStyle} />
      <Stack alignItems="flex-end" style={styles.amountStyle}>
        <TextComponent
          variant="subtitle"
          color={type === 'income' ? 'text' : blue ? 'text' : 'vividBlue'}>
          {type === 'income'
            ? priceFormat().format(amount)
            : t(strings.common.negativeAmount, {
                amount: priceFormat().format(amount),
              })}
        </TextComponent>
      </Stack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: scale(18),
  },
  labelStyle: {
    width: '25%',
  },
  freqStyle: {
    width: scale(55),
    alignItems: 'center',
  },
  amountStyle: {
    width: scale(70),
  },
  columnStyle: {
    width: scale(1),
    height: '60%',
  },
});

export default memo(TransactionItemComponent);
