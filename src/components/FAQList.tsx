import React, {FC, memo} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';
import FAQItem from './FAQItem';

type faqType = {
  id: number;
  name: string;
  expanded: boolean;
};

interface FAQListProps {
  data: faqType[];
  onPressArrow: (item: faqType) => void;
  colors: any;
}

const FAQList: FC<FAQListProps> = ({data, onPressArrow, colors}) => {
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.container}
      initialNumToRender={10}
      windowSize={10}
      maxToRenderPerBatch={10}
      renderItem={({item}) => (
        <FAQItem item={item} onPress={onPressArrow} colors={colors} />
      )}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: scale(25),
    gap: scale(20),
  },
});

export default memo(FAQList);
