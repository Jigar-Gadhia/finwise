import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {screenNames} from '../../utils/screenNames';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import ProfileCard from '../../components/ProfileCard';
import ProfilePicture from '../../components/ProfilePicture';
import {navigate} from '../../utils/navigationService';

const ProfileScreen: React.FC = () => {
  const onPressEditProfile = () => {
    navigate(screenNames.EditProfileScreen);
  };

  return (
    <Container screenName={screenNames.Profile}>
      <ProfilePicture topValue={topValue} />
      <CardComponent style={styles.cardStyle} scrollStyle={styles.scrollStyle}>
        <ProfileCard
          title={t(strings.profile.editProfile)}
          icon="profile"
          color="lightBlue"
          onPress={onPressEditProfile}
        />
        <ProfileCard
          title={t(strings.profile.security)}
          icon="security"
          color="vividBlue"
        />
        <ProfileCard
          title={t(strings.profile.setting)}
          icon="settings"
          color="oceanBlue"
        />
        <ProfileCard
          title={t(strings.profile.help)}
          icon="help"
          color="lightBlue"
        />
        <ProfileCard
          title={t(strings.profile.logout)}
          icon="logout"
          color="vividBlue"
        />
      </CardComponent>
    </Container>
  );
};

const topValue = scale(45);

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: topValue,
  },
  scrollStyle: {
    paddingTop: scale(140),
    paddingHorizontal: scale(30),
    gap: scale(20),
  },
});

export default ProfileScreen;
