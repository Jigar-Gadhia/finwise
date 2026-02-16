import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import TextComponent from './TextComponent';
import {fontScale} from '../theme/fontScale';

interface HighlightTextComponentProps {
  text: string;
  highlight: string;
  variant?: 'title' | 'subtitle' | 'paragraph';
  fontSize?: TextStyle['fontSize'];
  onPressHighlight?: () => void;
}

const HighlightTextComponent: React.FC<HighlightTextComponentProps> = ({
  text,
  highlight,
  variant = 'title',
  fontSize = 14,
  onPressHighlight,
}) => {
  const parts = text.split(highlight);

  return (
    <TextComponent
      variant={variant}
      disableLineHeight
      style={[styles.textStyle, {fontSize: fontScale(fontSize)}]}>
      {parts[0]}
      <TextComponent
        variant={variant}
        color="caribbeanGreen"
        disableLineHeight
        onPress={onPressHighlight}
        style={[styles.textStyle, {fontSize: fontScale(fontSize)}]}>
        {` ${highlight}`}
      </TextComponent>
      {parts[1]}
    </TextComponent>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: fontScale(14),
  },
});

export default HighlightTextComponent;
