import React, {Fragment, useState} from 'react';
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
import AppModal from '../../components/AppModal';
import Stack from '../../components/Stack';
import TextComponent from '../../components/TextComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {useAppTheme} from '../../theme/ThemeContext';
import {fontScale} from '../../theme/fontScale';
import {fonts} from '../../theme/fonts';

const ProfileScreen: React.FC = () => {
  const {colors} = useAppTheme();
  const [showModal, setShowModal] = useState(false);
  const onPress = (screenName: keyof typeof screenNames) => {
    navigate(screenName);
  };

  const onClose = () => {
    setShowModal(false);
  };

  const onPressLogout = () => {
    setShowModal(!showModal);
  };

  const onPressConfirm = () => {
    navigate(screenNames.LoginScreen);
  };

  return (
    <Fragment>
      <Container screenName={screenNames.Profile}>
        <ProfilePicture topValue={topValue} />
        <CardComponent
          style={styles.cardStyle}
          scrollStyle={styles.scrollStyle}>
          <ProfileCard
            title={t(strings.profile.editProfile)}
            icon="profile"
            color="lightBlue"
            onPress={() => onPress('EditProfileScreen')}
          />
          <ProfileCard
            title={t(strings.profile.security)}
            icon="security"
            color="vividBlue"
            onPress={() => onPress('SecurityScreen')}
          />
          <ProfileCard
            title={t(strings.profile.setting)}
            icon="settings"
            color="oceanBlue"
            onPress={() => onPress('SettingScreen')}
          />
          <ProfileCard
            title={t(strings.profile.help)}
            icon="help"
            color="lightBlue"
            onPress={() => onPress('HelpScreen')}
          />
          <ProfileCard
            title={t(strings.profile.logout)}
            icon="logout"
            color="vividBlue"
            onPress={onPressLogout}
          />
        </CardComponent>
      </Container>
      <AppModal visible={showModal} onClose={onClose}>
        <Stack
          ph={20}
          pv={40}
          gap={30}
          style={[
            styles.modalContainer,
            {
              backgroundColor: colors.welcomeBg,
            },
          ]}>
          <TextComponent variant="title" align="center" disableLineHeight>
            {t(strings.profile.logTitle)}
          </TextComponent>
          <Stack alignItems="center" gap={10}>
            <ButtonComponent
              titleStyle={styles.buttonTitleStyle}
              title={t(strings.profile.logbtn)}
              buttonStyle={styles.buttonStyle}
              onPress={onPressConfirm}
            />
            <ButtonComponent
              bgColor="divider"
              buttonStyle={styles.buttonStyle}
              title={t(strings.common.cancel)}
              onPress={onClose}
              titleStyle={styles.buttonTitleStyle}
            />
          </Stack>
        </Stack>
      </AppModal>
    </Fragment>
  );
};

const topValue = scale(45);

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: topValue,
    paddingTop: scale(140),
    paddingHorizontal: scale(30),
  },
  scrollStyle: {
    gap: scale(20),
  },
  buttonStyle: {
    width: scale(200),
  },
  buttonTitleStyle: {
    fontSize: fontScale(13),
    fontFamily: fonts.regular,
  },
  modalContainer: {
    width: scale(270),
    borderRadius: scale(20),
  },
});

export default ProfileScreen;
