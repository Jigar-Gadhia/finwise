import React from 'react';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import {icons} from '../utils/icons';

interface IconComponentProps {
  Icon: keyof typeof icons;
  height?: number;
  width?: number;
  color?: keyof ReturnType<typeof useAppTheme>['colors'];
}

const IconComponent: React.FC<IconComponentProps> = ({
  Icon = 'analysis',
  height = 10,
  width = 10,
  color = 'text',
}) => {
  const {colors} = useAppTheme();
  const IconImage = icons[Icon];
  return (
    <IconImage
      color={colors[color]}
      height={scale(height)}
      width={scale(width)}
    />
  );
};

export default IconComponent;
