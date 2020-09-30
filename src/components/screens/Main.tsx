import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TemperatureCard from '../reuse/Cards/temperatureCard';
import WeatherCard from '../reuse/Cards/weatherCard';

declare const global: {HermesInternal: null | {}};

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <WeatherCard />
        <TemperatureCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#f7f7fb',
  },
  content: {
    padding: 20,
  },
});

export default Main;
