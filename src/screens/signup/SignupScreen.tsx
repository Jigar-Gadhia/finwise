import React from 'react';
import {StyleSheet} from 'react-native';
import TextComponent from '../../components/TextComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import ViewWithGap from '../../components/ViewWithGap';
import InputWithLabel from '../../components/InputWithLabel';
import ButtonComponent from '../../components/ButtonComponent';
import {fontScale} from '../../theme/fontScale';
import {scale} from 'react-native-size-matters';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import HighlightTextComponent from '../../components/HighlightTextComponent';
import CardWithHeader from '../../components/CardWithHeader';

const SignupScreen: React.FC = () => {
  const onPressSignup = () => {
    navigate(screenNames.Tab);
  };
  const onPressLogin = () => {
    navigate(screenNames.LoginScreen);
  };
  return (
    <CardWithHeader
      headerText={t(strings.common.signupHeader)}
      cardStyle={styles.cardContainer}>
      <ViewWithGap gap={15}>
        <InputWithLabel
          label={t(strings.common.fullName)}
          placeholder={t(strings.common.emailPlaceholder)}
        />
        <InputWithLabel
          label={t(strings.common.email)}
          placeholder={t(strings.common.emailPlaceholder)}
        />
        <InputWithLabel
          label={t(strings.common.mobileNumber)}
          placeholder={t(strings.common.mobileNumberPlaceholder)}
        />
        <InputWithLabel
          label={t(strings.common.dateOfBirth)}
          placeholder={t(strings.common.dateOfBirthPlaceholder)}
        />
        <InputWithLabel
          label={t(strings.common.password)}
          placeholder={t(strings.common.passwordPlaceholder)}
          password
        />
        <InputWithLabel
          label={t(strings.common.confirmPassword)}
          placeholder={t(strings.common.passwordPlaceholder)}
          password
        />
      </ViewWithGap>
      <ViewWithGap center gap={10} marginTop={20}>
        <TextComponent
          align="center"
          variant="subtitle"
          disableLineHeight
          style={styles.privacyText}>
          {t(strings.common.privacyPolicy)}
        </TextComponent>
        <ButtonComponent
          title={t(strings.common.signUp)}
          onPress={onPressSignup}
        />
        <HighlightTextComponent
          variant="paragraph"
          text={t(strings.common.loginText)}
          highlight={t(strings.common.loginHightlight)}
          fontSize={11}
          onPressHighlight={onPressLogin}
        />
      </ViewWithGap>
    </CardWithHeader>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: scale(25),
    paddingTop: scale(25),
  },
  privacyText: {
    fontSize: fontScale(12),
  },
});

export default SignupScreen;
