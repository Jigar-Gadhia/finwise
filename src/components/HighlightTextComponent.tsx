import React from 'react';
import {TextStyle} from 'react-native';
import TextComponent from './TextComponent';

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
    <TextComponent variant={variant} disableLineHeight fontSize={fontSize}>
      {parts[0]}
      <TextComponent
        variant={variant}
        color="caribbeanGreen"
        disableLineHeight
        onPress={onPressHighlight}
        fontSize={fontSize}>
        {` ${highlight}`}
      </TextComponent>
      {parts[1]}
    </TextComponent>
  );
};

export default HighlightTextComponent;
