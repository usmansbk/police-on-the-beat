import React from 'react';
import { PermissionsAndroid, ToastAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import Screen from './screen';

export default class Container extends React.Component {
  state = {
    region: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  };

  async componentDidMount() {
    const hasLocationPermission = await this.requestLocationPermission();
    if (hasLocationPermission) {
      this.eye = Geolocation.watchPosition(
        (position) => {
          const { coords } = position;
          const { latitude, longitude } = coords;
          this.setState(prev => ({
            region: Object.assign({}, prev.region, {
              latitude,
              longitude
            }),
          }));
        },
        (error) => {
          console.log(error.code, error.message);
          ToastAndroid.show(error.message, ToastAndroid.SHORT);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000
        }
      );
    }
  }

  componentWillUnmount = () => {
    Geolocation.clearWatch(this.eye);
  };
  
  async requestLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      console.log(error);
    }
  } 

  render() {
    return (
      <Screen
        region={this.state.region}
      />
    );
  }
}