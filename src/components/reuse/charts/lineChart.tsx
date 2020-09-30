import React from 'react';
import {View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import {windowWidth} from '../../../utils/dimensions';

const LineChartComp = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [1, 2, 3, 4, 5, 6],
            },
          ],
        }}
        width={windowWidth} // from react-native
        height={220}
        yAxisLabel="$"
        yAxisSuffix="k"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#f7f7fb',
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
  );
};

export default LineChartComp;
