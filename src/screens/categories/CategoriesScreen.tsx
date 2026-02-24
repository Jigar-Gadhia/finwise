import React, {Fragment, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
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
import Stack from '../../components/Stack';

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
      <AppModal visible={showModal} onClose={onPressMore}>
        <Stack
          ph={20}
          pv={30}
          gap={15}
          style={[
            styles.newCategoryContainer,
            {
              backgroundColor: colors.welcomeBg,
              shadowColor: colors.caribbeanGreen,
            },
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
            bgColor="divider"
            buttonStyle={styles.buttonStyle}
            title={t(strings.common.cancel)}
            onPress={onPressMore}
          />
        </Stack>
      </AppModal>
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
    width: '85%',
    borderRadius: scale(20),
    // shadowOffset: {
    //   width: 4,
    //   height: 4,
    // },
    // shadowOpacity: 0.6,
    // shadowRadius: 10,
    // elevation: 6,
  },
  buttonStyle: {
    alignSelf: 'center',
  },
  buttonTitleStyle: {
    fontSize: fontScale(15),
  },
});

export default CategoriesScreen;
