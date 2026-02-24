import React from 'react';
import {StyleSheet} from 'react-native';
import {NotificationItem} from '../utils/notificationsData';
import TextComponent from './TextComponent';
import IconComponent from './IconComponent';
import moment from 'moment';
import Stack from './Stack';

interface NotificationItemProps {
  item: NotificationItem;
}

const NotificationItemComponent: React.FC<NotificationItemProps> = ({item}) => {
  const {description, icon, time, title, meta} = item;
  return (
    <Stack gap={10}>
      <Stack row alignItems="flex-start" gap={10} style={styles.rowContainer}>
        <IconComponent Icon={icon} height={32} width={32} />
        <Stack gap={5}>
          <TextComponent variant="subtitle">{title}</TextComponent>
          <TextComponent variant="subtext" ellipsizeMode="tail" lineHeight={14}>
            {description}
          </TextComponent>
          {meta && (
            <TextComponent
              variant="subtext"
              color="caribbeanGreen"
              disableLineHeight>
              {meta}
            </TextComponent>
          )}
        </Stack>
      </Stack>
      <Stack alignItems="flex-end">
        <TextComponent variant="paragraph" color="vividBlue">
          {moment(time).format('HH:MM - MMM DD')}
        </TextComponent>
      </Stack>
    </Stack>
  );
};

const styles = StyleSheet.create({
  rowContainer: {
    width: '85%',
  },
});

export default NotificationItemComponent;
