import React from 'react';
import {View, StyleSheet, SectionList} from 'react-native';
import CardComponent from './CardComponent';
import {notifications} from '../utils/notificationsData';
import NotificationItemComponent from './NotificationItemComponent';
import {scale} from 'react-native-size-matters';
import RowDevider from './RowDevider';
import TextComponent from './TextComponent';

const Saparator = () => {
  return (
    <View style={styles.saparator}>
      <RowDevider color="caribbeanGreen" />
    </View>
  );
};

const NotificationList: React.FC = () => {
  const sections = [
    {title: 'Today', data: notifications.today},
    {title: 'Yesterday', data: notifications.yesterday},
    {title: 'This Weekend', data: notifications.weekend},
  ];

  return (
    <CardComponent scroll={false}>
      <SectionList
        sections={sections}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.container}
        renderItem={({item}) => {
          return <NotificationItemComponent item={item} />;
        }}
        renderSectionHeader={({section}) => (
          <View style={styles.sectionHeaderStyle}>
            <TextComponent variant="subtext" disableLineHeight>
              {section.title}
            </TextComponent>
          </View>
        )}
        stickySectionHeadersEnabled={false}
        renderSectionFooter={Saparator}
        ItemSeparatorComponent={Saparator}
        contentInset={{bottom: scale(120)}}
      />
    </CardComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: scale(25),
    paddingHorizontal: scale(25),
    paddingBottom: scale(110),
  },
  sectionHeaderStyle: {
    marginBottom: scale(10),
  },
  saparator: {
    marginTop: scale(8),
    marginBottom: scale(20),
  },
});

export default NotificationList;
