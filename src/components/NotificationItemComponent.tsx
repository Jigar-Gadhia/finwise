import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NotificationItem} from '../utils/notificationsData';
import TextComponent from './TextComponent';
import IconComponent from './IconComponent';
import moment from 'moment';
import {scale} from 'react-native-size-matters';

interface NotificationItemProps {
  item: NotificationItem;
}

const NotificationItemComponent: React.FC<NotificationItemProps> = ({item}) => {
  const {description, icon, id, time, title, type, meta} = item;
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <IconComponent Icon={icon} height={37} width={37} />
        <View style={styles.colContainer}>
          <TextComponent variant="subtitle">{title}</TextComponent>
          <TextComponent variant="subtext" ellipsizeMode="tail">
            {description}
          </TextComponent>
          {meta && (
            <TextComponent variant="subtext" color="caribbeanGreen">
              {meta}
            </TextComponent>
          )}
        </View>
      </View>
      <View style={styles.dateContainer}>
        <TextComponent variant="paragraph" color="vividBlue">
          {moment(time).format('HH:MM - MMM DD')}
        </TextComponent>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(10),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    width: '85%',
    gap: scale(10),
  },
  colContainer: {
    gap: scale(5),
  },
  dateContainer: {
    alignItems: 'flex-end',
  },
});

export default NotificationItemComponent;
