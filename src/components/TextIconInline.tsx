import React from 'react';
import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {IconName} from '../utils/transactionData';
import IconComponent from './IconComponent';
import Stack from './Stack';

interface TextIconInlineProps {
  text: string;
  Icon: IconName;
  style?: ViewStyle;
  textStyle?: TextStyle;
  iconEnabled?: boolean;
  flip?: boolean;
}

const TextIconInline: React.FC<TextIconInlineProps> = ({
  text,
  Icon,
  style,
  textStyle,
  iconEnabled = true,
  flip = false,
}) => {
  return (
    <Stack style={style} alignItems="center" row gap={4}>
      {iconEnabled && (
        <IconComponent
          Icon={Icon}
          height={scale(9)}
          width={scale(9)}
          color="text"
          style={flip && styles.flipStyle}
        />
      )}
      <TextComponent
        variant="subtitle"
        disableLineHeight
        style={textStyle}
        fontSize={12}>
        {text}
      </TextComponent>
    </Stack>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    marginLeft: scale(8),
  },
  flipStyle: {
    transform: [{rotate: '-90deg'}],
  },
});

export default TextIconInline;
