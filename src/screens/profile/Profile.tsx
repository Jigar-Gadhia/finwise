import React from 'react';
import Container from '../../components/Container';
import {screenNames} from '../../utils/screenNames';
import TextComponent from '../../components/TextComponent';

const Profile = () => {
  return (
    <Container screenName={screenNames.Profile}>
      <TextComponent>Hello</TextComponent>
    </Container>
  );
};

export default Profile;
