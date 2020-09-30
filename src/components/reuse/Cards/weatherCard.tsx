import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CARD_COLOR} from '../../../utils/config';
import {windowHeight} from '../../../utils/dimensions';

const WeatherCard = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.headerFont}>
        29
        {/* <Text style={styles.degreeFont}>{'\u00b0'}</Text> */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: CARD_COLOR,
    height: windowHeight * 0.2,
    borderRadius: 20,
    // shadow of card - https://ethercreative.github.io/react-native-shadow-generator/
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
    padding: 10,
  },
  headerFont: {
    fontSize: 72,
    color: 'white',
    fontWeight: '900',
    textAlign: 'right',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  degreeFont: {
    fontSize: 32,
    color: 'white',
    fontWeight: '900',

    backgroundColor: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
});

export default WeatherCard;
