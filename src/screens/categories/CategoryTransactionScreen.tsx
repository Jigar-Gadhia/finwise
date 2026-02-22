import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Container from '../../components/Container';
import DashboardCounts from '../../components/DashboardCounts';
import CardComponent from '../../components/CardComponent';
import {scale} from 'react-native-size-matters';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../store/store';
import CategoryTransactionSectionList from '../../components/CategoryTransactionSectionList';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import {categoriesType, savingsData} from '../../utils/categoriesData';
import CategoryItem from '../../components/CategoryItem';
import {setSaving} from '../../store/slices/savingSlice';

const renderItem = ({
  item,
  onPress,
}: {
  item: categoriesType;
  onPress: (item: categoriesType) => void;
}) => {
  return (
    <CategoryItem
      item={item}
      onPress={() => onPress(item)}
      activeItem="travel"
    />
  );
};

const CategoryTransactionScreen: React.FC = () => {
  const {item} = useSelector((state: RootState) => state.transaction);
  const {name} = item;
  const dispatch = useDispatch();

  const onPressAdd = () => {
    navigate(screenNames.AddExpensesScreen);
  };

  const onPressItem = (item: categoriesType) => {
    dispatch(setSaving(item));
    navigate(screenNames.SavingScreen);
  };

  return (
    <Container screenName={name}>
      <DashboardCounts />
      <CardComponent style={styles.cardStyle} scroll={false}>
        {name === 'saving' ? (
          <FlatList
            data={savingsData}
            contentContainerStyle={styles.contentStyle}
            columnWrapperStyle={styles.columnWrapperStyle}
            numColumns={3}
            renderItem={({item}) => renderItem({item, onPress: onPressItem})}
            contentInset={{bottom: scale(120)}}
          />
        ) : (
          <CategoryTransactionSectionList
            transaction={item}
            onPressAdd={onPressAdd}
          />
        )}
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    marginTop: scale(15),
  },
  columnWrapperStyle: {
    justifyContent: 'flex-start',
    marginHorizontal: scale(10),
    alignItems: 'center',
    gap: scale(25),
  },
  contentStyle: {
    paddingHorizontal: scale(20),
    paddingTop: scale(25),
    gap: scale(25),
  },
});

export default CategoryTransactionScreen;
