import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {CARD_COLOR} from '../../../utils/config';
import {windowHeight} from '../../../utils/dimensions';
import {convertKelvinToCelcius} from '../../../utils/helpers';
import isEmpty from 'lodash/isEmpty';
const WeatherCard = ({weather}: any) => {
  console.log(weather, '<+=weather');
  return !isEmpty(weather) ? (
    <View style={styles.card}>
      <View>
        <Image
          source={{
            uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
          }}
          style={styles.image}
        />
        <Text style={styles.weatherText}>{weather.weather[0].main}</Text>
        <Text style={styles.dayTimeText}>{weather.name}</Text>
      </View>
      <View>
        <Text style={styles.headerFont}>
          {Math.round(convertKelvinToCelcius(weather.main.temp))}
          <Text style={styles.degreeFont}>C</Text>
        </Text>
        <Text style={styles.subHeadingText}>{`Feels like ${Math.round(
          convertKelvinToCelcius(weather.main.feels_like),
        )}`}</Text>
      </View>
    </View>
  ) : (
    <View />
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: CARD_COLOR,
    height: windowHeight * 0.28,
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  subHeadingText: {
    color: 'white',
    textAlign: 'right',
    paddingRight: 18,
    fontSize: 18,
    fontWeight: '400',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  weatherText: {
    fontSize: 28,
    color: 'white',
    fontWeight: '400',
    paddingLeft: 20,
    paddingTop: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  dayTimeText: {
    color: 'white',
    fontWeight: '400',
    paddingLeft: 20,
    fontSize: 22,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    marginLeft: 10,
  },
});

export default WeatherCard;
