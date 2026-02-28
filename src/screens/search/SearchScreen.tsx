import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import Stack from '../../components/Stack';
import InputWithLabel from '../../components/InputWithLabel';
import IconComponent from '../../components/IconComponent';
import TextComponent from '../../components/TextComponent';
import ButtonComponent from '../../components/ButtonComponent';
import {scale} from 'react-native-size-matters';
import {fontScale} from '../../theme/fontScale';
import {categoriesData} from '../../utils/categoriesData';
import AnimatedDropdown from '../../components/AnimatedDropdown';
import moment from 'moment';
import {icons} from '../../utils/icons';
import CategoryTransactionItem from '../../components/CategoryTransactionItem';
import {useAppTheme} from '../../theme/ThemeContext';

const SearchScreen: React.FC = () => {
  const {colors} = useAppTheme();
  const categoryData = categoriesData.filter(item => item.name !== 'more');
  const [selected, setSelected] = useState('');
  const item = {
    amount: 26,
    timestamp: moment().toISOString(),
    icon: selected as keyof typeof icons,
    name: selected,
  };

  return (
    <Container screenName={t(strings.profile.searchPlaceholder)}>
      <Stack ph={25} mb={20}>
        <InputWithLabel
          placeholder={`${t(strings.profile.searchPlaceholder)}...`}
        />
      </Stack>
      <CardComponent>
        <Stack pt={40} ph={30}>
          <Stack gap={30} style={styles.cardStyle}>
            <AnimatedDropdown
              data={categoryData}
              title={t(strings.common.categories)}
              onSelect={setSelected}
            />
            <InputWithLabel
              label={t(strings.common.date)}
              leftMargin={false}
              placeholder={t(strings.common.datePlaceholder2)}
              isDate
              fontSize={13}
            />
            <Stack mt={20} gap={40}>
              <Stack row gap={40}>
                <Stack row alignItems="center" gap={10}>
                  <IconComponent Icon="radioUnchecked" height={20} width={20} />
                  <TextComponent fontSize={16} capitalised>
                    {t(strings.common.income)}
                  </TextComponent>
                </Stack>
                <Stack row alignItems="center" gap={10}>
                  <IconComponent Icon="radioChecked" height={20} width={20} />
                  <TextComponent fontSize={16} capitalised>
                    {t(strings.common.expense)}
                  </TextComponent>
                </Stack>
              </Stack>
              <ButtonComponent
                titleStyle={styles.titleStyle}
                buttonStyle={styles.buttonStyle}
                title={t(strings.profile.searchPlaceholder)}
              />
              {selected && (
                <Stack
                  style={[
                    styles.transactionContainer,
                    {backgroundColor: colors.tab},
                  ]}>
                  <CategoryTransactionItem
                    amount={item.amount}
                    icon={selected as keyof typeof icons}
                    name={selected}
                    timestamp={item.timestamp}
                  />
                </Stack>
              )}
            </Stack>
          </Stack>
        </Stack>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    zIndex: -1,
  },
  buttonStyle: {
    paddingVertical: scale(6),
    width: scale(160),
    alignSelf: 'center',
  },
  titleStyle: {
    fontSize: fontScale(15),
  },
  transactionContainer: {
    padding: scale(10),
    borderRadius: scale(18),
  },
});

export default SearchScreen;
