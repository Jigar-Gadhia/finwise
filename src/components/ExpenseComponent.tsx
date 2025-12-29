import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAppTheme} from '../theme/ThemeContext';
import CircularProgress from './CircularProgress';
import TextComponent from './TextComponent';
import {strings} from '../localization';
import PriceWithIcon from './PriceWithIcon';
import {t} from '../localization/t';
import {scale} from 'react-native-size-matters';
import {fontScale} from '../theme/fontScale';
import ColumnDevider from './ColumnDevider';
import RowDevider from './RowDevider';

interface ExpenseComponentProps {
  textColor: keyof ReturnType<typeof useAppTheme>['colors'];
  iconColor: keyof ReturnType<typeof useAppTheme>['colors'];
  savingsTextColor?: keyof ReturnType<typeof useAppTheme>['colors'];
}

const ExpenseComponent: React.FC<ExpenseComponentProps> = ({
  textColor = 'text',
  iconColor = 'amountPositive',
  savingsTextColor = 'staticBlack',
}) => {
  return (
    <View style={styles.rowcontainer}>
      <View style={styles.savingContainer}>
        <CircularProgress
          progressPercent={50}
          size={68}
          strokeWidth={3.25}
          text="hello"
          bgColor={'amountPositive'}
          pgColor={'oceanBlue'}
          textColor={'caribbeanGreen'}
          textSize={20}
          Icon={'car'}
          iconHeight={21.75}
          iconWidth={37.57}
          iconColor={iconColor}
        />
        <TextComponent
          weight="medium"
          align="center"
          color={savingsTextColor}
          style={styles.savingText}
          disableLineHeight>
          {t(strings.cards.savingsOnGoals)}
        </TextComponent>
      </View>
      <ColumnDevider color="amountPositive" />
      <View style={styles.priceContainer}>
        <PriceWithIcon
          Icon={'salary'}
          text={t(strings.cards.revenueLastWeek)}
          price={4000}
          color={textColor}
          iconColor={iconColor}
        />
        <RowDevider color="amountPositive" />
        <PriceWithIcon
          Icon={'food'}
          text={t(strings.cards.foodLastWeek)}
          price={100}
          negativePrice
          color={textColor}
          iconColor={iconColor}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rowcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(10),
  },
  savingContainer: {
    alignItems: 'center',
    gap: scale(5),
    marginRight: scale(10),
  },
  savingText: {
    fontSize: fontScale(12),
  },
  priceContainer: {
    flex: 1,
    gap: scale(15),
  },
  seperator: {
    width: '100%',
    height: scale(2),
    alignSelf: 'center',
  },
});

export default ExpenseComponent;
