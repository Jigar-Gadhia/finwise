import React, {memo, useCallback, useMemo, useState} from 'react';
import {StyleSheet} from 'react-native';
import Stack from './Stack';
import FilterComponent from './FilterComponent';
import {FAQFilterData} from '../utils/FAQFilterData';
import {scale} from 'react-native-size-matters';
import Animated, {FadeIn, FadeOut} from 'react-native-reanimated';
import InputWithLabel from './InputWithLabel';
import {t} from '../localization/t';
import {strings} from '../localization';
import {useAppTheme} from '../theme/ThemeContext';
import FAQList from './FAQList';

type faqType = {
  id: number;
  name: string;
  expanded: boolean;
};

const FAQTab: React.FC = () => {
  const {colors} = useAppTheme();
  const [currentTab, setCurrentTab] = useState('General');
  const [updatedFaqs, setUpdatedFaqs] = useState(
    useMemo(
      () => [
        {id: 1, name: 'How to use FinWise?', expanded: false},
        {id: 2, name: 'How much does it cost to use FinWise?', expanded: false},
        {id: 3, name: 'How to contact support?', expanded: false},
        {
          id: 4,
          name: 'How can I reset my password if I forget it?',
          expanded: false,
        },
        {
          id: 5,
          name: 'Are there any privacy or data security measures in place?',
          expanded: false,
        },
        {
          id: 6,
          name: 'Can I customise settings within the application?',
          expanded: false,
        },
        {id: 7, name: 'How can I delete my account?', expanded: false},
        {id: 8, name: 'How do I access my expense history?', expanded: false},
        {id: 9, name: 'Can I use the app offline?', expanded: false},
      ],
      [],
    ),
  );

  const onPressTab = useCallback((filter: string) => {
    setCurrentTab(filter);
  }, []);

  const onPressArrow = useCallback((item: faqType) => {
    setUpdatedFaqs(prev =>
      prev.map(faq =>
        faq.id === item.id ? {...faq, expanded: !faq.expanded} : faq,
      ),
    );
  }, []);

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <Stack mt={10} gap={10}>
        <FilterComponent
          filters={FAQFilterData}
          currentFilter={currentTab}
          onFilterChange={onPressTab}
          btnStyle={styles.buttonStyle}
          containerStyle={styles.containerStyle}
        />
        <InputWithLabel
          bRadius={10}
          placeholder={t(strings.profile.searchPlaceholder)}
        />
        <FAQList
          data={updatedFaqs}
          onPressArrow={onPressArrow}
          colors={colors}
        />
      </Stack>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    borderRadius: scale(12),
  },
  buttonStyle: {
    width: '32%',
    paddingVertical: scale(6),
    borderRadius: scale(12),
  },
});

export default memo(FAQTab);
