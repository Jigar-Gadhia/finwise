import React from 'react';
import {StyleSheet} from 'react-native';
import CardWithHeader from '../../components/CardWithHeader';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import TextComponent from '../../components/TextComponent';
import ButtonComponent from '../../components/ButtonComponent';
import SocialMediaButtons from '../../components/SocialMediaButtons';
import HighlightTextComponent from '../../components/HighlightTextComponent';
import {goBack, navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import {fontScale} from '../../theme/fontScale';
import OTPInput from '../../components/OTPInput';

const SecurityPinScreen: React.FC = () => {
  const onPressAccept = () => {
    navigate(screenNames.NewPasswordScreen);
  };
  const onPressSendAgain = () => {
    goBack();
  };
  const onPressSignup = () => {
    navigate(screenNames.SignupScreen);
  };
  return (
    <CardWithHeader
      headerText={t(strings.common.securityPinHeader)}
      cardStyle={styles.cardContainer}>
      <Stack gap={40}>
        <TextComponent variant="title" align="center">
          {t(strings.common.securityPinText)}
        </TextComponent>
        <OTPInput />
      </Stack>
      <Stack gap={12} mt={60}>
        <ButtonComponent
          title={t(strings.common.accept)}
          buttonStyle={styles.buttonStyle}
          onPress={onPressAccept}
        />
        <ButtonComponent
          title={t(strings.common.sendAgain)}
          buttonStyle={styles.buttonStyle}
          bgColor="divider"
          onPress={onPressSendAgain}
        />
      </Stack>
      <Stack mt={140}>
        <TextComponent
          variant="paragraph"
          align="center"
          style={styles.forgotText}>
          {t(strings.common.signupWith)}
        </TextComponent>
        <Stack mt={10} alignItems="center" gap={18}>
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
  forgotText: {
    fontSize: fontScale(12),
  },
});

export default SecurityPinScreen;
