import React from 'react';
import {StyleSheet} from 'react-native';
import Stack from './Stack';
import ProfileCard from './ProfileCard';
import {t} from '../localization/t';
import {strings} from '../localization';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import {screenNames} from '../utils/screenNames';
import {navigate} from '../utils/navigationService';

const ContactUsComponent: React.FC = () => {
  const onPressCard = (screen: keyof typeof screenNames) => {
    navigate(screen);
  };
  return (
    <Animated.View entering={FadeIn} exiting={FadeOut} style={styles.container}>
      <Stack fullWidth ph={10} mt={50} gap={20}>
        <ProfileCard
          title={t(strings.profile.cserve)}
          arrow
          showBG={false}
          icon="CustomerService"
          onPress={() => onPressCard('OnlineSupportScreen')}
        />
        <ProfileCard
          title={t(strings.profile.web)}
          arrow
          showBG={false}
          icon="website"
        />
        <ProfileCard
          title={t(strings.profile.facebook)}
          arrow
          showBG={false}
          icon="ProfileFacebook"
        />
        <ProfileCard
          title={t(strings.profile.whatsapp)}
          arrow
          showBG={false}
          showImage
          image="profileWhatsapp"
        />
        <ProfileCard
          title={t(strings.profile.insta)}
          arrow
          showBG={false}
          showImage
          image="profileInsta"
        />
      </Stack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default ContactUsComponent;
