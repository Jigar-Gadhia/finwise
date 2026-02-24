import React from 'react';
import {StyleSheet} from 'react-native';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {strings} from '../localization';
import {t} from '../localization/t';
import {scale} from 'react-native-size-matters';
import Stack from './Stack';

interface ProfilePictureProps {
  topValue?: number;
  showCamera?: boolean;
  showId?: boolean;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
  showCamera = false,
  showId = false,
  topValue = scale(10),
}) => {
  return (
    <Stack style={[styles.profileContainer, {top: topValue + scale(65)}]}>
      {showCamera && (
        <IconComponent
          Icon="camera"
          height={25}
          width={25}
          style={styles.iconStyle}
        />
      )}
      <IconComponent Icon="profilePlaceholer" height={100} width={100} />
      <Stack>
        <TextComponent variant="title" weight="bold">
          {t(strings.common.profileName)}
        </TextComponent>
        {showId && (
          <TextComponent variant="subtitle" disableLineHeight align="center">
            ID: <TextComponent>25030024</TextComponent>
          </TextComponent>
        )}
      </Stack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    zIndex: 1,
    gap: scale(15),
  },
  iconStyle: {
    position: 'absolute',
    zIndex: 2,
    top: scale(75),
    right: scale(132),
  },
});

export default ProfilePicture;
