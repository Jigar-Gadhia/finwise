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

const SettingScreen: React.FC = () => {
  const onPress = (screenName: keyof typeof screenNames) => {
    navigate(screenName);
  };

  return (
    <Container screenName={t(strings.profile.setting)}>
      <CardComponent scrollStyle={styles.scrollStyle}>
        <Stack gap={15} mt={15}>
          <ProfileCard
            title={t(strings.profile.notiSetting)}
            icon="noti"
            arrow
            showBG={false}
            onPress={() => onPress('NotificationSettings')}
          />
          <ProfileCard
            title={t(strings.profile.passSetting)}
            icon="password"
            arrow
            showBG={false}
            onPress={() => onPress('PasswordSettings')}
          />
          <ProfileCard
            title={t(strings.profile.delSetting)}
            icon="account"
            arrow
            showBG={false}
            onPress={() => onPress('DeleteAccountScreen')}
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

export default SettingScreen;
