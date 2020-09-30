import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import WeatherCard from '../reuse/Cards/weatherCard';

declare const global: {HermesInternal: null | {}};

const Main = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <WeatherCard />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  content: {
    padding: 20,
  },
});

export default Main;
