import React from 'react';
import {StyleSheet} from 'react-native';
import CardWithHeader from '../../components/CardWithHeader';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import TextComponent from '../../components/TextComponent';
import InputWithLabel from '../../components/InputWithLabel';
import ButtonComponent from '../../components/ButtonComponent';
import SocialMediaButtons from '../../components/SocialMediaButtons';
import HighlightTextComponent from '../../components/HighlightTextComponent';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';

const ForgotPasswordScreen: React.FC = () => {
  const onPressNextStep = () => {
    navigate(screenNames.SecurityPinScreen);
  };
  const onPressSignup = () => {
    navigate(screenNames.SignupScreen);
  };
  return (
    <CardWithHeader
      headerText={t(strings.common.forgotPasswordHeader)}
      cardStyle={styles.cardContainer}>
      <Stack gap={10}>
        <TextComponent variant="title" color="title">
          {t(strings.common.resetPassword)}
        </TextComponent>
        <TextComponent variant="subtext">
          {t(strings.common.resetPasswordText)}
        </TextComponent>
      </Stack>
      <Stack gap={35} mt={60}>
        <InputWithLabel
          leftMargin={false}
          label={t(strings.common.emailText)}
          placeholder={t(strings.common.emailPlaceholder)}
        />
        <ButtonComponent
          title={t(strings.common.nextStep)}
          buttonStyle={styles.buttonStyle}
          onPress={onPressNextStep}
        />
      </Stack>
      <Stack mt={110}>
        <ButtonComponent
          title={t(strings.common.signUp)}
          buttonStyle={styles.buttonStyle}
          bgColor="divider"
        />
        <Stack mt={40} alignItems="center" gap={18}>
          <SocialMediaButtons />
          <HighlightTextComponent
            variant="paragraph"
            text={t(strings.common.signupText)}
            highlight={t(strings.common.signuoHightlight)}
            fontSize={11}
            onPressHighlight={onPressSignup}
          />
        </Stack>
      </Stack>
    </CardWithHeader>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: scale(25),
    paddingTop: scale(60),
  },
  buttonStyle: {
    alignSelf: 'center',
    paddingVertical: scale(4),
    width: scale(130),
  },
});

export default ForgotPasswordScreen;
