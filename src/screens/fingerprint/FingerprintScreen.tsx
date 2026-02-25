import React from 'react';
import {StyleSheet} from 'react-native';
import CardWithHeader from '../../components/CardWithHeader';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import IconComponent from '../../components/IconComponent';
import TextComponent from '../../components/TextComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';

const FingerprintScreen: React.FC = () => {
  const onPressTouchId = () => {
    navigate(screenNames.Tab);
  };
  return (
    <CardWithHeader
      headerText={t(strings.common.securityFin)}
      cardStyle={styles.cardContainer}>
      <Stack alignItems="center" gap={40}>
        <IconComponent Icon="fingerprint" height={175} width={175} />
        <Stack alignItems="center" gap={16}>
          <TextComponent variant="title" color="title" capitalised>
            {t(strings.common.finTitle)}
          </TextComponent>
          <TextComponent
            align="center"
            fontSize={10}
            variant="subtitle"
            lineHeight={16}
            capitalised>
            {t(strings.common.finText)}
          </TextComponent>
        </Stack>
        <Stack mt={10} fullWidth gap={25}>
          <ButtonComponent
            title={t(strings.common.touchId)}
            fullWidth
            bgColor="divider"
            onPress={onPressTouchId}
          />
          <TextComponent align="center" variant="paragraph" fontSize={10}>
            {t(strings.common.touchIdText)}
          </TextComponent>
        </Stack>
      </Stack>
    </CardWithHeader>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: scale(25),
    paddingTop: scale(80),
  },
});

export default FingerprintScreen;
