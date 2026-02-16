import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import IconComponent from '../../components/IconComponent';
import TextComponent from '../../components/TextComponent';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import ButtonComponent from '../../components/ButtonComponent';
import {fontScale} from '../../theme/fontScale';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import {t} from '../../localization/t';

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
    <Container showHeader={false} style={styles.container}>
      <View style={styles.iconContainer}>
        <IconComponent Icon="welcomeImage" height={185} width={205} />
        <TextComponent
          variant="subtext"
          align="center"
          style={styles.welcomeTextStyle}>
          {strings.common.welcomeText}
        </TextComponent>
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          title={t(strings.common.login)}
          onPress={onPressLogin}
        />
        <View style={styles.forgotContainer}>
          <ButtonComponent
            onPress={onPressSignup}
            title={t(strings.common.signUp)}
            bgColor="divider"
          />
          <TextComponent
            align="center"
            variant="title"
            disableLineHeight
            style={styles.forgotText}
            onPress={onPressForgotPassword}>
            {t(strings.common.forgot)}
          </TextComponent>
        </View>
      </View>
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
  iconContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    gap: scale(10),
  },
  forgotContainer: {
    gap: scale(8),
  },
  forgotText: {
    fontSize: fontScale(12),
  },
});

export default WelcomeScreen;
