import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';
import {Canvas, Path, Skia, Text, useFont} from '@shopify/react-native-skia';
import {scale} from 'react-native-size-matters';
import TextComponent from './TextComponent';
import {useAppTheme} from '../theme/ThemeContext';

const WIDTH = scale(360);
const HEIGHT = scale(120);
const RADIUS = scale(110);

const CENTER_X = WIDTH / 2;
const CENTER_Y = HEIGHT;

const data = [
  {value: 40, color: '#1F4FFF', label: '10%'},
  {value: 31, color: '#8EC5FF', label: '11%'},
  {value: 79, color: '#4F8EF7', label: '79%'},
];

const SemiPieChart = () => {
  const font = useFont(require('../assets/fonts/Poppins-Bold.ttf'), 22);
  const {colors} = useAppTheme();

  if (!font) {
    return null;
  }

  const total = data.reduce((sum, d) => sum + d.value, 0);

  let startAngle = 180;

  const SLICE_OFFSET = 6;

  return (
    <View style={styles.container}>
      <Canvas style={{width: WIDTH, height: HEIGHT}}>
        {data.map((item, index) => {
          const sweepAngle = (item.value / total) * 180;

          const rect = Skia.XYWHRect(
            CENTER_X - RADIUS,
            CENTER_Y - RADIUS,
            RADIUS * 2,
            RADIUS * 2,
          );

          const midAngle = startAngle + sweepAngle / 2;
          const midRad = (midAngle * Math.PI) / 180;

          // 🔥 offset slice outward
          const offsetX = SLICE_OFFSET * Math.cos(midRad);
          const offsetY = SLICE_OFFSET * Math.sin(midRad);

          const path = Skia.Path.Make();

          const startRad = (startAngle * Math.PI) / 180;
          const startX = CENTER_X + offsetX + RADIUS * Math.cos(startRad);
          const startY = CENTER_Y + offsetY + RADIUS * Math.sin(startRad);

          path.moveTo(CENTER_X + offsetX, CENTER_Y + offsetY);
          path.lineTo(startX, startY);

          path.addArc(
            Skia.XYWHRect(
              CENTER_X - RADIUS + offsetX,
              CENTER_Y - RADIUS + offsetY,
              RADIUS * 2,
              RADIUS * 2,
            ),
            startAngle,
            sweepAngle,
          );

          path.lineTo(CENTER_X + offsetX, CENTER_Y + offsetY);
          path.close();

          // Text center (also offset)
          const labelRadius = RADIUS * 0.6;

          const labelX = CENTER_X + offsetX + labelRadius * Math.cos(midRad);

          const labelY = CENTER_Y + offsetY + labelRadius * Math.sin(midRad);

          const percentage = item.label;

          startAngle += sweepAngle;

          return (
            <>
              <Path
                key={`slice-${item.value}`}
                path={path}
                color={item.color}
              />

              <Text
                key={`text-${item.label}`}
                x={labelX - font.measureText(percentage).width / 2}
                y={labelY + 6}
                text={percentage}
                font={font}
                color="white"
              />
            </>
          );
        })}
      </Canvas>

      {/* Legend */}
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.dot, {backgroundColor: colors.vividBlue}]} />
          <TextComponent fontSize={16}>Groceries</TextComponent>
        </View>

        <View style={styles.legendItem}>
          <View style={[styles.dot, {backgroundColor: colors.vividBlue}]} />
          <TextComponent fontSize={16}>Others</TextComponent>
        </View>
      </View>
    </View>
  );
};

export default memo(SemiPieChart);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  legend: {
    flexDirection: 'row',
    marginTop: scale(10),
    gap: scale(20),
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6,
  },
});
