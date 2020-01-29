import { action, observable, computed } from 'mobx';
import { PermissionsAndroid, ToastAndroid } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export default class LocationStore {
  @observable currentPosition = null; 

  initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  @computed get region() {
    if (this.currentPosition) {
      return this.currentPosition;
    }
    return this.initialRegion;
  }

  @action clearWatch = () => {
    if (this.eye) {
      Geolocation.clearWatch(this.eye);
    }
  };

  @action watch = async () => {
    const hasLocationPermission = await this.requestLocationPermission();
    if (hasLocationPermission && !this.eye) {
      this.eye = Geolocation.watchPosition(
        (position) => {
          const { coords } = position;
          const { latitude, longitude } = coords;
          console.log('Position:', latitude, longitude);
          this.currentPosition = {
            latitude,
            longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }
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
  };
  
  @action requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      return granted === PermissionsAndroid.RESULTS.GRANTED;
    } catch (error) {
      console.log(error);
    }
  };

}