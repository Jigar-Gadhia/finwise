import {Dimensions, PixelRatio} from 'react-native';

let {width, height} = Dimensions.get('window');

const shortDim = Math.min(width, height);

/**
 * Layout scaling (padding, margin, radius)
 */
export const rs = (size: number) => {
  const scale = shortDim / 100;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

/**
 * Width specific
 */
export const rw = (size: number) => {
  return Math.round((width * size) / 100);
};

/**
 * Height specific
 */
export const rh = (size: number) => {
  return Math.round((height * size) / 100);
};

/**
 * Font scaling (MOST IMPORTANT)
 */
export const rf = (size: number) => {
  const scale = PixelRatio.getFontScale();
  return Math.round(((shortDim / 100) * size) / scale);
};
