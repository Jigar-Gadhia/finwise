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
  fontSize?: number;
  lineHeight?: number;
  disableLineHeight?: boolean;
  capitalised?: boolean;
};

const LINE_HEIGHT_RATIO = 1.45;

const TextComponent: React.FC<Props> = ({
  variant = 'paragraph',
  color = 'text',
  align = 'left',
  weight,
  fontSize,
  lineHeight,
  disableLineHeight = false,
  capitalised = false,
  style,
  children,
  ...rest
}) => {
  const {colors} = useAppTheme();
  const base = typography[variant];

  const finalFontSize = fontSize ?? base.fontSize;
  const finalLineHeight = disableLineHeight
    ? undefined
    : lineHeight ?? undefined;

  const fontFamily = fonts[weight ?? base.weight];

  return (
    <Text
      {...rest}
      style={[
        styles.text,
        {
          fontSize: fontScale(finalFontSize),
          lineHeight: finalLineHeight ? fontScale(finalLineHeight) : undefined,
          fontFamily,
          color: colors[color],
          textAlign: align,
          textTransform: capitalised ? 'capitalize' : 'none',
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
