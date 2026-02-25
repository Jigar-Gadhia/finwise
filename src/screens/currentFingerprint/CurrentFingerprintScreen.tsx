import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import IconComponent from '../../components/IconComponent';
import Stack from '../../components/Stack';
import ButtonComponent from '../../components/ButtonComponent';
import {scale} from 'react-native-size-matters';

const CurrentFingerprintScreen: React.FC = () => {
  return (
    <Container screenName={t(strings.profile.johnFin)}>
      <CardComponent scrollStyle={styles.cardContainer}>
        <Stack alignItems="center" gap={40}>
          <IconComponent Icon="fingerprint" height={175} width={175} />
          <Stack mt={10} fullWidth gap={60} alignItems="center">
            <ButtonComponent
              title={t(strings.profile.johnFin)}
              fullWidth
              bgColor="divider"
            />
            <ButtonComponent title={t(strings.profile.delete)} />
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

export default CurrentFingerprintScreen;
