import React from 'react';
import {View, StyleSheet, ViewStyle, StyleProp, ViewProps} from 'react-native';
import {scale} from 'react-native-size-matters';

interface StackProps extends ViewProps {
  children: React.ReactNode;

  gap?: number;
  row?: boolean;

  justifyContent?: ViewStyle['justifyContent'];
  alignItems?: ViewStyle['alignItems'];

  flex?: number;
  fullWidth?: boolean;
  fullHeight?: boolean;

  // ✅ Margin
  m?: number;

  mh?: number; // ✅ NEW
  mv?: number; // ✅ NEW

  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;

  // ✅ Padding
  p?: number;

  ph?: number;
  pv?: number;

  pt?: number;
  pb?: number;
  pl?: number;
  pr?: number;

  style?: StyleProp<ViewStyle>;
}

const Stack: React.FC<StackProps> = ({
  children,

  gap = 0,
  row = false,

  justifyContent,
  alignItems,

  flex,
  fullWidth,
  fullHeight,

  // Margin
  m,
  mh,
  mv,
  mt,
  mb,
  ml,
  mr,

  // Padding
  p,
  ph,
  pv,
  pt,
  pb,
  pl,
  pr,

  style,
  ...props
}) => {
  const dynamicStyle: ViewStyle = {
    gap: scale(gap),

    justifyContent,
    alignItems,

    flex,
    width: fullWidth ? '100%' : undefined,
    height: fullHeight ? '100%' : undefined,
    flexShrink: 1,

    // ✅ Margin resolution (NEW PRIORITY ORDER)

    margin: m !== undefined ? scale(m) : undefined,

    marginHorizontal:
      mh !== undefined ? scale(mh) : m !== undefined ? scale(m) : undefined,

    marginVertical:
      mv !== undefined ? scale(mv) : m !== undefined ? scale(m) : undefined,

    marginTop:
      mt !== undefined
        ? scale(mt)
        : mv !== undefined
        ? scale(mv)
        : m !== undefined
        ? scale(m)
        : undefined,

    marginBottom:
      mb !== undefined
        ? scale(mb)
        : mv !== undefined
        ? scale(mv)
        : m !== undefined
        ? scale(m)
        : undefined,

    marginLeft:
      ml !== undefined
        ? scale(ml)
        : mh !== undefined
        ? scale(mh)
        : m !== undefined
        ? scale(m)
        : undefined,

    marginRight:
      mr !== undefined
        ? scale(mr)
        : mh !== undefined
        ? scale(mh)
        : m !== undefined
        ? scale(m)
        : undefined,

    // ✅ Padding resolution

    padding: p !== undefined ? scale(p) : undefined,

    paddingHorizontal:
      ph !== undefined ? scale(ph) : p !== undefined ? scale(p) : undefined,

    paddingVertical:
      pv !== undefined ? scale(pv) : p !== undefined ? scale(p) : undefined,

    paddingTop:
      pt !== undefined
        ? scale(pt)
        : pv !== undefined
        ? scale(pv)
        : p !== undefined
        ? scale(p)
        : undefined,

    paddingBottom:
      pb !== undefined
        ? scale(pb)
        : pv !== undefined
        ? scale(pv)
        : p !== undefined
        ? scale(p)
        : undefined,

    paddingLeft:
      pl !== undefined
        ? scale(pl)
        : ph !== undefined
        ? scale(ph)
        : p !== undefined
        ? scale(p)
        : undefined,

    paddingRight:
      pr !== undefined
        ? scale(pr)
        : ph !== undefined
        ? scale(ph)
        : p !== undefined
        ? scale(p)
        : undefined,
  };

  return (
    <View
      style={[styles.base, row && styles.row, dynamicStyle, style]}
      {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    flexDirection: 'column',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Stack;
