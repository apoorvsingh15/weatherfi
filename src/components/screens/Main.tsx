import React, {useEffect} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {windowHeight} from '../../utils/dimensions';
import TemperatureCard from '../reuse/Cards/temperatureCard';
import WeatherCard from '../reuse/Cards/weatherCard';
import LineChartComp from '../reuse/charts/lineChart';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
declare const global: {HermesInternal: null | {}};

const Main = () => {
  const location = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000},
    );
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={location}>
        <Text>test</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <WeatherCard />
        <TemperatureCard />
        <LineChartComp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: windowHeight,
    backgroundColor: '#f7f7fb',
  },
  content: {
    padding: 20,
  },
});

export default Main;
