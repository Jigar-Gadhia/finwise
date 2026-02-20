import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {scale} from 'react-native-size-matters';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {priceFormat} from '../utils/utils';
import {useAppTheme} from '../theme/ThemeContext';

interface ExpenseIncomeComponentProps {
  icon: 'arrowUp' | 'arrowDown';
  amount: number;
  text: string;
  backgroundEnabled?: boolean;
  buttonDisabled?: boolean;
  active?: boolean;
  onPress?: () => void;
}

const ExpenseIncomeComponent: React.FC<ExpenseIncomeComponentProps> = ({
  icon,
  amount,
  text,
  backgroundEnabled = false,
  buttonDisabled = true,
  active = false,
  onPress,
}) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={buttonDisabled}
      onPress={onPress}
      style={[
        styles.container,
        backgroundEnabled && [
          styles.containerBackground,
          {backgroundColor: active ? colors.oceanBlue : colors.amountPositive},
        ],
      ]}>
      <IconComponent
        color={
          active
            ? 'staticWhite'
            : icon === 'arrowDown'
            ? 'vividBlue'
            : backgroundEnabled
            ? 'caribbeanGreen'
            : 'text'
        }
        Icon={icon}
        height={25}
        width={25}
      />
      <TextComponent
        capitalised
        variant="subtitle"
        style={{marginTop: scale(4)}}
        color={
          backgroundEnabled ? (active ? 'staticWhite' : 'staticBlack') : 'text'
        }>
        {text}
      </TextComponent>
      <TextComponent
        color={
          active
            ? 'staticWhite'
            : icon === 'arrowDown'
            ? 'vividBlue'
            : backgroundEnabled
            ? 'staticBlack'
            : 'text'
        }
        variant="title">
        {priceFormat.format(amount)}
      </TextComponent>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: scale(2),
  },
  containerBackground: {
    width: '100%',
    flexShrink: 1,
    paddingVertical: scale(10),
    borderRadius: scale(14),
    alignItems: 'center',
  },
});

export default ExpenseIncomeComponent;
