import React from 'react';
import {StyleSheet} from 'react-native';
import CardWithHeader from '../../components/CardWithHeader';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import InputWithLabel from '../../components/InputWithLabel';
import ButtonComponent from '../../components/ButtonComponent';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';

const NewPasswordScreen: React.FC = () => {
  const onPressChangePassword = () => {
    navigate(screenNames.LoginScreen);
  };
  return (
    <CardWithHeader
      headerText={t(strings.common.newPassword)}
      cardStyle={styles.cardContainer}>
      <Stack gap={140}>
        <Stack gap={30}>
          <InputWithLabel
            leftMargin={false}
            label={t(strings.common.newPassword)}
            password
            placeholder={t(strings.common.passwordPlaceholder)}
          />
          <InputWithLabel
            leftMargin={false}
            label={t(strings.common.confirmNewPassword)}
            password
            placeholder={t(strings.common.passwordPlaceholder)}
          />
        </Stack>
        <ButtonComponent
          title={t(strings.common.changePassword)}
          buttonStyle={styles.buttonComponent}
          onPress={onPressChangePassword}
        />
      </Stack>
    </CardWithHeader>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: scale(25),
    paddingTop: scale(60),
  },
  buttonComponent: {
    width: '100%',
  },
});

export default NewPasswordScreen;
