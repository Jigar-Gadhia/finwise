import React, {useRef, useState} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  LayoutChangeEvent,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {t} from '../localization/t';
import {strings} from '../localization';
import {categoriesType} from '../utils/categoriesData';
import TextComponent from './TextComponent';
import {LightColors} from '../theme/colors';
import Stack from './Stack';
import {scale} from 'react-native-size-matters';
import IconComponent from './IconComponent';

interface DropdownProps {
  data: categoriesType[];
  title?: string;
  onSelect?: (value: string) => void;
}

const AnimatedDropdown: React.FC<DropdownProps> = ({title, data, onSelect}) => {
  const containerRef = useRef<View>(null);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(
    t(strings.common.categoryPlaceholder),
  );
  const [layout, setLayout] = useState({
    width: 0,
    height: 0,
  });

  const opacity = useSharedValue(0);
  const translateY = useSharedValue(-8);

  const toggleDropdown = () => {
    if (open) {
      opacity.value = withTiming(0, {duration: 150});
      translateY.value = withTiming(-8, {duration: 150});
      setTimeout(() => setOpen(false), 150);
    } else {
      setOpen(true);
      opacity.value = withTiming(1, {duration: 200});
      translateY.value = withTiming(0, {duration: 200});
    }
  };

  const handleSelect = (item: categoriesType) => {
    setSelected(item.name);
    onSelect?.(item.name);
    toggleDropdown();
  };

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{translateY: translateY.value}],
  }));

  const onTriggerLayout = (e: LayoutChangeEvent) => {
    const {width, height} = e.nativeEvent.layout;
    setLayout({width, height});
  };

  return (
    <View ref={containerRef} style={styles.wrapper}>
      {/* Trigger */}
      <TextComponent
        variant="subtitle"
        disableLineHeight
        fontSize={15}
        style={styles.dropDownText}>
        {title}
      </TextComponent>
      <TouchableOpacity onPress={toggleDropdown} hitSlop={20}>
        <Stack
          p={8}
          ph={15}
          style={styles.intputContainer}
          row
          justifyContent="space-between"
          alignItems="center"
          onLayout={onTriggerLayout}>
          <TextComponent color="placeholder" capitalised>
            {selected}
          </TextComponent>
          <IconComponent
            Icon="dropDown"
            color="caribbeanGreen"
            width={12}
            height={12}
          />
        </Stack>
      </TouchableOpacity>

      {/* Dropdown */}
      {open && (
        <Animated.View
          style={[
            styles.dropdown,
            {
              top: layout.height + scale(25),
              width: layout.width,
            },
            animatedStyle,
          ]}>
          <ScrollView nestedScrollEnabled>
            {data.map((item, index) => (
              <Pressable
                key={index}
                style={styles.item}
                onPress={() => handleSelect(item)}>
                <TextComponent color="staticBlack" capitalised>
                  {item.name}
                </TextComponent>
              </Pressable>
            ))}
          </ScrollView>
        </Animated.View>
      )}
    </View>
  );
};

export default AnimatedDropdown;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    zIndex: 10,
  },
  dropDownText: {
    marginBottom: scale(5),
  },
  dropdown: {
    position: 'absolute',
    left: 0,
    backgroundColor: LightColors.divider,
    borderRadius: scale(18),
    marginTop: 4,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    maxHeight: scale(352),
    zIndex: 1,
  },
  item: {
    padding: 14,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },
  intputContainer: {
    backgroundColor: LightColors.divider,
    width: '100%',
    borderRadius: scale(18),
  },
});
