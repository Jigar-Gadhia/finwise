import React from 'react';
import {View, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import InputWithLabel from '../../components/InputWithLabel';
import {priceFormat} from '../../utils/utils';
import ButtonComponent from '../../components/ButtonComponent';
import {fontScale} from '../../theme/fontScale';
import {fonts} from '../../theme/fonts';
import {goBack} from '../../utils/navigationService';

const AddExpensesScreen: React.FC = () => {
  const onPressSave = () => {
    goBack();
  };
  return (
    <Container screenName={t(strings.common.addExpense)}>
      <CardComponent scrollStyle={styles.scrollStyle}>
        <View style={styles.inputContainer}>
          <InputWithLabel
            value={t(strings.common.datePlaceholder)}
            label={t(strings.common.date)}
            isDate
            lessMargin
            labelInputGap={1}
          />
          <InputWithLabel
            isDropDown
            placeholder={t(strings.common.categoryPlaceholder)}
            lessMargin
            label={t(strings.common.category)}
            labelInputGap={1}
          />
          <InputWithLabel
            label={t(strings.common.amount)}
            lessMargin
            value={priceFormat().format(28)}
            labelInputGap={1}
          />
          <InputWithLabel
            label={t(strings.common.expenseTitle)}
            lessMargin
            value={t(strings.common.expenseTitleValue)}
            labelInputGap={1}
          />
          <InputWithLabel
            multiLine
            placeholder={t(strings.common.messagePlaceholder)}
            lessMargin
            marginTop={scale(10)}
          />
          <ButtonComponent
            buttonStyle={styles.buttonStyle}
            title={t(strings.common.save)}
            titleStyle={styles.buttonTitleStyle}
            onPress={onPressSave}
          />
        </View>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  scrollStyle: {
    paddingHorizontal: scale(35),
    paddingTop: scale(20),
  },
  inputContainer: {
    gap: scale(20),
  },
  buttonStyle: {
    alignSelf: 'center',
    width: scale(130),
    paddingVertical: scale(6),
    marginTop: scale(10),
  },
  buttonTitleStyle: {
    fontSize: fontScale(13),
    fontFamily: fonts.regular,
  },
});

export default AddExpensesScreen;
