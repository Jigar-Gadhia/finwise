import React, {useRef, useState} from 'react';
import {
  TextInput,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import {useAppTheme} from '../theme/ThemeContext';
import Stack from './Stack';

const OTP_LENGTH = 6;

const OTPInput: React.FC = () => {
  const {colors} = useAppTheme();
  const [otp, setOtp] = useState<string[]>(Array(OTP_LENGTH).fill(''));
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (text: string, index: number) => {
    if (text.length > 1) {
      return;
    } // Prevent paste issues

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    // Auto move to next
    if (text && index < OTP_LENGTH - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number,
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];

      // If current box has value → clear it
      if (otp[index] !== '') {
        newOtp[index] = '';
        setOtp(newOtp);
        return;
      }

      // If empty → move back & clear previous
      if (index > 0) {
        newOtp[index - 1] = '';
        setOtp(newOtp);
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <Stack row justifyContent="space-between" style={styles.container}>
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={ref => {
            if (ref) {
              inputs.current[index] = ref;
            }
          }}
          style={[
            styles.input,
            {borderColor: colors.caribbeanGreen, color: colors.text},
          ]}
          value={digit}
          onChangeText={text => handleChange(text, index)}
          onKeyPress={e => handleKeyPress(e, index)}
          keyboardType="number-pad"
          maxLength={1}
          textAlign="center"
        />
      ))}
    </Stack>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: scale(8),
  },
  input: {
    width: scale(36),
    height: scale(36),
    borderRadius: scale(18),
    borderWidth: scale(1.5),
    fontSize: scale(16),
    fontWeight: 'bold',
    marginHorizontal: scale(4),
  },
});

export default OTPInput;
