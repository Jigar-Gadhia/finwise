import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import {TERMS} from '../../utils/terms';
import TermsComponent from '../../components/TermsComponent';
import Stack from '../../components/Stack';
import {scale} from 'react-native-size-matters';
import TextComponent from '../../components/TextComponent';
import IconComponent from '../../components/IconComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {goBack} from '../../utils/navigationService';

const TntScreen: React.FC = () => {
  const onPressAccept = () => {
    goBack();
  };

  return (
    <Container screenName={t(strings.profile.tnc)}>
      <CardComponent scrollStyle={styles.scrollStyle}>
        <Stack gap={5}>
          {TERMS.map((item, index) => {
            return <TermsComponent key={index} item={item} />;
          })}
        </Stack>
        <Stack mt={5}>
          <TextComponent fontSize={12}>
            {t(strings.profile.tntRead)}
          </TextComponent>
          <TextComponent fontSize={12} underLine color="vividBlue">
            {t(strings.profile.tntLink)}
          </TextComponent>
        </Stack>
        <Stack row gap={10} mt={15}>
          <IconComponent Icon="boxChecked" height={18} width={18} />
          <TextComponent fontSize={13}>
            {t(strings.profile.tntCheck)}
          </TextComponent>
        </Stack>
        <Stack alignItems="center" mt={15}>
          <ButtonComponent
            title={t(strings.profile.accept)}
            onPress={onPressAccept}
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
});

export default TntScreen;
