import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import IconComponent from './IconComponent';
import {icons} from '../utils/icons';
import {LightColors} from '../theme/colors';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {useAppTheme} from '../theme/ThemeContext';
import Stack from './Stack';

interface ProfileCardProps {
  icon: keyof typeof icons;
  title: string;
  onPress?: () => void;
  color: keyof typeof LightColors;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  icon = 'profile',
  title,
  onPress,
  color = 'lightBlue',
}) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Stack row alignItems="center" gap={12}>
        <Stack
          p={10}
          style={[styles.iconContainer, {backgroundColor: colors[color]}]}>
          <IconComponent
            Icon={icon}
            color="staticWhite"
            height={24}
            width={24}
          />
        </Stack>
        <TextComponent variant="subtitle" fontSize={15} disableLineHeight>
          {title}
        </TextComponent>
      </Stack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: scale(18),
  },
});

export default ProfileCard;
