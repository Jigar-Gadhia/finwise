import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import IconComponent from '../../components/IconComponent';
import TextComponent from '../../components/TextComponent';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import ButtonComponent from '../../components/ButtonComponent';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import {t} from '../../localization/t';
import Stack from '../../components/Stack';

const WelcomeScreen: React.FC = () => {
  const onPressLogin = () => {
    navigate(screenNames.LoginScreen);
  };
  const onPressSignup = () => {
    navigate(screenNames.SignupScreen);
  };
  const onPressForgotPassword = () => {
    navigate(screenNames.ForgotPasswordScreen);
  };
  return (
    <Container showHeader={false} style={styles.container} bgColor="welcomeBg">
      <Stack alignItems="center">
        <IconComponent Icon="welcomeImage" height={185} width={205} />
        <TextComponent
          variant="subtext"
          align="center"
          style={styles.welcomeTextStyle}>
          {strings.common.welcomeText}
        </TextComponent>
      </Stack>
      <Stack gap={10}>
        <ButtonComponent
          title={t(strings.common.login)}
          onPress={onPressLogin}
        />
        <Stack gap={8}>
          <ButtonComponent
            onPress={onPressSignup}
            title={t(strings.common.signUp)}
            bgColor="divider"
          />
          <TextComponent
            align="center"
            variant="title"
            disableLineHeight
            fontSize={12}
            onPress={onPressForgotPassword}>
            {t(strings.common.forgot)}
          </TextComponent>
        </Stack>
      </Stack>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: scale(30),
  },
  welcomeTextStyle: {
    width: scale(220),
  },
});

export default WelcomeScreen;
