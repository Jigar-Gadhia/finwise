import React from 'react';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import {icons} from '../utils/icons';
import {Image, StyleProp, ViewStyle} from 'react-native';
import {Images} from '../utils/images';

interface IconComponentProps {
  Icon?: keyof typeof icons;
  height?: number;
  width?: number;
  color?: keyof ReturnType<typeof useAppTheme>['colors'];
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  showImage?: boolean;
  image?: keyof typeof Images;
}

const IconComponent: React.FC<IconComponentProps> = ({
  Icon = 'analysis',
  height = 10,
  width = 10,
  color = 'text',
  onPress,
  style,
  showImage = false,
  image = 'profileCamera',
}) => {
  const {colors} = useAppTheme();
  const IconImage = icons[Icon];
  return showImage ? (
    <Image
      source={Images[image]}
      style={{height, width, resizeMode: 'contain'}}
    />
  ) : (
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
