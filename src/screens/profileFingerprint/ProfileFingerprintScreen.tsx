import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import ProfileCard from '../../components/ProfileCard';
import {screenNames} from '../../utils/screenNames';
import {navigate} from '../../utils/navigationService';

const ProfileFingerprintScreen: React.FC = () => {
  const onPress = (screenName: keyof typeof screenNames) => {
    navigate(screenName);
  };

  return (
    <Container screenName={t(strings.common.fingerprintHightlight)}>
      <CardComponent scrollStyle={styles.scrollStyle}>
        <Stack gap={20} mt={10}>
          <ProfileCard
            icon="profileFin"
            title={t(strings.profile.johnFin)}
            arrow
            onPress={() => onPress('CurrentFingerprintScreen')}
          />
          <ProfileCard
            icon="more"
            title={t(strings.profile.addFin)}
            arrow
            onPress={() => onPress('AddFingerprintScreen')}
            color="vividBlue"
          />
        </Stack>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    padding: scale(30),
  },
});

export default ProfileFingerprintScreen;
