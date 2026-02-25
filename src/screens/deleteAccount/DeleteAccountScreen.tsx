import React, {Fragment, useState} from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import {deleteAccountData} from '../../utils/deleteAccountData';
import TermsComponent from '../../components/TermsComponent';
import {LightColors} from '../../theme/colors';
import TextComponent from '../../components/TextComponent';
import InputWithLabel from '../../components/InputWithLabel';
import ButtonComponent from '../../components/ButtonComponent';
import AppModal from '../../components/AppModal';
import {useAppTheme} from '../../theme/ThemeContext';
import {goBack} from '../../utils/navigationService';

const DeleteAccountScreen: React.FC = () => {
  const {colors} = useAppTheme();
  const [showModal, setShowModal] = useState(false);

  const onClose = () => {
    setShowModal(false);
  };

  const onPressYes = () => {
    setShowModal(!showModal);
  };

  const onPressCancel = () => {
    goBack();
  };

  return (
    <Fragment>
      <Container screenName={t(strings.profile.delSetting)}>
        <CardComponent scrollStyle={styles.scrollStyle}>
          <Stack gap={20}>
            <TextComponent variant="subtitle" align="center">
              {t(strings.profile.deleteSure)}
            </TextComponent>
            <Stack
              gap={10}
              style={[
                styles.deleteCard,
                {backgroundColor: LightColors.divider},
              ]}>
              {deleteAccountData.map(item => {
                return (
                  <TermsComponent
                    color="staticBlack"
                    justify={false}
                    item={item}
                    key={item.id}
                    pointsGap
                  />
                );
              })}
            </Stack>
            <TextComponent variant="subtitle" align="center">
              {t(strings.profile.delpass)}
            </TextComponent>
            <InputWithLabel
              placeholder={t(strings.common.passwordPlaceholder)}
              password
            />
            <Stack alignItems="center" gap={10}>
              <ButtonComponent
                title={t(strings.profile.delBtn)}
                buttonStyle={styles.buttonStyle}
                onPress={onPressYes}
              />
              <ButtonComponent
                title={t(strings.common.cancel)}
                bgColor="divider"
                buttonStyle={styles.buttonStyle}
                onPress={onPressCancel}
              />
            </Stack>
          </Stack>
        </CardComponent>
      </Container>
      <AppModal visible={showModal} onClose={onClose}>
        <Stack
          ph={20}
          pv={40}
          gap={30}
          style={[
            styles.modalContainer,
            {
              backgroundColor: colors.welcomeBg,
            },
          ]}>
          <TextComponent variant="title" align="center" disableLineHeight>
            {t(strings.profile.delSetting)}
          </TextComponent>
          <Stack gap={30}>
            <TextComponent variant="subtitle" align="center" disableLineHeight>
              {t(strings.profile.deleteSure)}
            </TextComponent>
            <TextComponent variant="subtitle" align="center" disableLineHeight>
              {t(strings.profile.deleteSure2)}
            </TextComponent>
          </Stack>
          <Stack alignItems="center" gap={10}>
            <ButtonComponent
              titleStyle={styles.buttonStyle}
              title={t(strings.profile.delBtn)}
              buttonStyle={styles.buttonStyle}
              onPress={onPressYes}
            />
            <ButtonComponent
              bgColor="divider"
              buttonStyle={styles.buttonStyle}
              title={t(strings.common.cancel)}
              onPress={onClose}
            />
          </Stack>
        </Stack>
      </AppModal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    padding: scale(30),
  },
  deleteCard: {
    padding: scale(20),
    borderRadius: scale(18),
  },
  buttonStyle: {
    width: scale(218),
  },
  modalContainer: {
    width: scale(300),
    borderRadius: scale(20),
  },
});

export default DeleteAccountScreen;
