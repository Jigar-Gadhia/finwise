import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import IconComponent from './IconComponent';
import TextComponent from './TextComponent';
import {scale} from 'react-native-size-matters';
import {LightColors} from '../theme/colors';
import {fontScale} from '../theme/fontScale';
import {useAppTheme} from '../theme/ThemeContext';
import {fonts} from '../theme/fonts';
import Stack from './Stack';

interface InputWithLabelProps {
  label?: string;
  placeholder?: string;
  password?: boolean;
  leftMargin?: boolean;
  lessMargin?: boolean;
  multiLine?: boolean;
  isDate?: boolean;
  isDropDown?: boolean;
  value?: string;
  marginTop?: number;
  labelInputGap?: ViewStyle['gap'];
  bRadius?: number;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  placeholder,
  password = false,
  leftMargin = true,
  lessMargin = false,
  multiLine = false,
  isDate = false,
  isDropDown = false,
  value = '',
  marginTop,
  labelInputGap = 5,
  bRadius = 18,
}) => {
  const [secureText, setSecureText] = useState(password);
  const [texts, setTexts] = useState(value);
  const {colors} = useAppTheme();
  const onPressEyeIcon = () => {
    setSecureText(prev => !prev);
  };
  return (
    <View style={{gap: scale(labelInputGap)}}>
      {label && (
        <TextComponent
          variant="subtitle"
          disableLineHeight
          fontSize={15}
          style={[leftMargin && {marginLeft: scale(10)}]}>
          {label}
        </TextComponent>
      )}
      <Stack
        row
        justifyContent="space-between"
        alignItems={multiLine ? 'flex-start' : 'center'}
        ph={10}
        pt={multiLine ? 5 : undefined}
        pl={lessMargin ? 15 : 22}
        mt={marginTop}
        style={[
          styles.intputContainer,
          {
            height: multiLine ? scale(130) : scale(32),
            borderRadius: scale(bRadius),
          },
        ]}>
        <TextInput
          placeholder={placeholder}
          style={styles.inputStyle}
          secureTextEntry={secureText}
          placeholderTextColor={colors.placeholder}
          multiline={multiLine}
          value={texts}
          onChangeText={setTexts}
        />
        {password && (
          <TouchableOpacity
            onPress={onPressEyeIcon}
            hitSlop={10}
            activeOpacity={0.8}>
            <IconComponent
              Icon={secureText ? 'eyeClosed' : 'eyeOpen'}
              width={24.14}
              height={9}
            />
          </TouchableOpacity>
        )}
        {isDate && (
          <TouchableOpacity hitSlop={10} activeOpacity={0.8}>
            <IconComponent Icon="calender" width={22} height={22} />
          </TouchableOpacity>
        )}
        {isDropDown && (
          <TouchableOpacity
            hitSlop={10}
            activeOpacity={0.8}
            style={styles.dropdownStyle}>
            <IconComponent
              Icon="dropDown"
              color="caribbeanGreen"
              width={12}
              height={12}
            />
          </TouchableOpacity>
        )}
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: scale(5),
  },
  intputContainer: {
    backgroundColor: LightColors.divider,
    width: '100%',
  },
  inputStyle: {
    flex: 1,
    height: '100%',
    color: LightColors.text,
    fontSize: fontScale(14),
    fontFamily: fonts.medium,
    paddingVertical: 0,
    includeFontPadding: false,
    textAlignVertical: 'center',
    margin: 0,
    padding: 0,
  },
  dropdownStyle: {
    marginRight: scale(5),
  },
});

export default InputWithLabel;
