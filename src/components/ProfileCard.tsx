import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import IconComponent from './IconComponent';
import {icons} from '../utils/icons';
import {LightColors} from '../theme/colors';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {useAppTheme} from '../theme/ThemeContext';
import Stack from './Stack';
import RowDevider from './RowDevider';

interface ProfileCardProps {
  icon?: keyof typeof icons;
  title: string;
  onPress?: () => void;
  color?: keyof typeof LightColors;
  arrow?: boolean;
  showIcon?: boolean;
  showDivider?: boolean;
  showBG?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  icon = 'profile',
  title,
  onPress,
  color = 'lightBlue',
  arrow = false,
  showIcon = true,
  showDivider = false,
  showBG = true,
}) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.container}
      onPress={onPress}>
      <Stack row justifyContent="space-between" alignItems="center">
        <Stack row alignItems="center" gap={12}>
          {showIcon ? (
            showBG ? (
              <Stack
                p={10}
                style={[
                  styles.iconContainer,
                  {backgroundColor: colors[color]},
                ]}>
                <IconComponent
                  Icon={icon}
                  color="staticWhite"
                  height={24}
                  width={24}
                />
              </Stack>
            ) : (
              <IconComponent
                Icon={icon}
                color="staticWhite"
                height={31}
                width={31}
              />
            )
          ) : null}
          <TextComponent variant="subtitle" fontSize={15} disableLineHeight>
            {title}
          </TextComponent>
        </Stack>
        {arrow && <IconComponent Icon="rightArrow" height={13} width={13} />}
      </Stack>
      {showDivider && (
        <RowDevider color="divider" style={styles.dividerStyle} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(20),
  },
  iconContainer: {
    borderRadius: scale(18),
  },
  dividerStyle: {
    borderWidth: 0.5,
  },
});

export default ProfileCard;
