import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import ProfilePicture from '../../components/ProfilePicture';
import {scale} from 'react-native-size-matters';
import CardComponent from '../../components/CardComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import Stack from '../../components/Stack';
import TextComponent from '../../components/TextComponent';
import InputWithLabel from '../../components/InputWithLabel';
import SwitchComponent from '../../components/SwitchComponent';
import {useSharedValue} from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import switchTheme from 'react-native-theme-switch-animation';
import {toggleTheme} from '../../store/slices/themeSlice';
import ButtonComponent from '../../components/ButtonComponent';
import {fontScale} from '../../theme/fontScale';
import {fonts} from '../../theme/fonts';

const EditProfileScreen: React.FC = () => {
  const {mode} = useSelector((state: RootState) => state.theme);
  const isPushNoti = useSharedValue(false);
  const isDark = useSharedValue(mode === 'dark');
  const dispatch = useDispatch();

  const handlePressPushNoti = () => {
    isPushNoti.value = !isPushNoti.value;
  };
  const handlePressDark = () => {
    isDark.value = !isDark.value;
    switchTheme({
      switchThemeFunction: () => {
        dispatch(toggleTheme());
      },
      animationConfig: {
        type: 'circular',
        duration: 500,
        startingPoint: {
          cxRatio: 0.5,
          cyRatio: 0.5,
        },
      },
    });
  };
  return (
    <Container screenName={t(strings.profile.editMyProfile)}>
      <ProfilePicture topValue={topValue} showCamera showId />
      <CardComponent style={styles.cardStyle} scrollStyle={styles.scrollStyle}>
        <TextComponent variant="title" capitalised>
          {t(strings.profile.accountSettings)}
        </TextComponent>
        <Stack gap={15}>
          <InputWithLabel
            labelInputGap={5}
            bRadius={10}
            leftMargin={false}
            label={t(strings.profile.userName)}
            placeholder={t(strings.common.profileName)}
          />
          <InputWithLabel
            labelInputGap={5}
            bRadius={10}
            leftMargin={false}
            label={t(strings.profile.phone)}
            placeholder={t(strings.common.mobileNumberPlaceholder)}
          />
          <InputWithLabel
            labelInputGap={5}
            bRadius={10}
            leftMargin={false}
            label={t(strings.profile.emailAdd)}
            placeholder={t(strings.common.emailPlaceholder)}
          />
        </Stack>
        <Stack gap={20} mt={8}>
          <SwitchComponent
            value={isPushNoti}
            onPress={handlePressPushNoti}
            title={t(strings.profile.pushNoti)}
          />
          <SwitchComponent
            value={isDark}
            onPress={handlePressDark}
            title={t(strings.profile.dark)}
          />
        </Stack>
        <Stack alignItems="center">
          <ButtonComponent
            title={t(strings.profile.updatePro)}
            buttonStyle={styles.buttonStyle}
            titleStyle={styles.buttonTitleStyle}
          />
        </Stack>
      </CardComponent>
    </Container>
  );
};

const topValue = scale(45);

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: topValue,
    paddingTop: scale(120),
    paddingHorizontal: scale(30),
  },
  scrollStyle: {
    gap: scale(15),
  },
  buttonStyle: {
    width: scale(150),
    paddingVertical: scale(7),
  },
  buttonTitleStyle: {
    fontSize: fontScale(14),
    fontFamily: fonts.regular,
  },
});

export default EditProfileScreen;
