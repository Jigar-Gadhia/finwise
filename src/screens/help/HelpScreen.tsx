import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import {scale} from 'react-native-size-matters';
import Stack from '../../components/Stack';
import TextComponent from '../../components/TextComponent';
import FilterComponent from '../../components/FilterComponent';
import FAQTab from '../../components/FAQTab';
import ContactUsComponent from '../../components/ContactUsComponent';

const HelpScreen: React.FC = () => {
  const tabs = [{name: 'FAQ'}, {name: 'Contact Us'}];
  const [currentTab, setCurrentTab] = useState('FAQ');
  const onTabChange = (filter: string) => {
    setCurrentTab(filter);
  };
  return (
    <Container
      screenName={t(strings.profile.helpTitle)}
      titleCapitalised={false}>
      <CardComponent style={styles.cardStyle} scroll={false}>
        <Stack alignItems="center">
          <TextComponent variant="subtitle">
            {t(strings.profile.helpText)}
          </TextComponent>
          <FilterComponent
            filters={tabs}
            currentFilter={currentTab}
            onFilterChange={onTabChange}
            btnStyle={styles.tabButtonStyle}
            capitalised={false}
            containerStyle={styles.tabContainer}
          />
          {currentTab === 'FAQ' ? <FAQTab /> : <ContactUsComponent />}
        </Stack>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  cardStyle: {
    padding: scale(15),
    paddingHorizontal: scale(18),
    paddingBottom: scale(210),
  },
  tabButtonStyle: {
    width: '45%',
    paddingVertical: scale(15),
  },
  tabContainer: {
    marginTop: scale(15),
  },
});

export default HelpScreen;
