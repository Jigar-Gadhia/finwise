import {TouchableOpacity} from 'react-native';
import React from 'react';
import TextComponent from './TextComponent';
import {t} from '../localization/t';
import {strings} from '../localization';
import IconComponent from './IconComponent';
import {goBack, navigate} from '../utils/navigationService';
import {screenNames} from '../utils/screenNames';
import Stack from './Stack';

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
      <Stack
        row
        justifyContent="space-between"
        alignItems={home ? 'flex-start' : 'center'}
        p={25}>
        {home ? (
          <Stack>
            <TextComponent variant="title" color="screenTitle">
              {t(strings.greetings.welcomeBack)}
            </TextComponent>
            <TextComponent variant="subtext" color="screenTitle">
              {t(strings.greetings.goodMorning)}
            </TextComponent>
          </Stack>
        ) : (
          <React.Fragment>
            <TouchableOpacity onPress={goBack}>
              <IconComponent Icon="backArrow" height={18} width={18} />
            </TouchableOpacity>
            <TextComponent
              variant="title"
              color="screenTitle"
              disableLineHeight
              capitalised>
              {name}
            </TextComponent>
          </React.Fragment>
        )}
        <TouchableOpacity onPress={onPressNotificationIcon} disabled={showNoti}>
          <IconComponent
            Icon={showNoti ? 'notiActive' : 'notiInactive'}
            height={28}
            width={28}
          />
        </TouchableOpacity>
      </Stack>
    </React.Fragment>
  );
};

export default ScreenHeader;
