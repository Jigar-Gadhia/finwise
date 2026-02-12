import React from 'react';
import {Text, TextProps, StyleSheet} from 'react-native';
import {typography} from '../theme/typography';
import {fonts, FontWeight} from '../theme/fonts';
import {useAppTheme} from '../theme/ThemeContext';
import {fontScale} from '../theme/fontScale';

type Variant = keyof typeof typography;

type Props = TextProps & {
  variant?: Variant;
  color?: keyof ReturnType<typeof useAppTheme>['colors'];
  align?: 'left' | 'center' | 'right';
  weight?: FontWeight;
  disableLineHeight?: boolean;
  capitalised?: boolean;
  customLineHeight?: number;
};

const TextComponent: React.FC<Props> = ({
  variant = 'paragraph',
  color = 'text',
  align = 'left',
  weight,
  disableLineHeight = false,
  capitalised = false,
  customLineHeight,
  style,
  children,
  ...rest
}) => {
  const {colors} = useAppTheme();
  const base = typography[variant];

  const fontFamily = fonts[weight ?? base.weight];

  return (
    <Text
      {...rest}
      style={[
        styles.text,
        {
          fontSize: fontScale(base.fontSize),
          fontFamily,
          color: colors[color],
          textAlign: align,
          textTransform: capitalised ? 'capitalize' : 'none',
          ...(disableLineHeight
            ? null
            : {
                lineHeight: customLineHeight
                  ? fontScale(customLineHeight)
                  : fontScale(base.lineHeight),
              }),
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    includeFontPadding: false,
  },
});

export default TextComponent;
