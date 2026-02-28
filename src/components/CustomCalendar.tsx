import React, {useState, useMemo} from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useAppTheme} from '../theme/ThemeContext';
import Stack from './Stack';
import TextComponent from './TextComponent';
import IconComponent from './IconComponent';
import {scale} from 'react-native-size-matters';

if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental?.(true);
}

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const generateYears = (start = 2000, end = 2035) => {
  return Array.from({length: end - start + 1}, (_, i) => start + i);
};

const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const CustomCalendar = () => {
  const today = new Date();
  const {colors} = useAppTheme();

  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [currentDay, setCurrentDay] = useState(today.getDate());

  const [showMonth, setShowMonth] = useState(false);
  const [showYear, setShowYear] = useState(false);

  const years = useMemo(() => generateYears(1990, 2040), []);

  const daysInMonth = useMemo(() => {
    return new Date(year, month + 1, 0).getDate();
  }, [month, year]);

  const firstDayIndex = useMemo(() => {
    let day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Make Monday first
  }, [month, year]);

  const calendarDays = useMemo(() => {
    const days = [];

    for (let i = 0; i < firstDayIndex; i++) {
      days.push(null);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      days.push(d);
    }

    return days;
  }, [firstDayIndex, daysInMonth]);

  const toggleMonth = () => {
    LayoutAnimation.easeInEaseOut();
    setShowMonth(prev => !prev);
    setShowYear(false);
  };

  const toggleYear = () => {
    LayoutAnimation.easeInEaseOut();
    setShowYear(prev => !prev);
    setShowMonth(false);
  };

  return (
    <Stack>
      {/* HEADER */}
      <Stack mb={8} row justifyContent="space-between" ph={7}>
        <Pressable onPress={toggleMonth}>
          <Stack row alignItems="center" gap={5}>
            <TextComponent variant="subtitle" color="caribbeanGreen">
              {months[month]}
            </TextComponent>
            <IconComponent Icon="dropDown" height={12} width={12} />
          </Stack>
        </Pressable>

        <Pressable onPress={toggleYear}>
          <Stack row alignItems="center" gap={5}>
            <TextComponent variant="subtitle" color="caribbeanGreen">
              {year}
            </TextComponent>
            <IconComponent Icon="dropDown" height={12} width={12} />
          </Stack>
        </Pressable>
      </Stack>

      {/* MONTH DROPDOWN */}
      {showMonth && (
        <Stack
          style={[
            styles.dropdown,
            {left: 0, backgroundColor: colors.welcomeBg},
          ]}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled>
            {months.map((m, i) => (
              <Pressable
                key={m}
                style={[
                  styles.dropdownItem,
                  month === i && {backgroundColor: colors.caribbeanGreen},
                ]}
                onPress={() => {
                  LayoutAnimation.easeInEaseOut();
                  setMonth(i);
                  setShowMonth(false);
                }}>
                <TextComponent
                  variant="subtitle"
                  color={month === i ? 'staticBlack' : 'text'}>
                  {m}
                </TextComponent>
              </Pressable>
            ))}
          </ScrollView>
        </Stack>
      )}

      {/* YEAR DROPDOWN */}
      {showYear && (
        <Stack
          style={[
            styles.dropdown,
            {right: 0, backgroundColor: colors.welcomeBg},
          ]}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {years.map(y => (
              <Pressable
                key={y}
                style={[
                  styles.dropdownItem,
                  year === y && {backgroundColor: colors.caribbeanGreen},
                ]}
                onPress={() => {
                  LayoutAnimation.easeInEaseOut();
                  setYear(y);
                  setShowYear(false);
                }}>
                <TextComponent
                  variant="subtitle"
                  color={year === y ? 'staticBlack' : 'text'}>
                  {y}
                </TextComponent>
              </Pressable>
            ))}
          </ScrollView>
        </Stack>
      )}

      {/* WEEK LABELS */}
      <Stack row justifyContent="space-between" mv={8}>
        {weekDays.map(day => (
          <TextComponent
            key={day}
            variant="subtext"
            color="vividBlue"
            fontSize={13}
            align="center"
            style={styles.weekText}>
            {day}
          </TextComponent>
        ))}
      </Stack>

      {/* DAYS GRID */}
      <View style={styles.grid}>
        {calendarDays.map((day, index) => {
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          const isSelected = day === currentDay;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              onPress={() => setCurrentDay(day as number)}
              style={styles.dayCell}>
              <Stack
                alignItems="center"
                style={[
                  styles.activeDayCell,
                  {
                    backgroundColor: isSelected
                      ? colors.oceanBlue
                      : isToday
                      ? colors.caribbeanGreen
                      : 'transparent',
                  },
                ]}>
                <TextComponent
                  variant="subtext"
                  color={isToday ? 'primary' : 'text'}>
                  {day ? day : ''}
                </TextComponent>
              </Stack>
            </TouchableOpacity>
          );
        })}
      </View>
    </Stack>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: scale(30),
    width: scale(150),
    borderRadius: scale(8),
    maxHeight: scale(270),
    overflow: 'scroll',
    zIndex: 1,
  },
  dropdownItem: {
    padding: scale(10),
  },
  dropdownText: {
    color: 'white',
  },
  weekText: {
    width: '14.2%',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  dayCell: {
    width: '14.2%',
    height: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeDayCell: {
    paddingHorizontal: scale(9),
    paddingVertical: scale(3),
    borderRadius: scale(10),
  },
});
