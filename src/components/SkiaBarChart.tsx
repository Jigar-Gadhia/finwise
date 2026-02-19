import React from 'react';
import {View, ScrollView, StyleSheet} from 'react-native';
import {
  Canvas,
  Line,
  Text,
  useFont,
  Path,
  DashPathEffect,
  Skia,
  RoundedRect,
} from '@shopify/react-native-skia';
import {scale} from 'react-native-size-matters';
import {LightColors} from '../theme/colors';
import {filterTypes} from '../utils/filterData';

const GREEN = LightColors.caribbeanGreen;
const BLUE = LightColors.oceanBlue;

interface ChartItem {
  label: string;
  income: number;
  expense: number;
}

interface Props {
  data: ChartItem[];
  height?: number;
  filter?: filterTypes | undefined;
}

const SkiaBarChart = ({data, height = scale(150), filter}: Props) => {
  const font = useFont(
    require('../assets/fonts/Poppins-Regular.ttf'),
    scale(12),
  );

  const chartHeight = height * 0.75;
  const baseY = chartHeight;

  const barWidth = scale(5);
  const groupSpacing = scale(filter === 'weekly' ? 65 : 40);
  const barSpacing = scale(6);

  const barsWidth = scale(40) + data.length * groupSpacing;

  const maxDataValue = Math.max(
    ...data.map(item => Math.max(item.income, item.expense)),
  );

  const roundToNiceNumber = (value: number) => {
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    return Math.ceil(value / magnitude) * magnitude;
  };

  const maxValue = roundToNiceNumber(maxDataValue);

  const sectionCount = 5;

  const sections = Array.from(
    {length: sectionCount},
    (_, i) => (maxValue / sectionCount) * i,
  );

  const formatLabel = (value: number) => {
    if (value >= 1000) {
      return `${value / 1000}k`;
    }
    return `${value}`;
  };

  if (!font) {
    return null;
  }

  return (
    <View style={styles.container}>
      {/* ✅ FIXED Y AXIS */}
      <Canvas style={{width: scale(40), height}}>
        {sections.map((sectionValue, index) => {
          const y = baseY - (sectionValue / maxValue) * chartHeight;

          return (
            <React.Fragment key={index}>
              {sectionValue > 0 && (
                <Text
                  x={0}
                  y={y - 4}
                  text={formatLabel(sectionValue)}
                  font={font}
                  color={BLUE}
                />
              )}
            </React.Fragment>
          );
        })}
      </Canvas>

      {/* ✅ SCROLLABLE CHART */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}>
        <Canvas style={{width: barsWidth, height}}>
          {/* ✅ Grid Lines */}
          {sections.map((sectionValue, index) => {
            const y = baseY - (sectionValue / maxValue) * chartHeight;

            const path = Skia.Path.Make();
            path.moveTo(0, y);
            path.lineTo(barsWidth, y);

            return (
              <Path
                key={index}
                path={path}
                color={LightColors.lightBlue}
                style="stroke"
                strokeWidth={1}>
                <DashPathEffect intervals={[3, 4]} />
              </Path>
            );
          })}

          {/* ✅ Bars */}
          {data.map((item, index) => {
            const incomeHeight = (item.income / maxValue) * chartHeight;
            const expenseHeight = (item.expense / maxValue) * chartHeight;

            const incomeRadius = Math.min(scale(4), incomeHeight / 2);
            const expenseRadius = Math.min(scale(4), expenseHeight / 2);

            const x = scale(10) + index * groupSpacing;

            return (
              <React.Fragment key={index}>
                <RoundedRect
                  rect={Skia.RRectXY(
                    Skia.XYWHRect(
                      x,
                      baseY - incomeHeight,
                      barWidth,
                      incomeHeight,
                    ),
                    incomeRadius,
                    incomeRadius,
                  )}
                  color={GREEN}
                />

                <RoundedRect
                  rect={Skia.RRectXY(
                    Skia.XYWHRect(
                      x + barWidth + barSpacing,
                      baseY - expenseHeight,
                      barWidth,
                      expenseHeight,
                    ),
                    expenseRadius,
                    expenseRadius,
                  )}
                  color={BLUE}
                />

                <Text
                  x={x - 6}
                  y={chartHeight + scale(18)}
                  text={item.label}
                  font={font}
                  color={LightColors.staticBlack}
                />
              </React.Fragment>
            );
          })}

          {/* ✅ X Axis */}
          <Line
            p1={{x: 0, y: baseY}}
            p2={{x: barsWidth, y: baseY}}
            color="#1F2933"
            style="stroke"
            strokeWidth={1}
          />
        </Canvas>
      </ScrollView>
    </View>
  );
};

export default SkiaBarChart;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
