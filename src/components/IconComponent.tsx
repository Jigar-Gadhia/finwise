import React from 'react';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import {icons} from '../utils/icons';
import {StyleProp, ViewStyle} from 'react-native';

interface IconComponentProps {
  Icon: keyof typeof icons;
  height?: number;
  width?: number;
  color?: keyof ReturnType<typeof useAppTheme>['colors'];
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

const IconComponent: React.FC<IconComponentProps> = ({
  Icon = 'analysis',
  height = 10,
  width = 10,
  color = 'text',
  onPress,
  style,
}) => {
  const {colors} = useAppTheme();
  const IconImage = icons[Icon];
  return (
    <IconImage
      color={colors[color]}
      height={scale(height)}
      width={scale(width)}
      onPress={onPress}
      style={style}
    />
  );
};

export default IconComponent;
