import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import {windowHeight} from '../../utils/dimensions';
import TemperatureCard from '../reuse/Cards/temperatureCard';
import WeatherCard from '../reuse/Cards/weatherCard';
import LineChartComp from '../reuse/charts/lineChart';
import {check, PERMISSIONS, request, RESULTS} from 'react-native-permissions';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import {API_KEY} from '../../security';
import {CARD_COLOR} from '../../utils/config';

const Main = () => {
  const [weather, setWeather] = useState({});
  // permission and location function
  const location = () => {
    check(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION)
      .then((result) => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            request(PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION).then(
              (res: string) => {
                console.log(result);
                if (res === 'granted') {
                  Geolocation.getCurrentPosition(
                    (position) => {
                      console.log(position);
                      axios
                        .get(
                          `api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=${API_KEY}`,
                        )
                        .then((res: any) => setWeather(res.data))
                        .catch((err) => console.log(err));
                    },
                    (error) => {
                      // See error code charts below.
                      console.log(error.code, error.message);
                    },
                    {enableHighAccuracy: true, timeout: 15000},
                  );
                } else {
                  alert('Denied');
                }
              },
            );
            break;
          case RESULTS.GRANTED:
            Geolocation.getCurrentPosition(
              (position) => {
                console.log(position);
                axios
                  .get(
                    `http://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}`,
                  )
                  .then((res: any) => setWeather(res.data))
                  .catch((err) => console.log(err));
              },
              (error) => {
                // See error code charts below.
                console.log(error.code, error.message);
              },
              {enableHighAccuracy: true, timeout: 15000},
            );
            break;
          case RESULTS.BLOCKED:
            alert('You need to allow location to use this app.');
            break;
        }
      })
      .catch((error) => {
        console.log(error, 'location error');
      });
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={location} style={styles.weatherButton}>
        <Text style={styles.weatherButtonText}>Get Weather</Text>
      </TouchableOpacity>
      <View style={styles.content}>
        <WeatherCard weather={weather} />
        <TemperatureCard weather={weather} />
        <LineChartComp weather={weather} />
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
  weatherButton: {
    backgroundColor: CARD_COLOR,
    width: 200,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    //
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
  weatherButtonText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default Main;
