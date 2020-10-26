import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {CARD_COLOR} from '../../../utils/config';
import {windowWidth} from '../../../utils/dimensions';
import isEmpty from 'lodash/isEmpty';
import {convertKelvinToCelcius} from '../../../utils/helpers';

const LineChartComp = ({weather}: any) => {
  console.log(weather, '<====');
  return !isEmpty(weather) ? (
    <View>
      <LineChart
        data={{
          labels: ['Low', 'High'],
          datasets: [
            {
              data: [
                Math.abs(convertKelvinToCelcius(weather.main.temp_min)),
                Math.abs(convertKelvinToCelcius(weather.main.temp_max)),
              ],
            },
          ],
        }}
        width={windowWidth - 25} // from react-native
        height={220}
        yAxisLabel=""
        yAxisSuffix="C"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: CARD_COLOR,
          backgroundGradientTo: '#f7f7fb',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(155, 255, 95, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginTop: 30,
          borderRadius: 16,
        }}
      />
    </View>
  ) : (
    <View />
  );
};

export default LineChartComp;
