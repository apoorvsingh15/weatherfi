import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {windowHeight} from '../../../utils/dimensions';
import isEmpty from 'lodash/isEmpty';

const TemperatureCard = ({weather}: any) => {
  return !isEmpty(weather) ? (
    <View style={styles.card}>
      <View>
        <Text style={styles.headerText}>Wind</Text>
        <Text style={styles.normalText}>{weather.wind.speed}</Text>
      </View>
      <View>
        <Text style={styles.headerText}>Humidity</Text>
        <Text style={styles.normalText}>{weather.main.humidity}</Text>
      </View>
      <View>
        <Text style={styles.headerText}>Visibility</Text>
        <Text style={styles.normalText}>{weather.visibility}</Text>
      </View>
    </View>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    height: windowHeight * 0.15,
    borderRadius: 20,
    // shadow of card - https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    marginTop: 20,
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    padding: 10,
  },
  headerText: {
    color: '#bcc1cb',
    fontSize: 16,
    fontWeight: '600',
  },
  normalText: {
    fontSize: 22,
    fontWeight: '600',
    paddingTop: 5,
  },
});

export default TemperatureCard;
