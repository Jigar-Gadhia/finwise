import React from 'react';
import {StyleSheet} from 'react-native';
import CardWithHeader from '../../components/CardWithHeader';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import ViewWithGap from '../../components/ViewWithGap';
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
      <ViewWithGap gap={10}>
        <TextComponent variant="title" color="title">
          {t(strings.common.resetPassword)}
        </TextComponent>
        <TextComponent variant="subtext">
          {t(strings.common.resetPasswordText)}
        </TextComponent>
      </ViewWithGap>
      <ViewWithGap gap={35} marginTop={60}>
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
      </ViewWithGap>
      <ViewWithGap marginTop={110}>
        <ButtonComponent
          title={t(strings.common.signUp)}
          buttonStyle={styles.buttonStyle}
          bgColor="divider"
        />
        <ViewWithGap marginTop={40} center gap={18}>
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
