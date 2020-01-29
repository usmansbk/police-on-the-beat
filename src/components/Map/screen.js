import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default ({ region, me }) => (
  <MapView
    region={region}
    style={{
      ...StyleSheet.absoluteFillObject
    }}
  >
    {
      Boolean(me) && [
        <Marker
          key="me"
          title="Me"
          coordinate={me}
          image={require('../../assets/icon.png')}
        />
      ]
    }
  </MapView>
);