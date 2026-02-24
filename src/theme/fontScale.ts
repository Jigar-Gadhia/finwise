import {Dimensions, PixelRatio} from 'react-native';

const {height} = Dimensions.get('window');

/**
 * Standard screen height from design (Figma baseline)
 * 680 = old RN baseline
 * Better modern baseline → 812 (iPhone X)
 */
const STANDARD_SCREEN_HEIGHT = 812;

export const fontScale = (
  size: number,
  standardHeight = STANDARD_SCREEN_HEIGHT,
) => {
  const scale = height / standardHeight;

  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};
