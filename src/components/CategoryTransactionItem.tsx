import React from 'react';
import {StyleSheet} from 'react-native';
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
import Stack from './Stack';

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
    <Stack alignItems="center" row justifyContent="space-between">
      <Stack row alignItems="center" gap={10}>
        <Stack
          p={10}
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
        </Stack>
        <Stack>
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
        </Stack>
      </Stack>
      <Stack>
        <TextComponent variant="subtitle">
          {t(strings.common.negativeAmount, {
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
  dateStyle: {
    fontSize: fontScale(12),
  },
});

export default CategoryTransactionItem;
