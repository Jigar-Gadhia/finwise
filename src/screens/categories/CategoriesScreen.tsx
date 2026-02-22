import React, {Fragment, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Container from '../../components/Container';
import {screenNames} from '../../utils/screenNames';
import DashboardCounts from '../../components/DashboardCounts';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import {categoriesData, categoriesType} from '../../utils/categoriesData';
import CategoryItem from '../../components/CategoryItem';
import AppModal from '../../components/AppModal';
import {useAppTheme} from '../../theme/ThemeContext';
import TextComponent from '../../components/TextComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import InputWithLabel from '../../components/InputWithLabel';
import ButtonComponent from '../../components/ButtonComponent';
import {fontScale} from '../../theme/fontScale';
import {setTransaction} from '../../store/slices/transactionSlice';
import {navigate} from '../../utils/navigationService';
import {useDispatch} from 'react-redux';

const renderItem = ({
  item,
  onPress,
}: {
  item: categoriesType;
  onPress: (item: categoriesType) => void;
}) => {
  return (
    <CategoryItem item={item} onPress={() => onPress(item)} activeItem="food" />
  );
};

const CategoriesScreen: React.FC = () => {
  const {colors} = useAppTheme();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState<boolean>(false);
  const onPressMore = () => {
    setShowModal(prev => !prev);
  };
  const onPressItem = (item: categoriesType) => {
    if (item.name === 'more') {
      onPressMore();
    } else {
      dispatch(setTransaction(item));
      navigate(screenNames.CategoryTransactionScreen);
    }
  };
  return (
    <Fragment>
      <Container screenName={screenNames.Categories}>
        <DashboardCounts />
        <CardComponent style={styles.cardStyle} scroll={false}>
          <FlatList
            data={categoriesData}
            contentContainerStyle={styles.contentStyle}
            columnWrapperStyle={styles.columnWrapperStyle}
            numColumns={3}
            renderItem={({item}) => renderItem({item, onPress: onPressItem})}
            contentInset={{bottom: scale(120)}}
          />
        </CardComponent>
      </Container>
      <AppModal visible={showModal} onClose={onPressMore}>
        <View
          style={[
            styles.newCategoryContainer,
            {backgroundColor: colors.background},
          ]}>
          <TextComponent variant="title" align="center" disableLineHeight>
            {t(strings.common.newCat)}
          </TextComponent>
          <InputWithLabel
            lessMargin
            placeholder={t(strings.common.newCatPlaceholder)}
          />
          <ButtonComponent
            titleStyle={styles.buttonTitleStyle}
            title={t(strings.common.save)}
            buttonStyle={styles.buttonStyle}
            onPress={onPressMore}
          />
          <ButtonComponent
            titleStyle={styles.buttonTitleStyle}
            bgColor="amountPositive"
            buttonStyle={styles.buttonStyle}
            title={t(strings.common.cancel)}
            onPress={onPressMore}
          />
        </View>
      </AppModal>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: scale(15),
  },
  columnWrapperStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contentStyle: {
    paddingHorizontal: scale(20),
    paddingTop: scale(25),
    gap: scale(25),
  },
  newCategoryContainer: {
    paddingHorizontal: scale(20),
    paddingVertical: scale(30),
    borderRadius: scale(20),
    width: '80%',
    gap: scale(15),
  },
  buttonStyle: {
    alignSelf: 'center',
  },
  buttonTitleStyle: {
    fontSize: fontScale(15),
  },
});

export default CategoriesScreen;
