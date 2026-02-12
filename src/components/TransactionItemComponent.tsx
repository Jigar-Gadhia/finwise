import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Transaction} from '../utils/transactionData';
import {scale} from 'react-native-size-matters';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import moment from 'moment';
import {fontScale} from '../theme/fontScale';
import ColumnDevider from './ColumnDevider';
import {priceFormat} from '../utils/utils';
import {t} from '../localization/t';
import {strings} from '../localization';
import {useAppTheme} from '../theme/ThemeContext';

interface TransactionItemComponentProps {
  item: Transaction;
}

const TransactionItemComponent: React.FC<TransactionItemComponentProps> = ({
  item,
}) => {
  const {colors} = useAppTheme();
  const {category, type, amount, frequency, occurredAt} = item;
  const {label, icon} = category;
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.iconContainer,
          {
            backgroundColor:
              type === 'expense' ? colors.oceanBlue : colors.lightBlue,
          },
        ]}>
        <IconComponent Icon={icon} height={26} width={26} color="staticWhite" />
      </View>
      <View style={styles.labelStyle}>
        <TextComponent variant="subtitle">{label}</TextComponent>
        <TextComponent
          weight="semibold"
          style={styles.dateStyle}
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
      <View style={styles.amountStyle}>
        <TextComponent
          variant="subtitle"
          color={type === 'income' ? 'text' : 'vividBlue'}>
          {type === 'income'
            ? priceFormat.format(amount)
            : t(strings.common.negativeAmount, {
                amount: priceFormat.format(amount),
              })}
        </TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(10),
  },
  iconContainer: {
    padding: scale(10),
    borderRadius: scale(18),
  },
  dateStyle: {
    fontSize: fontScale(12),
  },
  labelStyle: {
    width: '25%',
  },
  freqStyle: {
    width: scale(50),
    alignItems: 'center',
  },
  amountStyle: {
    width: scale(70),
    alignItems: 'flex-end',
  },
  columnStyle: {
    width: scale(1),
    height: '60%',
  },
});

export default TransactionItemComponent;
