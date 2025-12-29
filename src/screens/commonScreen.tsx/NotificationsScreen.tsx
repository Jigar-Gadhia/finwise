import React from 'react';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import NotificationList from '../../components/NotificationList';

const NotificationsScreen: React.FC = () => {
  return (
    <Container screenName={t(strings.screenHeaders.notifications)} showNoti>
      <NotificationList />
    </Container>
  );
};

export default NotificationsScreen;
