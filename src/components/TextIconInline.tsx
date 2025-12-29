import React from 'react';
import {View, StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {fontScale} from '../theme/fontScale';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {IconName} from '../utils/transactionData';
import IconComponent from './IconComponent';

interface TextIconInlineProps {
  text: string;
  Icon: IconName;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

const TextIconInline: React.FC<TextIconInlineProps> = ({
  text,
  Icon,
  style,
  textStyle,
}) => {
  return (
    <View style={[styles.container, style]}>
      <IconComponent
        Icon={Icon}
        height={scale(12)}
        width={scale(12)}
        color={'text'}
      />
      <TextComponent disableLineHeight style={[styles.text, textStyle]}>
        {text}
      </TextComponent>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: scale(4),
  },
  textContainer: {
    marginLeft: scale(8),
  },
  text: {
    fontSize: fontScale(12),
  },
});

export default TextIconInline;
