import React from 'react';
import {StyleSheet} from 'react-native';
import TextComponent from '../../components/TextComponent';
import {strings} from '../../localization';
import {fontScale} from '../../theme/fontScale';
import InputWithLabel from '../../components/InputWithLabel';
import {scale} from 'react-native-size-matters';
import ViewWithGap from '../../components/ViewWithGap';
import ButtonComponent from '../../components/ButtonComponent';
import {t} from '../../localization/t';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import HighlightTextComponent from '../../components/HighlightTextComponent';
import CardWithHeader from '../../components/CardWithHeader';
import SocialMediaButtons from '../../components/SocialMediaButtons';

const LoginScreen: React.FC = () => {
  const onPressLogin = () => {
    navigate(screenNames.Tab);
  };
  const onPressSignup = () => {
    navigate(screenNames.SignupScreen);
  };
  const onPressForgotPassword = () => {
    navigate(screenNames.ForgotPasswordScreen);
  };
  const onPressFingerprint = () => {
    navigate(screenNames.FingerprintScreen);
  };
  return (
    <CardWithHeader
      headerText={t(strings.common.welcomeHeader)}
      cardStyle={styles.cardContainer}>
      <ViewWithGap gap={15}>
        <InputWithLabel
          label={t(strings.common.userName)}
          placeholder={t(strings.common.emailPlaceholder)}
        />
        <InputWithLabel
          label={t(strings.common.password)}
          placeholder={t(strings.common.passwordPlaceholder)}
          password
        />
      </ViewWithGap>
      <ViewWithGap center gap={10} marginTop={60}>
        <ButtonComponent
          title={t(strings.common.login)}
          onPress={onPressLogin}
        />
        <TextComponent
          disableLineHeight
          variant="title"
          style={styles.forgotText}
          onPress={onPressForgotPassword}>
          {t(strings.common.forgot)}
        </TextComponent>
        <ViewWithGap gap={16}>
          <ButtonComponent
            title={t(strings.common.signUp)}
            bgColor="divider"
            onPress={onPressSignup}
          />
          <HighlightTextComponent
            text={t(strings.common.fingerprintText)}
            highlight={t(strings.common.fingerprintHightlight)}
            onPressHighlight={onPressFingerprint}
          />
        </ViewWithGap>
        <ViewWithGap gap={12} marginTop={10}>
          <TextComponent
            variant="paragraph"
            align="center"
            style={styles.forgotText}>
            {t(strings.common.signupWith)}
          </TextComponent>
          <ViewWithGap gap={20}>
            <SocialMediaButtons />
            <HighlightTextComponent
              variant="paragraph"
              text={t(strings.common.signupText)}
              highlight={t(strings.common.signuoHightlight)}
              fontSize={11}
              onPressHighlight={onPressSignup}
            />
          </ViewWithGap>
        </ViewWithGap>
      </ViewWithGap>
    </CardWithHeader>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: scale(25),
    paddingTop: scale(60),
  },
  forgotText: {
    fontSize: fontScale(12),
  },
});

export default LoginScreen;
