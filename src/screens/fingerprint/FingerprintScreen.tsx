import React from 'react';
import {StyleSheet} from 'react-native';
import CardWithHeader from '../../components/CardWithHeader';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import ViewWithGap from '../../components/ViewWithGap';
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
      <ViewWithGap center gap={40}>
        <IconComponent Icon="fingerprint" height={175} width={175} />
        <ViewWithGap center gap={16}>
          <TextComponent variant="title" color="title" capitalised>
            {t(strings.common.finTitle)}
          </TextComponent>
          <TextComponent
            align="center"
            style={styles.textStyle}
            variant="subtitle"
            customLineHeight={16}
            capitalised>
            {t(strings.common.finText)}
          </TextComponent>
        </ViewWithGap>
        <ViewWithGap marginTop={10} fullWidth gap={25}>
          <ButtonComponent
            title={t(strings.common.touchId)}
            fullWidth
            bgColor="divider"
            onPress={onPressTouchId}
          />
          <TextComponent
            align="center"
            variant="paragraph"
            style={styles.pinTextStyle}>
            {t(strings.common.touchIdText)}
          </TextComponent>
        </ViewWithGap>
      </ViewWithGap>
    </CardWithHeader>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: scale(25),
    paddingTop: scale(80),
  },
  textStyle: {
    fontSize: scale(10),
  },
  pinTextStyle: {
    fontSize: scale(10),
  },
});

export default FingerprintScreen;
