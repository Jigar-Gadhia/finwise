import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import Container from '../../components/Container';
import {t} from '../../localization/t';
import {strings} from '../../localization';
import CardComponent from '../../components/CardComponent';
import Stack from '../../components/Stack';
import {chatMessages} from '../../utils/chatMessages';
import TextComponent from '../../components/TextComponent';
import {scale} from 'react-native-size-matters';
import {LightColors} from '../../theme/colors';
import IconComponent from '../../components/IconComponent';
import InputWithLabel from '../../components/InputWithLabel';
import FilterComponent from '../../components/FilterComponent';

const ChatScreen: React.FC = () => {
  const tabs = [{name: 'Support Assistant'}, {name: 'Help Center'}];
  const [currentTab, setCurrentTab] = useState(tabs[0].name);

  const onPressTab = (filter: string) => {
    setCurrentTab(filter);
  };

  return (
    <Container screenName={t(strings.profile.onlineSup)}>
      <CardComponent scroll={false} style={styles.containerStyle}>
        <FilterComponent
          containerStyle={styles.filtercontainer}
          filters={tabs}
          currentFilter={currentTab}
          btnStyle={styles.filterButtonStyle}
          onFilterChange={onPressTab}
        />
        <KeyboardAvoidingView
          behavior="padding"
          style={styles.keyContainer}
          keyboardVerticalOffset={scale(130)}>
          <Stack>
            <FlatList
              data={chatMessages}
              inverted
              contentContainerStyle={styles.cardStyle}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => {
                return (
                  <Stack
                    style={[
                      styles.chatCardStyle,
                      {
                        backgroundColor:
                          item.sender === 'bot'
                            ? LightColors.divider
                            : LightColors.caribbeanGreen,
                        alignSelf:
                          item.sender === 'bot' ? 'flex-start' : 'flex-end',
                      },
                    ]}>
                    <TextComponent color="staticBlack">
                      {item.text}
                    </TextComponent>
                  </Stack>
                );
              }}
            />
            <Stack
              style={[
                styles.inputContainer,
                {backgroundColor: LightColors.caribbeanGreen},
              ]}
              row
              alignItems="center"
              gap={5}>
              <TouchableOpacity
                activeOpacity={0.8}
                style={styles.iconContainer}>
                <IconComponent
                  showImage
                  image="profileCamera"
                  height={14}
                  width={14}
                />
              </TouchableOpacity>
              <InputWithLabel
                containerStyle={styles.chatInputStyle}
                placeholder={t(strings.profile.chatPlaceholder)}
                fontSize={12}
                lessMargin
              />
              <Stack row gap={5}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.iconContainer}>
                  <IconComponent Icon="Mic" height={14} width={14} />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={styles.iconContainer}>
                  <IconComponent Icon="Send" height={14} width={14} />
                </TouchableOpacity>
              </Stack>
            </Stack>
          </Stack>
        </KeyboardAvoidingView>
      </CardComponent>
    </Container>
  );
};

const styles = StyleSheet.create({
  containerStyle: {paddingBottom: scale(120), paddingHorizontal: scale(25)},
  cardStyle: {
    paddingTop: scale(20),
    paddingHorizontal: scale(10),
    gap: scale(20),
    paddingBottom: scale(110),
  },
  chatCardStyle: {
    padding: scale(12),
    borderRadius: scale(25),
    maxWidth: scale(268),
  },
  inputContainer: {
    padding: scale(12),
    borderRadius: scale(15),
  },
  iconContainer: {
    padding: scale(5),
    backgroundColor: LightColors.welcomeBg,
    borderRadius: scale(8),
  },
  chatInputStyle: {
    height: scale(28),
    width: scale(185),
  },
  filtercontainer: {
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
    top: scale(18),
    borderRadius: scale(22),
  },
  filterButtonStyle: {
    borderRadius: scale(18),
    paddingVertical: scale(14),
    paddingHorizontal: scale(14),
  },
  keyContainer: {
    flex: 1,
  },
});

export default ChatScreen;
