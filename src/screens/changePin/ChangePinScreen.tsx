import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import InputWithLabel from '../../components/InputWithLabel';
import Stack from '../../components/Stack';
import ButtonComponent from '../../components/ButtonComponent';
import {fontScale} from '../../theme/fontScale';
import {goBack} from '../../utils/navigationService';

const ChangePinScreen: React.FC = () => {
  const onPressChnagePin = () => {
    goBack();
  };

  return (
    <Container screenName={t(strings.profile.changePin)}>
      <CardComponent scrollStyle={styles.scrollStyle}>
        <Stack gap={25} alignItems="center" mt={15}>
          <InputWithLabel
            label={t(strings.profile.cpin)}
            placeholder={t(strings.profile.pinPlaceholder)}
            lessMargin
            password
            leftMargin={false}
          />
          <InputWithLabel
            label={t(strings.profile.npin)}
            placeholder={t(strings.profile.pinPlaceholder)}
            lessMargin
            password
            leftMargin={false}
          />
          <InputWithLabel
            label={t(strings.profile.conpin)}
            placeholder={t(strings.profile.pinPlaceholder)}
            lessMargin
            password
            leftMargin={false}
          />
          <ButtonComponent
            title={t(strings.profile.changePin)}
            buttonStyle={styles.btnStyle}
            titleStyle={styles.btnTitleStyle}
            onPress={onPressChnagePin}
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
  btnStyle: {
    marginTop: scale(15),
  },
  btnTitleStyle: {
    fontSize: fontScale(15),
  },
});

export default ChangePinScreen;
