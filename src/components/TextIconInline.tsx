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
  iconEnabled?: boolean;
}

const TextIconInline: React.FC<TextIconInlineProps> = ({
  text,
  Icon,
  style,
  textStyle,
  iconEnabled = true,
}) => {
  return (
    <View style={[styles.container, style]}>
      {iconEnabled && (
        <IconComponent
          Icon={Icon}
          height={scale(9)}
          width={scale(9)}
          color="text"
        />
      )}
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
