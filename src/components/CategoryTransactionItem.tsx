import React from 'react';
import {View, StyleSheet} from 'react-native';
import {icons} from '../utils/icons';
import {useAppTheme} from '../theme/ThemeContext';
import TextComponent from './TextComponent';
import moment from 'moment';
import {t} from '../localization/t';
import {strings} from '../localization';
import {priceFormat} from '../utils/utils';
import IconComponent from './IconComponent';
import {scale} from 'react-native-size-matters';
import {fontScale} from '../theme/fontScale';

interface CategoryTransactionItemProps {
  amount: number;
  timestamp: string;
  icon: keyof typeof icons;
  name: string;
}

const CategoryTransactionItem: React.FC<CategoryTransactionItemProps> = ({
  amount,
  icon,
  name,
  timestamp,
}) => {
  const {colors} = useAppTheme();
  return (
    <View style={styles.container}>
      <View style={styles.iconLableContainer}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: colors.vividBlue,
            },
          ]}>
          <IconComponent
            Icon={icon}
            height={26}
            width={26}
            color="staticWhite"
          />
        </View>
        <View>
          <TextComponent variant="subtitle" capitalised>
            {name}
          </TextComponent>
          <TextComponent
            weight="semibold"
            style={styles.dateStyle}
            disableLineHeight
            color="vividBlue">
            {moment(timestamp).format('HH:MM - MMM DD')}
          </TextComponent>
        </View>
      </View>
      <View style={styles.amountStyle}>
        <TextComponent variant="subtitle">
          {t(strings.common.negativeAmount, {
            amount: priceFormat().format(amount),
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
    justifyContent: 'space-between',
  },
  iconLableContainer: {
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
  amountStyle: {
    width: scale(70),
    alignItems: 'flex-end',
  },
});

export default CategoryTransactionItem;
