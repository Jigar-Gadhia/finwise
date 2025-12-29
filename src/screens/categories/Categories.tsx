import React from 'react';
import Container from '../../components/Container';
import {screenNames} from '../../utils/screenNames';
import TextComponent from '../../components/TextComponent';

const Categories = () => {
  return (
    <Container screenName={screenNames.Categories}>
      <TextComponent>Hello</TextComponent>
    </Container>
  );
};

export default Categories;
