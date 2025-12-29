import React from 'react';
import Container from '../../components/Container';
import {screenNames} from '../../utils/screenNames';
import TextComponent from '../../components/TextComponent';

const Transactions = () => {
  return (
    <Container screenName={screenNames.Transactions}>
      <TextComponent>Hello</TextComponent>
    </Container>
  );
};

export default Transactions;
