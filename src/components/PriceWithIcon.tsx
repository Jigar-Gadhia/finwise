import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {priceFormat} from '../utils/utils';
import {scale} from 'react-native-size-matters';
import {fontScale} from '../theme/fontScale';
import {t} from '../localization/t';
import {strings} from '../localization';
import {useAppTheme} from '../theme/ThemeContext';
import {IconName} from '../utils/transactionData';

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
    <View style={styles.container}>
      <IconComponent color={iconColor} Icon={Icon} height={28} width={31} />
      <View style={styles.textContainer}>
        <TextComponent color={color} weight="regular" style={styles.textStyle}>
          {text}
        </TextComponent>
        <TextComponent
          weight="bold"
          customLineHeight={16}
          color={color}
          style={[
            styles.priceStyle,
            negativePrice && {color: colors.vividBlue},
          ]}>
          {negativePrice
            ? t(strings.common.negativeAmount, {
                amount: priceFormat.format(price),
              })
            : priceFormat.format(price)}
        </TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(6),
  },
  textStyle: {
    fontSize: fontScale(12),
  },
  priceStyle: {
    fontSize: fontScale(15),
  },
  textContainer: {
    gap: scale(5),
  },
});

export default PriceWithIcon;
