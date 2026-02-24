import React from 'react';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {priceFormat} from '../utils/utils';
import {t} from '../localization/t';
import {strings} from '../localization';
import {useAppTheme} from '../theme/ThemeContext';
import {IconName} from '../utils/transactionData';
import Stack from './Stack';

interface PriceWithIconProps {
  Icon: IconName;
  price: number;
  text: string;
  negativePrice?: boolean;
  color?: keyof ReturnType<typeof useAppTheme>['colors'];
  iconColor?: keyof ReturnType<typeof useAppTheme>['colors'];
}

const PriceWithIcon: React.FC<PriceWithIconProps> = ({
  Icon,
  price,
  text,
  negativePrice = false,
  color = 'text',
  iconColor = 'text',
}) => {
  const {colors} = useAppTheme();
  return (
    <Stack row alignItems="center" gap={6}>
      <IconComponent color={iconColor} Icon={Icon} height={28} width={31} />
      <Stack gap={5}>
        <TextComponent fontSize={12} color={color} weight="regular">
          {text}
        </TextComponent>
        <TextComponent
          weight="bold"
          lineHeight={16}
          color={color}
          fontSize={15}
          style={negativePrice && {color: colors.vividBlue}}>
          {negativePrice
            ? t(strings.common.negativeAmount, {
                amount: priceFormat().format(price),
              })
            : priceFormat().format(price)}
        </TextComponent>
      </Stack>
    </Stack>
  );
};

export default PriceWithIcon;
