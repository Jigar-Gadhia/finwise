import React, {useRef, useState} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  useWindowDimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Animated,
} from 'react-native';
import Container from '../../components/Container';
import CardComponent from '../../components/CardComponent';
import TextComponent from '../../components/TextComponent';
import {strings} from '../../localization';
import {t} from '../../localization/t';
import {onBoardingData} from '../../utils/onBoardingData';
import {moderateScale} from 'react-native-size-matters';
import {fontScale} from '../../theme/fontScale';
import IconComponent from '../../components/IconComponent';
import {navigate} from '../../utils/navigationService';
import {screenNames} from '../../utils/screenNames';
import {useAppTheme} from '../../theme/ThemeContext';

const OnBoardingScreen: React.FC = () => {
  const {width} = useWindowDimensions();
  const flatlistRef = React.useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const {colors} = useAppTheme();
  const scrollX = useRef(new Animated.Value(0)).current;

  const onPressNext = (index: number) => {
    if (index < onBoardingData.length - 1) {
      if (flatlistRef.current) {
        flatlistRef.current.scrollToIndex({
          index: index + 1,
          animated: true,
        });
        setTimeout(() => {
          setCurrentIndex(index + 1);
        }, 100);
      }
    } else {
      navigate(screenNames.WelcomeScreen);
    }
  };

  return (
    <Container showHeader={false}>
      <Animated.FlatList
        horizontal
        overScrollMode="never"
        ref={flatlistRef}
        centerContent
        pagingEnabled
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {
            useNativeDriver: true,
            listener: (event: NativeSyntheticEvent<NativeScrollEvent>) => {
              const {contentOffset, layoutMeasurement} = event.nativeEvent;

              const index = Math.round(
                contentOffset.x / layoutMeasurement.width,
              );

              setCurrentIndex(index);
            },
          },
        )}
        scrollEventThrottle={16}
        data={onBoardingData}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => {
          const {icon} = item;
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 1, 0],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View style={{width, opacity}}>
              <View style={styles.textContainer}>
                <TextComponent
                  variant="title"
                  customLineHeight={39}
                  style={styles.textStyles}>
                  {item.name}
                </TextComponent>
              </View>
              <CardComponent scroll={false}>
                <View style={styles.cardStyle}>
                  <IconComponent Icon={icon} height={220} width={220} />
                  <View style={{alignItems: 'center', gap: moderateScale(15)}}>
                    <TextComponent
                      variant="title"
                      disableLineHeight
                      style={styles.textStyles}
                      onPress={() => onPressNext(index)}>
                      {t(strings.common.next)}
                    </TextComponent>
                    <View style={styles.rowContainer}>
                      {Array.from({length: onBoardingData.length}).map(
                        (_, dotIndex) => (
                          <View
                            key={dotIndex}
                            style={[
                              {
                                backgroundColor:
                                  dotIndex === currentIndex
                                    ? colors.dot
                                    : 'transparent',
                                borderColor: colors.border,
                                borderWidth: dotIndex === currentIndex ? 0 : 1,
                              },
                              styles.dot,
                            ]}
                          />
                        ),
                      )}
                    </View>
                  </View>
                </View>
              </CardComponent>
            </Animated.View>
          );
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyles: {
    textAlign: 'center',
    fontSize: fontScale(25),
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(10),
  },
  dot: {
    width: moderateScale(10),
    height: moderateScale(10),
    borderRadius: moderateScale(10),
    borderWidth: 1,
  },
  cardStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    gap: moderateScale(35),
  },
});

export default OnBoardingScreen;
