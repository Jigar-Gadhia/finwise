import React from 'react';
import {StyleSheet, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';
import {LightColors} from '../theme/colors';
import TextComponent from './TextComponent';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';

interface ButtonComponentProps {
  onPress?: () => void;
  title: string;
  bgColor?: keyof typeof LightColors;
  buttonStyle?: ViewStyle;
  fullWidth?: boolean;
  titleStyle?: TextStyle;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onPress,
  title,
  bgColor = 'caribbeanGreen',
  buttonStyle,
  titleStyle,
  fullWidth = false,
}) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        styles.container,
        {
          backgroundColor: colors[bgColor],
          width: fullWidth ? '100%' : scale(170),
          flexShrink: 1,
        },
        buttonStyle,
      ]}>
      <TextComponent
        align="center"
        variant="subtitle"
        style={titleStyle}
        fontSize={18}
        disableLineHeight
        color="staticBlack">
        {title}
      </TextComponent>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(8),
    borderRadius: scale(30),
  },
});

export default ButtonComponent;
