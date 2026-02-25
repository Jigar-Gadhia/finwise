import React from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import SwitchComponent from '../../components/SwitchComponent';
import {useSharedValue} from 'react-native-reanimated';

type SwitchItem = {
  id: string;
  title: string;
  value: ReturnType<typeof useSharedValue<boolean>>;
};

const SettingScreen: React.FC = () => {
  const switches: SwitchItem[] = [
    {
      id: 'genNoti',
      title: t(strings.profile.genNoti),
      value: useSharedValue(true),
    },
    {
      id: 'soundNoti',
      title: t(strings.profile.soundNoti),
      value: useSharedValue(true),
    },
    {
      id: 'soundCallNoti',
      title: t(strings.profile.soundCallNoti),
      value: useSharedValue(true),
    },
    {
      id: 'vibrateNoti',
      title: t(strings.profile.vibrateNoti),
      value: useSharedValue(true),
    },
    {
      id: 'transactionNoti',
      title: t(strings.profile.transactionNoti),
      value: useSharedValue(false),
    },
    {
      id: 'expenseNoti',
      title: t(strings.profile.expenseNoti),
      value: useSharedValue(false),
    },
    {
      id: 'budgetNoti',
      title: t(strings.profile.budgetNoti),
      value: useSharedValue(false),
    },
    {
      id: 'lowNoti',
      title: t(strings.profile.lowNoti),
      value: useSharedValue(false),
    },
  ];

  const toggleSwitch = (switchItem: SwitchItem) => {
    switchItem.value.value = !switchItem.value.value;
  };

  return (
    <Container screenName={t(strings.profile.notiSetting)}>
      <CardComponent scrollStyle={styles.scrollStyle}>
        <Stack gap={25} mt={20} mh={10}>
          {switches.map(item => (
            <SwitchComponent
              key={item.id}
              title={item.title}
              value={item.value}
              onPress={() => toggleSwitch(item)}
            />
          ))}
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

export default SettingScreen;
