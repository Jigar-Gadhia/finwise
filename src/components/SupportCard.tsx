import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Stack from './Stack';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {scale} from 'react-native-size-matters';
import {LightColors} from '../theme/colors';
import {useAppTheme} from '../theme/ThemeContext';

interface SupportCardProps {
  title: string;
  text: string;
  date: string;
  onPress: () => void;
}

const SupportCard: React.FC<SupportCardProps> = ({
  title,
  text,
  date,
  onPress,
}) => {
  const {colors} = useAppTheme();
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <Stack
        row
        justifyContent="space-between"
        style={[styles.constainer, {backgroundColor: colors.tab}]}>
        <Stack row gap={5} m={4} style={styles.supportContainer}>
          <IconComponent Icon="CustomerService" height={45} width={45} />
          <Stack>
            <Stack gap={5}>
              <TextComponent variant="subtitle" capitalised>
                {title}
              </TextComponent>
              <TextComponent numberOfLines={1} variant="paragraph">
                {text}
              </TextComponent>
            </Stack>
            <TextComponent />
          </Stack>
        </Stack>
        <Stack justifyContent="flex-end">
          <Stack style={styles.dateBG}>
            <TextComponent
              variant="paragraph"
              align="center"
              fontSize={12}
              color="staticBlack">
              {date}
            </TextComponent>
          </Stack>
        </Stack>
      </Stack>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  constainer: {
    borderRadius: scale(14),
    padding: scale(8),
  },
  supportContainer: {
    width: '69%',
  },
  dateBG: {
    paddingHorizontal: scale(6),
    paddingVertical: scale(1),
    backgroundColor: LightColors.staticWhite,
    borderRadius: scale(15),
  },
});

export default SupportCard;
