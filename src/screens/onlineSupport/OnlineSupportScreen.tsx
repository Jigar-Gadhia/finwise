import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import Stack from '../../components/Stack';
import SupportCard from '../../components/SupportCard';
import moment from 'moment';
import TextComponent from '../../components/TextComponent';
import {scale} from 'react-native-size-matters';
import ButtonComponent from '../../components/ButtonComponent';
import {fontScale} from '../../theme/fontScale';
import {fonts} from '../../theme/fonts';
import {LightColors} from '../../theme/colors';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';

const OnlineSupportScreen: React.FC = () => {
  const supportArray = [
    {
      id: 1,
      title: 'help center',
      text: 'Your account is ready to use',
      date: moment().format('MMM DD - YYYY'),
    },
    {
      id: 2,
      title: 'support assistant',
      text: "Hello! I'm here to assist you",
      date: moment().format('MMM DD - YYYY'),
    },
    {
      id: 3,
      title: 'support assistant',
      text: "Hello! I'm here to assist you",
      date: moment().format('MMM DD - YYYY'),
    },
    {
      id: 4,
      title: 'help center',
      text: 'Your account is ready to use',
      date: moment().format('MMM DD - YYYY'),
    },
  ];

  const onPressCard = () => {
    navigate(screenNames.ChatScreen);
  };

  return (
    <Container screenName={t(strings.profile.onlineSup)}>
      <CardComponent scrollStyle={styles.scrollstyle}>
        <Stack mh={20} mt={40} gap={35}>
          <SupportCard
            title={t(strings.profile.supTitle)}
            text={t(strings.profile.supText)}
            date="2 min Ago"
            onPress={onPressCard}
          />
          <Stack gap={15}>
            <TextComponent variant="subtitle" capitalised>
              {t(strings.profile.ended)}
            </TextComponent>
            {supportArray.map(item => {
              return (
                <SupportCard
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  date={item.date}
                  onPress={onPressCard}
                />
              );
            })}
          </Stack>
        </Stack>
      </CardComponent>
      <ButtonComponent
        title={t(strings.profile.anotherChat)}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitleStyle}
        onPress={onPressCard}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollstyle: {
    paddingBottom: scale(170),
  },
  buttonStyle: {
    position: 'absolute',
    bottom: scale(122),
    zIndex: 1,
    alignSelf: 'center',
    width: scale(190),
    paddingVertical: scale(10),
    // iOS Shadow
    shadowColor: LightColors.staticBlack,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.15,
    shadowRadius: 8,

    // Android Shadow
    elevation: 4,
  },
  buttonTitleStyle: {
    fontSize: fontScale(14),
    fontFamily: fonts.regular,
  },
});

export default OnlineSupportScreen;
