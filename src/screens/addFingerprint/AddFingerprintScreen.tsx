import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import IconComponent from '../../components/IconComponent';
import Stack from '../../components/Stack';
import ButtonComponent from '../../components/ButtonComponent';
import TextComponent from '../../components/TextComponent';
import {scale} from 'react-native-size-matters';

const AddFingerprintScreen: React.FC = () => {
  return (
    <Container screenName={t(strings.profile.addFin)}>
      <CardComponent scrollStyle={styles.cardContainer}>
        <Stack alignItems="center" gap={40}>
          <IconComponent Icon="fingerprint" height={175} width={175} />
          <Stack alignItems="center" gap={16}>
            <TextComponent variant="title" capitalised>
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
          <Stack mt={10} fullWidth gap={60} alignItems="center">
            <ButtonComponent
              title={t(strings.common.touchId)}
              fullWidth
              bgColor="divider"
            />
          </Stack>
        </Stack>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: scale(25),
    paddingTop: scale(80),
  },
});

export default AddFingerprintScreen;
