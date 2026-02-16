import React from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';
import Container from './Container';
import TextComponent from './TextComponent';
import CardComponent from './CardComponent';
import {fontScale} from '../theme/fontScale';

interface CardWithHeaderProps {
  headerText: string;
  children: React.ReactNode;
  cardStyle?: ViewStyle;
}

const CardWithHeader: React.FC<CardWithHeaderProps> = ({
  headerText,
  children,
  cardStyle,
}) => {
  return (
    <Container showHeader={false}>
      <View style={styles.textContainer}>
        <TextComponent
          variant="title"
          customLineHeight={39}
          style={styles.textStyles}>
          {headerText}
        </TextComponent>
      </View>
      <CardComponent scrollStyle={cardStyle}>{children}</CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    textAlign: 'center',
    fontSize: fontScale(30),
  },
});

export default CardWithHeader;
