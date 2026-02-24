import React from 'react';
import {useAppTheme} from '../theme/ThemeContext';
import CircularProgress from './CircularProgress';
import TextComponent from './TextComponent';
import {strings} from '../localization';
import PriceWithIcon from './PriceWithIcon';
import {t} from '../localization/t';
import ColumnDevider from './ColumnDevider';
import RowDevider from './RowDevider';
import Stack from './Stack';

interface ExpenseComponentProps {
  textColor: keyof ReturnType<typeof useAppTheme>['colors'];
  iconColor: keyof ReturnType<typeof useAppTheme>['colors'];
  savingsTextColor?: keyof ReturnType<typeof useAppTheme>['colors'];
  negativePrice?: boolean;
}

const ExpenseComponent: React.FC<ExpenseComponentProps> = ({
  textColor = 'text',
  iconColor = 'amountPositive',
  savingsTextColor = 'staticBlack',
  negativePrice = false,
}) => {
  return (
    <Stack row alignItems="center" justifyContent="center" gap={10}>
      <Stack alignItems="center" gap={5} mr={10}>
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
          fontSize={12}
          disableLineHeight>
          {t(strings.cards.savingsOnGoals)}
        </TextComponent>
      </Stack>
      <ColumnDevider color="amountPositive" />
      <Stack gap={15}>
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
          negativePrice={negativePrice}
          color={textColor}
          iconColor={iconColor}
        />
      </Stack>
    </Stack>
  );
};

export default ExpenseComponent;
