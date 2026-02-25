import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import TextComponent from '../../components/TextComponent';
import Stack from '../../components/Stack';
import ProfileCard from '../../components/ProfileCard';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';

const SecurityScreen: React.FC = () => {
  const onPress = (screenName: keyof typeof screenNames) => {
    navigate(screenName);
  };

  return (
    <Container screenName={t(strings.profile.security)}>
      <CardComponent scrollStyle={styles.scrollStyle}>
        <TextComponent variant="title">
          {t(strings.profile.security)}
        </TextComponent>
        <Stack gap={20} mt={30}>
          <ProfileCard
            showIcon={false}
            showDivider
            title={t(strings.profile.changePin)}
            arrow
            onPress={() => onPress('ChangePinScreen')}
          />
          <ProfileCard
            showIcon={false}
            showDivider
            title={t(strings.common.fingerprintHightlight)}
            arrow
            onPress={() => onPress('ProfileFingerprintScreen')}
          />
          <ProfileCard
            showIcon={false}
            showDivider
            title={t(strings.profile.tnc)}
            arrow
            onPress={() => onPress('TntScreen')}
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

export default SecurityScreen;
