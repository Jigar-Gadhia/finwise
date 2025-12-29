import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {t} from '../localization/t';
import {strings} from '../localization';
import IconComponent from './IconComponent';
import {goBack, navigate} from '../utils/navigationService';
import {screenNames} from '../utils/screenNames';

interface ScreenHeaderProps {
  name?: string;
  home?: boolean;
  showNoti?: boolean;
}

const ScreenHeader: React.FC<ScreenHeaderProps> = ({
  name,
  home = false,
  showNoti = false,
}) => {
  const onPressNotificationIcon = () => {
    navigate(screenNames.NotificationsScreen);
  };
  return (
    <React.Fragment>
      <View style={[styles.container, home && styles.homeContainer]}>
        {home ? (
          <View>
            <TextComponent variant="title" color="screenTitle">
              {t(strings.greetings.welcomeBack)}
            </TextComponent>
            <TextComponent variant="subtext" color="screenTitle">
              {t(strings.greetings.goodMorning)}
            </TextComponent>
          </View>
        ) : (
          <React.Fragment>
            <TouchableOpacity onPress={goBack}>
              <IconComponent
                Icon="backArrow"
                height={scale(22)}
                width={scale(22)}
              />
            </TouchableOpacity>
            <TextComponent variant="title" color="screenTitle">
              {name}
            </TextComponent>
          </React.Fragment>
        )}
        <TouchableOpacity onPress={onPressNotificationIcon} disabled={showNoti}>
          <IconComponent
            Icon={showNoti ? 'notiActive' : 'notiInactive'}
            height={30}
            width={30}
          />
        </TouchableOpacity>
      </View>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: scale(25),
    paddingHorizontal: scale(15),
  },
  homeContainer: {
    alignItems: 'flex-start',
  },
});

export default ScreenHeader;
