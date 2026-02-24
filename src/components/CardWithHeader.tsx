import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import Container from './Container';
import TextComponent from './TextComponent';
import CardComponent from './CardComponent';
import {fontScale} from '../theme/fontScale';
import Stack from './Stack';

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
      <Stack
        alignItems="center"
        justifyContent="center"
        style={styles.textContainer}>
        <TextComponent
          variant="title"
          lineHeight={39}
          style={styles.textStyles}>
          {headerText}
        </TextComponent>
      </Stack>
      <CardComponent scrollStyle={cardStyle}>{children}</CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: '15%',
  },
  textStyles: {
    textAlign: 'center',
    fontSize: fontScale(30),
  },
});

export default CardWithHeader;
