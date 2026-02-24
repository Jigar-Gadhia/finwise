import React, {memo} from 'react';
import {StyleSheet, SectionList, Platform} from 'react-native';
import CardComponent from './CardComponent';
import {notifications} from '../utils/notificationsData';
import NotificationItemComponent from './NotificationItemComponent';
import {scale} from 'react-native-size-matters';
import RowDevider from './RowDevider';
import TextComponent from './TextComponent';
import Stack from './Stack';

const Saparator = () => {
  return (
    <Stack mt={8} mb={20}>
      <RowDevider color="caribbeanGreen" />
    </Stack>
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
          <Stack mb={10}>
            <TextComponent variant="subtext" disableLineHeight>
              {section.title}
            </TextComponent>
          </Stack>
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
    paddingBottom: scale(Platform.OS === 'android' ? 110 : 0),
  },
  saparator: {
    marginTop: scale(8),
    marginBottom: scale(20),
  },
});

export default memo(NotificationList);
